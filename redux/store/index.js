import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { reducers } from "../reducers"
import { middleware } from "../middlewares"

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat(...middleware)
    },
    devTools: process.env.APP_ENV !== "production",
})

setupListeners(store.dispatch)