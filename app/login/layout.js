"use client"

import "../globals.css"
import Fonts from "@/constants/fonts"
import { RecoilRoot } from "recoil"
import Provider from "@/redux/provider"

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
