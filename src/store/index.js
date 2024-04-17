import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import loadSlice from "./loadSlice";

const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        loadData: loadSlice.reducer,
    }
});

export default myntraStore;