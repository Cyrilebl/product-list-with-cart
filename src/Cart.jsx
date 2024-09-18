import Image from "next/image";

export const Cart = () => {
  return (
    <div className="w-full max-w-[400px] rounded-xl bg-secondaryBackground p-8">
      <h2 className="text-2xl font-bold text-price">
        Your Cart (<span>0</span>)
      </h2>
      <Image
        src="/images/illustration-empty-cart.svg"
        alt="Cake illustration"
        width={150}
        height={150}
        className="m-auto py-8"
      />
      <p className="text-secondaryForeground: mx-10 text-center font-semibold">
        Your added items will appear here
      </p>
    </div>
  );
};
