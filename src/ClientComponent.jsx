"use client";
import { useState } from "react";
import { Card } from "./Card";
import { Cart } from "./Cart";

export const ClientComponent = ({ data }) => {
  const [cart, updateCart] = useState([]);

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

  return (
    <div className="m-8 lg:m-20">
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
                />
              ))}
            </div>
          </div>
          <div>
            <Cart items={cart} deleteItem={deleteItem} />
          </div>
        </div>
      </main>
    </div>
  );
};
