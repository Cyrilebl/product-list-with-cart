import { promises as fs } from "fs";
import { ClientComponent } from "../src/ClientComponent";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data.json", "utf8");
  const data = JSON.parse(file);
  return <ClientComponent data={data} />;
}
