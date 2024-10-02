import Image from "next/image";
import { useEffect } from "react";

export const OrderSummary = ({
  items,
  data,
  orderConfirmed,
  setOrderConfirmed,
  resetEverything,
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.count, 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = orderConfirmed ? "hidden" : "auto";
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [orderConfirmed]);

  return (
    <div>
      {orderConfirmed ? (
        <>
          {/* Background overlay */}
          <div className="fixed inset-0 z-10 bg-black bg-opacity-30" />

          {/* Centered OrderSummary */}
          <div className="fixed inset-0 z-20 flex items-center justify-center text-foreground">
            <div className="bg-card max-h-[90vh] overflow-y-auto rounded-xl px-8 py-10 shadow-lg max-md:w-screen md:min-w-[500px]">
              <Image
                src="/images/icon-order-confirmed.svg"
                alt="Order confirmed icon"
                width={48}
                height={48}
              />
              <h3 className="mb-2 mt-5 text-3xl font-bold">Order Confirmed</h3>
              <p className="text-primary mb-7 text-sm">
                We hope you enjoy your food!
              </p>
              <div className="rounded-md bg-background">
                {items.map((item, index) => {
                  const product = data.find(
                    (product) => product.name === item.name,
                  );
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b-2 px-7 py-5"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={product.image.thumbnail}
                          alt={`Image of ${item.name}`}
                          width={50}
                          height={50}
                          className="overflow-hidden rounded-md shadow-sm"
                        />
                        <div className="flex flex-col">
                          <h3 className="mb-2 font-semibold">{item.name}</h3>
                          <div className="flex">
                            <p className="text-secondary mr-2 font-bold">
                              {item.count}x
                            </p>
                            <p className="text-primary">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="font-bold">
                        ${(item.count * item.price).toFixed(2)}
                      </p>
                    </div>
                  );
                })}
                <p className="mb-7 flex items-center justify-between px-7 py-5">
                  Order Total
                  <span className="text-2xl font-bold">
                    ${total.toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                className="bg-secondary w-full rounded-full py-3 text-center font-semibold tracking-wider text-secondaryForeground transition hover:bg-orange-800"
                onClick={() => {
                  setOrderConfirmed(false), resetEverything();
                }}
              >
                Start New Order
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
