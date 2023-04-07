"use client"

import { Provider as RtkProvider } from "react-redux"
import { store } from "../store"

export default function Provider({ children }) {
    return (
        <RtkProvider store={store}>
            {children}
        </RtkProvider>
    )
}
