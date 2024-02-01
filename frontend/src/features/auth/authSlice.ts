import { createSlice } from "@reduxjs/toolkit";

type AuthSliceStateType = {
    message: string;
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        message: "Initial",
    } as AuthSliceStateType,
    reducers: {
        login(state, action: { payload: string; type: unknown }) {
            state = {
                message: action.payload ?? "Works",
            };
        },
    },
});

export const { login } = authSlice.actions;
export const authReducer = authSlice.reducer;
