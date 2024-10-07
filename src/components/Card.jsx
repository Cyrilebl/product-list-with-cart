import Image from "next/image";
import { useEffect, useState } from "react";

export const Card = ({
  image,
  name,
  price,
  addToCart,
  removeFromCart,
  resetItem,
}) => {
  const [items, setItems] = useState(1);
  const [showButton, setShowButton] = useState(false);

  const handleCartChange = (value) => {
    if (items + value > 0) {
      setItems(items + value);
    }
    if (items === 1 && value < 1) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    if (resetItem) {
      resetItem(() => {
        setItems(1);
        setShowButton(false);
      }, name);
    }
  }, [resetItem, name]);

  return (
    <div className="rounded-xl bg-card shadow-md">
      <div className="relative">
        <picture>
          <source media="(max-width: 1024px)" srcSet={image.mobile} />
          <Image
            src={image.desktop}
            alt={`Image of ${name}`}
            width={250}
            height={250}
            className="overflow-hidden rounded-xl shadow-md"
          />
        </picture>

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          {!showButton ? (
            <button
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-primary bg-card px-11 py-3 font-semibold text-foreground shadow-md transition hover:border-secondary hover:text-secondary"
              onClick={() => {
                setShowButton(true), addToCart({ name, price });
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
          ) : (
            <button className="flex items-center justify-center gap-12 whitespace-nowrap rounded-full bg-secondary px-4 py-3 font-semibold text-secondaryForeground shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 10 2"
                alt="Minus icon"
                className="rounded-full border border-secondaryForeground p-2 transition hover:bg-secondaryForeground"
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
                className="rounded-full border border-secondaryForeground p-2 transition hover:bg-secondaryForeground"
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
      <div className="px-5 pb-4 pt-10">
        <h3 className="mb-1 font-semibold">{name}</h3>
        <p className="font-semibold text-secondary">{`$${price.toFixed(2)}`}</p>
      </div>
    </div>
  );
};
