import { baseActionType , baseActionTypeWithPayload } from "../../types";
import { actionTypesEnum } from "./postPreviewActions";

const defaultState = {
    selectedPost: null,
    openedPopup: false,
};

export const postPreviewReducer = (
    state = defaultState, 
    action: baseActionTypeWithPayload<actionTypesEnum, any>) => {
    switch(action.type) {
        case actionTypesEnum.SET_SELECTED_POST:
            return {...state, selectedPost: action.payload,};
        case actionTypesEnum.CLEAR_SELECTED_POST:
            return {...state, selectedPost: null};
        case actionTypesEnum.OPEN_POPUP:
            return {...state, openedPopup: true};
        case actionTypesEnum.CLOSE_POPUP:
            return {...state, openedPopup: false};
        default:
            return state;
    }
};