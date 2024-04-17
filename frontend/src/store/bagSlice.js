import { createSlice } from "@reduxjs/toolkit"

const bagSlice = createSlice({
    name: "bagItems",
    initialState: [],
    reducers: {
        addItemstoBag: (state, action) => {
            state.push(action.payload)
        },
        removeItemsfromBag: (state, action) => {
            return state.filter(itemId => itemId != action.payload)
        }
    }
});

export const bagItemAction = bagSlice.actions;

export default bagSlice;