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

export type GetCoursesResponse = (CourseData & { instructor: Partial<User> })[]
export type AddCourseResponse =  CourseData & { instructor: Pick<User, "id" | "name"> }
export type GetInstructorsResponse = Pick<User, "id" | "name" | "email">[]