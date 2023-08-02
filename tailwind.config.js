/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
	content: [
		"./app/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
		"./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
			},
			colors: {
				primary: "#0CADB7",
				secondary: "#FE7263",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
}
