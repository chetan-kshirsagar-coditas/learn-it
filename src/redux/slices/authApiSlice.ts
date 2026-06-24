import type { User } from "../../App.types";
import type { RegistrationData } from "../../pages/RegistrationPage/RegistationPage.types";
import { apiSlice } from "./apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<User, RegistrationData>({
            query: ( data ) => ({
                url: "auth/register",
                method: "POST",
                body: data
            })
        })
    })
})

export const { useRegisterUserMutation } = authApiSlice;