import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false };

const loadingSlice = createSlice({
    initialState: initialState,
    name: "loading",
    reducers: {
        setLoading(state,action) {
            state.loading = action;
        },
    },
});
export const { setLoading } = loadingSlice.actions;
export default loadingSlice;
