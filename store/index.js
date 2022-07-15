import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loading-slice";

const store = configureStore({
    reducer: loadingSlice.reducer,
});
export default store;
store.subscribe(() => console.log(store.getState()));
