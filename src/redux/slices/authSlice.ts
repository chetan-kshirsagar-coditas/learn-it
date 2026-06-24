import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../types";
import type { User } from "../../App.types";

const initialState: AuthState = {
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state: AuthState, action: PayloadAction<{ user: User, token: string }>) => {
            state.user = action.payload.user;
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state: AuthState) => {
            state.user = null
            localStorage.removeItem("token");
        },
        restoreSession: (state: AuthState, action: PayloadAction<User>) => {
                state.user = action.payload
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;