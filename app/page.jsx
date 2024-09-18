import { promises as fs } from "fs";
import { Card } from "../src/Card";
import { Cart } from "../src/Cart";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <div className="m-20">
      <main className="font-mainFont">
        <div className="flex justify-center gap-11 max-lg:flex-col max-lg:items-center">
          <div>
            <h1 className="mb-10">Desserts</h1>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {data.map((card) => (
                <Card key={card.name} {...card} />
              ))}
            </div>
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </main>
    </div>
  );
}
