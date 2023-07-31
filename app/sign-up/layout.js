"use client";
import "../globals.css";
import Fonts from "@/constants/fonts";
import { RecoilRoot } from "recoil";
import { Montserrat } from "next/font/google";
import Provider from "@/redux/provider";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "fallback", // <--
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={[Fonts.className, "font-montserrat"].join(" ")}>
        <Provider>
          <RecoilRoot>{children}</RecoilRoot>
        </Provider>
      </body>
    </html>
  );
}
