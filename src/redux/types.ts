import type { User } from "../App.types"
import type { CourseData } from "../pages/CoursesPage/components/AddCoursePage/AddCoursePage.types";

export interface LoginResponse {
    accessToken: string,
    refreshToken: string
}

export type GetMeResponse = User | null;

export interface AuthState {
    user: User | null;
}

export type GetCoursesResponse = (CourseData & { id: string, instructor: Partial<User> })[]

export type AddCourseResponse = CourseData & { instructor: Pick<User, "id" | "name"> }

export type GetInstructorsResponse = Pick<User, "id" | "name" | "email">[]

export type GetMyCoursesResponse = {
    id: string,
    course: CourseData & { instructor: Partial<User> }
}[]

export type EnrollCourseResponse = {
    "id": string,
    "courseId": string,
    "studentId": string,
}

export type RefreshSessionResponse = {
    accessToken: string;
    refreshToken: string
};

