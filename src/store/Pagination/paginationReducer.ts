import { IPost } from "../../types";
import { baseActionType , baseActionTypeWithPayload } from "../../types";
import { actionTypesEnum } from "./paginationActions";
import { IResponse } from "./paginationActions";

type defaultStateType = {
    postsCount: number,
    postsPerPage: number,
    pagesNumber: number,
    prevPage: string,
    nextPage: string,
};

const defaultState: defaultStateType = {
    postsCount: 0,
    postsPerPage: 10,
    pagesNumber: 0,
    prevPage: '',
    nextPage: '',
};

export const paginationReducer = (
    state = defaultState, 
    action: baseActionTypeWithPayload<actionTypesEnum, IResponse | number>): defaultStateType => {
    switch(action.type) {             
        case actionTypesEnum.GET_COUNT:
            if(typeof action.payload !== 'number') {
                return { ...state, postsCount: action.payload.count};
            };

            return state;
        case actionTypesEnum.SET_PER_PAGE:
            if(typeof action.payload === 'number') {
                return {...state, postsPerPage: action.payload};
            };

            return state;
        case actionTypesEnum.GET_PREV_NEXT_POST:
            if(typeof action.payload !== 'number') {
                return {...state, prevPage: action.payload.previous, nextPage: action.payload.next,};
            };
            
            return state;
        default:
            return state;
    }
};