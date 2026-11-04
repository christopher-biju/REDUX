import { configureStore } from "@reduxjs/toolkit";
import countrerSlice from "./slices/counterSlice";

const counterStore = configureStore({
    reducer: {
        counterReducer: countrerSlice
    }
})
export default counterStore