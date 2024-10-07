import { Merriweather, Red_Hat_Text } from "next/font/google";

const RedHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-redHat",
});

export const RedHat = RedHatText.variable;

const MerriweatherText = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
  variable: "--font-merriweather",
});

export const MerriweatherTitle = MerriweatherText.variable;
