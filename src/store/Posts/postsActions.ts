import { baseActionType , baseActionTypeWithPayload } from "../../types";
import { IPost } from "../../types";

export enum actionTypesEnum {
    SET_POSTS = 'GET_POSTS',
    ADD_TO_FAVS = 'ADD_TO_FAVS',
    ADD_TO_POPULAR = 'ADD_TO_POPULAR',
    LIKE = 'LIKE',
    DISLIKE = 'DISLIKE',
};

interface IPostsActions {
    setPosts: (posts: IPost[]) => baseActionTypeWithPayload<actionTypesEnum, IPost[]>;
    addToFavs: (postId: number) => baseActionTypeWithPayload<actionTypesEnum, number>;
    addToPopular: (post: IPost) => baseActionTypeWithPayload<actionTypesEnum, IPost>;
    likePost: (postId: number) => baseActionTypeWithPayload<actionTypesEnum, number>;
    dislikePost: (postId: number) => baseActionTypeWithPayload<actionTypesEnum, number>;
};

export const postsActions: IPostsActions = {
    setPosts: (posts) => ({
        type: actionTypesEnum.SET_POSTS,
        payload: posts,
    }),
    addToFavs: (postId) => ({
        type: actionTypesEnum.ADD_TO_FAVS,
        payload: postId,
    }),
    addToPopular: (post) => ({
        type: actionTypesEnum.ADD_TO_POPULAR,
        payload: post,
    }),
    likePost: (postId) => ({
        type: actionTypesEnum.LIKE,
        payload: postId,
    }),
    dislikePost: (postId) => ({
        type: actionTypesEnum.DISLIKE,
        payload: postId,
    }),
};