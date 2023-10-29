import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../src/slices/UserSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})
