import { Card } from "./Card";

export const ShoppingList = ({
  data,
  category,
  cart,
  updateCart,
  resetItem,
}) => {
  const filteredItems = category
    ? data.filter((item) => item.category === category)
    : data;

  const addToCart = (item) => {
    const itemExists = cart.find((i) => i.name === item.name);
    if (itemExists) {
      const updatedCart = cart.map((i) =>
        i.name === item.name ? { ...i, count: i.count + 1 } : i,
      );
      updateCart(updatedCart);
    } else {
      updateCart([...cart, { ...item, count: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      if (existingItem.count > 1) {
        updateCart((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, count: cartItem.count - 1 }
              : cartItem,
          ),
        );
      } else {
        updateCart((prevItems) =>
          prevItems.filter((cartItem) => cartItem.name !== item.name),
        );
      }
    }
  };

  return (
    <div>
      <h2 className="mb-8 text-3xl font-semibold capitalize lg:text-4xl">
        {category}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map(({ name, image, price }) => (
          <Card
            key={name}
            image={image}
            name={name}
            price={price}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            resetItem={resetItem}
          />
        ))}
      </div>
    </div>
  );
};
