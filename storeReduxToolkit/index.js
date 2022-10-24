import  Reducer from "./photo"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        photos: Reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
 });