import type { CourseData } from "../../pages/CoursesPage/components/AddCoursePage/AddCoursePage.types";
import type { AddCourseResponse, EnrollCourseResponse, GetCoursesResponse, GetInstructorsResponse, GetMyCoursesResponse } from "../types";
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
    }),
    getMyCourses: builder.query<GetMyCoursesResponse, void>({
      query: () => ({
        url: "me/courses",
      }),
      providesTags: ["EnrollCourses"]
    }),
    enrollCourse: builder.mutation<EnrollCourseResponse, string>({
      query: (id) => ({
        url: `courses/${id}/enroll`,
        method: "POST"
      }),
      invalidatesTags: ["EnrollCourses"]
    })
  })
})

export const {
  useGetCoursesQuery,
  useAddCourseMutation,
  useGetInstructorsQuery,
  useGetMyCoursesQuery,
  useEnrollCourseMutation
} = coursesApiSlice;