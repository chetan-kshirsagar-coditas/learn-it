import type { CourseData } from "../../pages/CoursesPage/components/AddCoursePage/AddCoursePage.types";
import type { AddCourseResponse, GetCoursesResponse, GetInstructorsResponse } from "../types";
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
    }),
    getInstructors: builder.query<GetInstructorsResponse, void>({
      query: () => ({
          url: "instructors"
      })
    })
  })
})

export const { useGetCoursesQuery, useAddCourseMutation, useGetInstructorsQuery } = coursesApiSlice;