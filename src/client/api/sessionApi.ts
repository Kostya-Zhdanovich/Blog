import { sessionClient } from "../utils/http";

export const sessionApi = {
    signInUser: ({ email, password }: {email: string, password: string}) => {
        return sessionClient.post("/auth/jwt/create/", { email, password })
    },
    fetchUserInfo: (token:string) => {
        return sessionClient.get("/auth/users/me/", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    },
    verifyToken: (token:string) => {
        return sessionClient.post("/auth/jwt/verify/", {token: token})
    },
    refreshToken: (token:string) => {
        return sessionClient.post("/auth/jwt/refresh/", {refresh: token})
    },
};