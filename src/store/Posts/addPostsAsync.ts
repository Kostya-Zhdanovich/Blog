import { Dispatch } from "redux";
import { postsApi } from "../../client/api/postsApi";
import { IPostData } from "../../types";

export const addPostsAsync = (postData: IPostData) => {
    return async (dispatch: Dispatch) => {
        try {
            const accessToken = localStorage.getItem('access_token');

            if(accessToken) {
                try {
                    const response = await postsApi.addPost(postData, JSON.parse(accessToken));
                    console.log(response);
                } catch (e) {
                    console.log(e);
                }
            }
        } catch (e) {
            console.log(e);
        }  
    }
};