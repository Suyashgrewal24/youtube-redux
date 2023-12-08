import { configureStore } from "@reduxjs/toolkit";
import NavigationReducer from './Slices/SideBarSlice'
import Search from "./Slices/SearchSlice";

const store = configureStore({
    reducer: {
        navigation: NavigationReducer,
        searchBar: Search

    }
})

export default store
