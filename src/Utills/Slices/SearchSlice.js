import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "Search",
    initialState: {
        searchState: "",
    },
    reducers: {
        searchBarText: (state, action) => {
            state.searchState = action.payload
        },
    },
});

export const {searchBarText} = SearchSlice.actions
export default SearchSlice.reducer