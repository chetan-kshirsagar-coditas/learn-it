import type { User } from "../App.types"

export interface LoginResponse {
    accessToken: string,
    refreshToken: string
}

export type GetMeResponse = User | null;

export interface AuthState {
    user: User | null;
}