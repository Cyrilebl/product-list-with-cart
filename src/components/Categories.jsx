export const Categories = ({ data, setCategory }) => {
  const categories = data.reduce(
    (acc, data) =>
      acc.includes(data.category) ? acc : acc.concat(data.category),
    [],
  );

  return (
    <div>
      <div className="flex items-center justify-center gap-8 border-y border-foreground py-5 font-semibold text-foreground xl:gap-24 2xl:mx-72">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="hover:text-secondary relative capitalize transition ease-in-out"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};
