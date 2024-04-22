import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from '../features/detailsSlice'
export const store = configureStore({
    reducer: detailsReducer
})