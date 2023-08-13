"use client"

import "../globals.css"

import Fonts from "@/constants/fonts"
import { RecoilRoot } from "recoil"
import Provider from "@/redux/provider"
import Navbar from "./components/Navbar"

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<head />
			<body className={[Fonts.className, "font-montserrat"].join(" ")}>
				<Provider>
					<RecoilRoot>
						<Navbar />
						{children}
					</RecoilRoot>
				</Provider>
			</body>
		</html>
	)
}
