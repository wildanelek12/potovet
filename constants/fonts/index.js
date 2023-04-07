import { Montserrat } from "@next/font/google"

const MontserratFont = Montserrat({
    subsets: ['latin'],
    variable: "--font-montserrat",
})

const Fonts = {
    className: [MontserratFont.variable].join(" "),
}

export default Fonts