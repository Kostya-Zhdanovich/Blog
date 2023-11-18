import { Dispatch } from "react";
import { postsApi } from "../../client/api/postsApi";
import { paginationActions } from "./paginationActions";

const getPosts = async(limit?: number, offset?: number) => {
    return await postsApi.getAllPosts(limit, offset);
};

const getPrevNextPosts = async(url:string) => {
    return await postsApi.getPrevNextPost(url);
};

export const getPostsCount = (limit?: number, offset?: number) => {
    return async (dispatch: any) => {
        const { data } = await getPosts(limit, offset);
        dispatch(paginationActions.getCount(data))
    }
};

export const getPrevNextPostsAsync = (url:string) => {
    return async (dispatch: any) => {
        const { data } = await getPrevNextPosts(url);
        dispatch(paginationActions.getPrevNextPost(data))
    }
};