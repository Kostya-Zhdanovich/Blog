import { Dispatch } from "redux";
import { UserDataType } from "../../types"
import { handleUserSignIn , retrieveMe , isTokenValid , refreshTokenRequest, getUserInfo , refreshAccessToken } from "../helpers";

export const userSignIn = (userData: UserDataType) => {
    return async (dispatch: Dispatch) => {
        const tokens = await handleUserSignIn(userData);

        if(tokens.access && tokens.refresh && document) {
            document.cookie = `access_token =${tokens.access}`;
            document.cookie = `refresh_token =${tokens.refresh}`;
            localStorage.setItem('access_token', JSON.stringify(tokens.access));
            localStorage.setItem('refresh_token', JSON.stringify(tokens.refresh));

            await getUserInfo(tokens.access, dispatch);
        }
    }
};

export const authorizeUser = () => {
    return async (dispatch:Dispatch) => {
        const accessToken = localStorage.getItem('access_token');

        if(!accessToken) return;

        const parsedToken = JSON.parse(accessToken);

        try {
            const verifyParsedToken = await isTokenValid(parsedToken);

            if(verifyParsedToken) {
                await getUserInfo(parsedToken, dispatch);
            } else {
                const newAccessToken = await refreshAccessToken();

                if(newAccessToken) {
                    await getUserInfo(newAccessToken, dispatch);
                };
            }
        } catch (error) {
            console.log(error)
        };
    }
};