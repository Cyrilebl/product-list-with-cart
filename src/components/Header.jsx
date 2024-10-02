import { NotoSerif } from "@/utils/fonts";
import Image from "next/image";

export const Header = () => {
  return (
    <header
      className={`font-titleFont mb-5 items-center justify-center max-md:flex-col-reverse lg:mb-14 ${NotoSerif} flex gap-6`}
    >
      <h1 className="text-4xl lg:text-6xl">Gusto e Passione</h1>
      <Image src="/images/logo.png" alt="Company logo" width={50} height={50} />
    </header>
  );
};
