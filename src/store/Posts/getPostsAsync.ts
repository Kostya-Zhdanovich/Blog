import { Dispatch } from "react";
import { postsApi } from "../../client/api/postsApi";
import { refreshAccessToken, refreshTokenRequest } from "../helpers";
import { postsActions } from "./postsActions";

const getPosts = async(limit?: number, offset?: number) => {
    return await postsApi.getAllPosts(limit, offset);
};

export const getPostsAsync = (limit?: number, offset?: number) => {
    return async (dispatch: any) => {
        const { data } = await getPosts(limit, offset);
        dispatch(postsActions.setPosts(data.results))
    }
};

const searchPosts = async(search?: any) => {
    return await postsApi.searchPosts(search);
};

export const searchPostsAsync = (search?: any) => {
    return async (dispatch: any) => {
        const { data } = await searchPosts(search);
        dispatch(postsActions.setPosts(data.results))
    }
};

export const getMyPosts = () => {
    return async (dispatch: any) => {
        const accessToken = localStorage.getItem('access_token');

        if(accessToken) {
            try {
                const response = await postsApi.getMyPosts(JSON.parse(accessToken));
            } catch (e) {
                //@ts-ignore
                if(e?.response?.status === 401) {
                    console.log('unauthorized');
                    const newAccessToken = await refreshAccessToken();

                    if(newAccessToken) {
                        dispatch(getMyPosts())
                    }
                }
            }
        }
    }
}