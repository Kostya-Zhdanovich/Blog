import { baseActionType , baseActionTypeWithPayload , UserDataWithIDType, UserDataType } from "../../types";
import { actionTypesEnum } from "./userSignUpActions";

type DefaultStateType = {
    isSignUpSuccessful: boolean;
    inputData: UserDataWithIDType | null,
};

const defaultState: DefaultStateType = {
    isSignUpSuccessful: false,
    inputData: null,
};

export const userSignUpReducer = (
    state = defaultState, 
    action: baseActionType<actionTypesEnum> | baseActionTypeWithPayload<actionTypesEnum, UserDataWithIDType>): DefaultStateType => {
    switch(action.type) { 
        case actionTypesEnum.SIGN_UP_SUCCESS:
            //@ts-ignore
            return { ...state, isSignUpSuccessful: true, inputData: action.payload }                   
        case actionTypesEnum.RESET_SIGN_UP:
            return { ...state, isSignUpSuccessful: false, inputData: null }
        default:
            return state;
    }
};