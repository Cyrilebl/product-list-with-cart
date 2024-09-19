import Image from "next/image";
import { useState } from "react";

export const Card = ({
  image,
  category,
  name,
  price,
  addToCart,
  removeFromCart,
}) => {
  const [items, setItems] = useState(1);
  const [showSecondButton, setShowSecondButton] = useState(false);
  const handleCartChange = (value) => {
    if (items + value > 0) {
      setItems(items + value);
    }
    if (items === 1 && value < 1) {
      setShowSecondButton(false);
    }
  };

  return (
    <div>
      <div className="relative">
        <Image
          src={image.desktop}
          alt={`Image of ${name}`}
          width={250}
          height={250}
          className="overflow-hidden rounded-xl shadow-md"
        />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          {!showSecondButton && (
            <button
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border bg-secondaryBackground px-11 py-3 font-semibold text-title shadow-md transition hover:border-price hover:text-price"
              onClick={() => {
                setShowSecondButton(true), addToCart({ name, price });
              }}
            >
              <Image
                src="/images/icon-add-to-cart.svg"
                alt="Cart icon"
                width={20}
                height={20}
              />
              Add to Cart
            </button>
          )}
          {showSecondButton && (
            <button className="flex items-center justify-center gap-12 whitespace-nowrap rounded-full bg-price px-4 py-3 font-semibold text-secondaryBackground shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 10 2"
                alt="Minus icon"
                className="rounded-full border border-background p-2 transition hover:bg-secondaryBackground"
                onClick={() => {
                  handleCartChange(-1), removeFromCart({ name, price });
                }}
              >
                <path fill="#fff" d="M0 .375h10v1.27H0V.375Z" />
              </svg>
              {items}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 10 10"
                alt="Plus icon"
                className="rounded-full border border-background p-2 transition hover:bg-secondaryBackground"
                onClick={() => {
                  handleCartChange(1), addToCart({ name, price });
                }}
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm font-medium">{category}</p>
        <h2 className="my-1 font-semibold">{name}</h2>
        <p className="font-semibold text-price">{`$${price.toFixed(2)}`}</p>
      </div>
    </div>
  );
};
