import  Reducer from "./photo"
import { consigureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        photos: Reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
 });