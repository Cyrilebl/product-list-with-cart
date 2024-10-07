import { MerriweatherTitle } from "@/utils/fonts";
import Image from "next/image";

export const Header = () => {
  return (
    <header
      className={`mb-5 items-center justify-center font-titleFont max-md:flex-col-reverse lg:mb-14 ${MerriweatherTitle} flex gap-6`}
    >
      <h1 className="text-4xl lg:text-6xl">Gusto e Passione</h1>
      <Image src="/images/logo.png" alt="Company logo" width={50} height={50} />
    </header>
  );
};
