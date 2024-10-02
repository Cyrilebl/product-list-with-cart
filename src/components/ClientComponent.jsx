"use client";
import { RedHat } from "@/utils/fonts";
import { useState } from "react";
import { Cart } from "./Cart";
import { Categories } from "./Categories";
import { Header } from "./Header";
import { OrderSummary } from "./OrderSummary";
import { ShoppingList } from "./ShoppingList";

export const ClientComponent = ({ data }) => {
  const [category, setCategory] = useState("starter");

  const [cart, updateCart] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const deleteItem = (name) => {
    updateCart((prevItems) => prevItems.filter((i) => i.name !== name));
  };

  const resetItem = (resetFn, name) => {
    const itemExists = cart.find((i) => i.name === name);
    if (!itemExists) {
      resetFn();
    }
  };

  const resetEverything = () => {
    updateCart([]);
    setOrderConfirmed(false);
  };

  return (
    <>
      <Header />
      <main className={`font-mainFont ${RedHat}`}>
        <Categories data={data} category={category} setCategory={setCategory} />
        <div className="mt-10 flex justify-center gap-11 max-lg:flex-col max-lg:items-center 2xl:gap-14">
          <ShoppingList
            data={data}
            cart={cart}
            category={category}
            updateCart={updateCart}
            resetItem={resetItem}
          />
          <div className="xl w-full lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[450px]">
            <Cart
              items={cart}
              data={data}
              deleteItem={deleteItem}
              resetItem={resetItem}
              setOrderConfirmed={setOrderConfirmed}
            />
          </div>
        </div>
        <OrderSummary
          items={cart}
          data={data}
          orderConfirmed={orderConfirmed}
          setOrderConfirmed={setOrderConfirmed}
          resetEverything={resetEverything}
        />
      </main>
    </>
  );
};
