import Image from "next/image";

export const Card = ({ image, category, name, price }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image.desktop}
          alt={`Image of ${name}`}
          width={300}
          height={300}
          className="overflow-hidden rounded-xl shadow-md"
        />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          <button className="border-border flex items-center justify-center gap-2 whitespace-nowrap rounded-full border bg-secondaryBackground px-11 py-3 font-semibold text-title shadow-md transition hover:border-price hover:text-price">
            <Image
              src="/images/icon-add-to-cart.svg"
              alt="Cart icon"
              width={20}
              height={20}
            />
            Add to Cart
          </button>
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
