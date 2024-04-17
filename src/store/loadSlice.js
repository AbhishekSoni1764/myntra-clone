import { createSlice } from "@reduxjs/toolkit"

const loadSlice = createSlice({
    name: "loadData",
    initialState: {
        fetchDone: false,
        dataFetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true;
        },
        fetchingStarted: (state) => {
            state.dataFetching = true;
        },
        fetchingEnded: (state) => {
            state.dataFetching = false;
        }
    }
});

export const loadSliceAction = loadSlice.actions;

export default loadSlice;