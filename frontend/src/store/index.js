import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import loadSlice from "./loadSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        loadData: loadSlice.reducer,
        bagItems: bagSlice.reducer,
    }
});

export default myntraStore;