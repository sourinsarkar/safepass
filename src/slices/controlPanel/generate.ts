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
        createNewPassword: (state) => {
            state.value = Generator();
        }
    }
})

export const { createNewPassword } = generate.actions;
export default generate.reducer;