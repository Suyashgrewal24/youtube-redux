import { createSlice } from "@reduxjs/toolkit";

const NavigationSlice = createSlice({
    name: "Navigation",
    initialState: {
        isOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen 
        },
        isClose: (state)=>{
            state.isOpen = false
        }

    }
})
export const {toggleMenu, isClose} = NavigationSlice.actions

export default NavigationSlice.reducer

