import type { CourseData } from "../../pages/CoursesPage/components/AddCoursePage/AddCoursePage.types";
import type { AddCourseResponse, GetCoursesResponse } from "../types";
import { apiSlice } from "./apiSlice";

const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<GetCoursesResponse, void>({
      query: () => ({
        url: "courses"
      }),
      providesTags: ["Courses"]
    }),
    addCourse: builder.mutation<AddCourseResponse, CourseData>({
      query: (data) => ({
        url: "courses",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Courses"]
    })
  })
})

export const { useGetCoursesQuery, useAddCourseMutation } = coursesApiSlice;