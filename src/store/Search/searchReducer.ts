import { baseActionType , baseActionTypeWithPayload } from "../../types";
import { actionTypesEnum } from "./searchActions";

const defaultState = {
    isSearchActive: false,
};

export const searchReducer = (
    state = defaultState, 
    action: baseActionType<actionTypesEnum>) => {
    switch(action.type) {
        case actionTypesEnum.SEARCH_INPUT:
            return {...state, isSearchActive: true};
        case actionTypesEnum.CLEAR_INPUT:
            return {...state, isSearchActive: false};
        default:
            return state;
    }
};