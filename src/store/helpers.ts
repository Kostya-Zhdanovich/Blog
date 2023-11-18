import { Dispatch } from "redux";
import { sessionApi } from "../client/api/sessionApi";
import { UserDataType } from "../types";
import { userSignInActions } from "./UserSignIn/userSignInActions";

export const handleUserSignIn = async (userData: UserDataType) => {
    const { email, password } = userData;
    const response = await sessionApi.signInUser({ email, password });

    return response?.data;
};

export const getUserInfo = async (accessToken: string, dispatch: Dispatch) => {
    const userInfo = await retrieveMe(accessToken);

    if(userInfo?.id) {
        dispatch(userSignInActions.userSignIn(userInfo))
    }
};

export const retrieveMe = async (token: string) => {
    const response = await sessionApi.fetchUserInfo(token);

    return response?.data;
};

export const isTokenValid = async (token: string) => {
    try {
        const response = await sessionApi.verifyToken(token);

        return response.status === 200;
    } catch (error) {
        return false;
    }
};

export const refreshTokenRequest = async (refreshToken: string) => {
    const response = await sessionApi.refreshToken(refreshToken);

    return response?.data;
};

export const refreshAccessToken = async() => {
    const refreshToken = localStorage.getItem('refresh_token');

    if(refreshToken) {
        const parsedRefreshToken = JSON.parse(refreshToken);
        const { access: newAccessToken } = await refreshTokenRequest(parsedRefreshToken);

        if(newAccessToken) {
            localStorage.setItem('access_token', JSON.stringify(newAccessToken));
        };

        return newAccessToken
    };
}