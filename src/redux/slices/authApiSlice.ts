import type { User } from "../../App.types";
import type { AddUserData } from "../../pages/AddUserPage/AddUser.types";
import type { LoginData } from "../../pages/LoginPage/LoginPage.types";
import type { RegistrationData } from "../../pages/RegistrationPage/RegistationPage.types";
import type { GetMeResponse, LoginResponse } from "../types";
import { apiSlice } from "./apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<User, RegistrationData>({
            query: (data) => ({
                url: "auth/register",
                method: "POST",
                body: data
            })
        }),
        loginUser: builder.mutation<LoginResponse, LoginData>({
            query: (data) => ({
                url: "auth/login",
                method: "POST",
                body: data
            })
        }),
        getMe: builder.query<GetMeResponse, void>({
            query: () => ({
                url: "auth/me",
            })
        }),
        addUser: builder.mutation<any, AddUserData>({
            query: (data) => ({
                url: "auth/users",
                method: "POST",
                body: data
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLazyGetMeQuery,
    useAddUserMutation
} = authApiSlice;