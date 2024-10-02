import Image from "next/image";

export const Cart = ({ items, deleteItem, resetItem, setOrderConfirmed }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.count, 0);

  const handleDelete = (name) => {
    deleteItem(name);
    resetItem(() => name);
  };

  return (
    <div className="bg-card rounded-xl p-8">
      <h2 className="text-secondary mb-7 text-2xl font-bold">
        Your Cart (
        <span>{items.reduce((total, item) => total + item.count, 0)}</span>)
      </h2>
      {items.length === 0 ? (
        <>
          <Image
            src="/images/illustration-empty-cart.svg"
            alt="Cake illustration"
            width={150}
            height={150}
            className="m-auto py-8"
          />
          <p className="text-primary mx-10 text-center font-semibold">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {item.name}
                </h3>
                <div className="flex">
                  <p className="text-secondary mr-2 font-bold">{item.count}x</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p className="ml-7 font-bold">
                    ${(item.count * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 10 10"
                  className="hover:border-ring border-primary cursor-pointer rounded-full border p-1 transition"
                  onClick={() => handleDelete(item.name)}
                >
                  <path
                    fill="#18191a"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                  />
                </svg>
              </div>
            </div>
          ))}
          <p className="my-6 flex items-center justify-between text-foreground">
            Order Total
            <span className="text-2xl font-bold text-title">
              ${total.toFixed(2)}
            </span>
          </p>
          <div className="mb-6 mt-7 flex items-center justify-center gap-2 rounded-md bg-background py-4 text-center">
            <Image
              src="/images/icon-carbon-neutral.svg"
              alt="Cake illustration"
              width={21}
              height={20}
            />
            <p className="font-medium text-foreground">
              This is a{" "}
              <strong className="font-semibold">carbon-neutral</strong> delivery
            </p>
          </div>
          <button
            className="bg-secondary w-full rounded-full py-3 text-center font-semibold tracking-wider text-secondaryForeground transition hover:bg-orange-800"
            onClick={() => {
              setOrderConfirmed(true);
            }}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};
