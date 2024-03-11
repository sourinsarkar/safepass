import { configureStore } from "@reduxjs/toolkit";
import CreateNewReducer from "../slices/controlPanel/generate"

export const store = configureStore({
    reducer: {
        generate: CreateNewReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;