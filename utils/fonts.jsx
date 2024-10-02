import { Noto_Serif, Red_Hat_Text } from "next/font/google";

const RedHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-redHat",
});

export const RedHat = RedHatText.variable;

const NotoSerifText = Noto_Serif({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-notoSerif",
});

export const NotoSerif = NotoSerifText.variable;
