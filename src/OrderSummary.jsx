import Image from "next/image";

export const OrderSummary = ({
  items,
  data,
  orderConfirmed,
  setOrderConfirmed,
  resetEverything,
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.count, 0);

  document.body.style.overflow = orderConfirmed ? "hidden" : "auto";

  return (
    <div>
      {orderConfirmed ? (
        <>
          {/* Background overlay */}
          <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />

          {/* Centered OrderSummary */}
          <div className="fixed inset-0 z-20 flex items-center justify-center">
            <div className="rounded-xl bg-secondaryBackground px-8 py-10 shadow-lg max-md:w-screen md:min-w-[500px]">
              <Image
                src="/images/icon-order-confirmed.svg"
                alt="Order confirmed icon"
                width={48}
                height={48}
              />
              <h2 className="mb-2 mt-5 text-3xl font-bold">Order Confirmed</h2>
              <p className="mb-7 text-sm">We hope you enjoy your food!</p>
              {items.map((item, index) => {
                const product = data.find(
                  (product) => product.name === item.name,
                );
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b bg-background px-7 py-5"
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
                        <h3 className="mb-2 font-semibold text-title">
                          {item.name}
                        </h3>
                        <div className="flex">
                          <p className="mr-2 font-bold text-price">
                            {item.count}x
                          </p>
                          <p>${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                    <p className="font-bold text-title">
                      ${(item.count * item.price).toFixed(2)}
                    </p>
                  </div>
                );
              })}
              <p className="mb-7 flex items-center justify-between bg-background px-7 py-5 text-title">
                Order Total
                <span className="text-2xl font-bold text-title">
                  ${total.toFixed(2)}
                </span>
              </p>
              <button
                className="w-full rounded-full bg-price py-3 text-center font-semibold tracking-wider text-secondaryBackground transition hover:bg-orange-800"
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
