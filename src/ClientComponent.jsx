"use client";
import { useState } from "react";
import { Card } from "./Card";
import { Cart } from "./Cart";
import { OrderSummary } from "./OrderSummary";

export const ClientComponent = ({ data }) => {
  const [cart, updateCart] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addToCart = (item) => {
    updateCart((prevItems) => {
      const itemExists = prevItems.find((i) => i.name === item.name);
      if (itemExists) {
        // Si l'élément existe déjà dans le panier, augmenter la quantité
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, count: i.count + 1 } : i,
        );
      } else {
        // Sinon, ajouter un nouvel élément au panier
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    updateCart((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.name === item.name,
      );
      if (existingItem) {
        if (existingItem.count > 1) {
          return prevItems.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, count: cartItem.count - 1 }
              : cartItem,
          );
        } else {
          // Si la quantité tombe à 0, on retire l'article du panier
          return prevItems.filter((cartItem) => cartItem.name !== item.name);
        }
      }
      return prevItems;
    });
  };

  const deleteItem = (name) => {
    updateCart((prevItems) => prevItems.filter((item) => item.name !== name));
  };
  const resetItem = (resetFn, name) => {
    const itemExists = cart.find((item) => item.name === name);
    if (!itemExists) {
      resetFn();
    }
  };

  const resetEverything = () => {
    updateCart([]);
    setOrderConfirmed(false);
  };

  return (
    <div className="m-5 lg:mx-40 lg:my-20">
      <main className="font-mainFont">
        <div className="flex justify-center gap-11 max-lg:flex-col max-lg:items-center">
          <div>
            <h1 className="mb-10">Desserts</h1>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {data.map((card) => (
                <Card
                  key={card.name}
                  {...card}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  resetItem={resetItem}
                />
              ))}
            </div>
          </div>
          <div className="xl w-full lg:max-w-[350px] xl:max-w-[550px]">
            <Cart
              items={cart}
              data={data}
              deleteItem={deleteItem}
              resetItem={resetItem}
              setOrderConfirmed={setOrderConfirmed}
            />
          </div>
        </div>
        <div>
          <OrderSummary
            items={cart}
            data={data}
            orderConfirmed={orderConfirmed}
            setOrderConfirmed={setOrderConfirmed}
            resetEverything={resetEverything} 
          />
        </div>
      </main>
    </div>
  );
};
