import { IPostData } from "../../types";
import { postsClient } from "../utils/http";
import { sessionClient } from "../utils/http";

export const postsApi = {
    getAllPosts: (limit = 10, offset = 0) => postsClient.get(`/blogs/?limit=${limit}&offset=${offset}`),
    getPrevNextPost: (url:string) => postsClient.get(url),
    searchPosts: (search: any) => postsClient.get(`/blogs/?search=${search}`),
    getMyPosts: (token: string) => sessionClient.get('/blog/posts/my_posts/?limit=10', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    addPost: (postData: IPostData, token: string) => sessionClient.post('/blog/posts/', {
         params: postData,
         headers: {
            Authorization: `Bearer ${token}`
        }
    }),
};