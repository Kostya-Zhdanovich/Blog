import { IPost } from "../../types";
import { baseActionType , baseActionTypeWithPayload } from "../../types";
import { actionTypesEnum } from "./postsActions";

type defaultStateType = Record<'allPosts' | 'favouritePosts' | 'popularPosts', IPost[]>;

const defaultState: defaultStateType = {
    allPosts: [],
    favouritePosts: [],
    popularPosts: [],
};

export const postsReducer = (
    state = defaultState, 
    action: baseActionTypeWithPayload<actionTypesEnum, IPost | IPost[] | number>) => {
    switch(action.type) {
        case actionTypesEnum.SET_POSTS:
            if(Array.isArray(action.payload)) {
                return {...state, allPosts: [...action.payload.map((post) => ({
                    ...post, 
                    likes: 0,
                    isFavourite: false,
                })) as IPost[]] };
            }

            return state;               
        case actionTypesEnum.ADD_TO_FAVS:
            return { ...state, allPosts: state.allPosts.map(post => 
                post.id === action.payload ? {...post, isFavourite: !post.isFavourite} : post)};
        case actionTypesEnum.ADD_TO_POPULAR:
            return {...state, popularPosts: [...state.popularPosts, action.payload as IPost] };
        case actionTypesEnum.LIKE: 
            return { ...state, allPosts: state.allPosts.map(post => post.id === action.payload ? {...post, likes: post.likes + 1} : post)};
        case actionTypesEnum.DISLIKE: 
            return { ...state, allPosts: state.allPosts.map(post => post.id === action.payload ? {...post, likes: post.likes - 1} : post)};
        
        default:
            return state;
    }
};