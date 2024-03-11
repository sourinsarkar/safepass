import { createSlice } from "@reduxjs/toolkit";
import Generator from "../../components/Generator";

interface passwordState {
    value?: string | null,
}

const initialState: passwordState = {
    value: ""
}

export const generate = createSlice({
    name: "generate",
    initialState,
    reducers: {
        createNew: (state) => {
            state.value = Generator();
        }
    }
})

export const { createNew } = generate.actions;
export default generate.reducer;