import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
    isOpen: false,
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        openSubItem: (state, action) => {
            state.id = action.payload.id
        },
        closeSubItem: (state) => {
            state.id = ""
        },
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen
        },
    },
})

export const { openSubItem, closeSubItem, toggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer
