import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { reducers } from "../reducers"

export const store = configureStore({
    reducer: reducers,
    devTools: true,
})

setupListeners(store.dispatch)