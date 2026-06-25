import type { GetCoursesResponse } from "../types";
import { apiSlice } from "./apiSlice";

const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<GetCoursesResponse, void>({
      query: () => ({
        url: "courses"
      })
    })
  })
})

export const { useGetCoursesQuery } = coursesApiSlice;