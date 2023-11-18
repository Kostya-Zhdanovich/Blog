import { baseActionType , baseActionTypeWithPayload , UserDataWithIDType, UserDataType } from "../../types";
import { actionTypesEnum } from "./userSignInActions";

type DefaultStateType = {
    isSignedIn: boolean;
    userData: UserDataWithIDType | null,
};

const defaultState: DefaultStateType = {
    isSignedIn: false,
    userData: null,
};

export const userSignInReducer = (
    state = defaultState, 
    action: baseActionTypeWithPayload<actionTypesEnum, UserDataWithIDType>): DefaultStateType => {
    switch(action.type) { 
        case actionTypesEnum.SIGN_IN_USER:
            return { ...state, isSignedIn: true, userData: action.payload };
        case actionTypesEnum.SIGN_OUT: 
            return { ...state, isSignedIn: false, userData: null }                 
        default:
            return state;
    }
};