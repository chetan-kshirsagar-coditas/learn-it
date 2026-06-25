import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://xhkrpfff-4000.inc1.devtunnels.ms/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if(token) headers.set("Authorization", `Bearer ${token}`);
            return headers;
        }
    }),
    tagTypes: ["Courses", "EnrollCourses"],
    endpoints: () => ({})
})
