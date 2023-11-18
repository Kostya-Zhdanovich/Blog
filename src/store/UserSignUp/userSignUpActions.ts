import { baseActionType , baseActionTypeWithPayload, UserDataWithIDType } from "../../types";

export enum actionTypesEnum {
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    RESET_SIGN_UP = 'RESET_SIGN_UP',
};

interface ISignUpActions {
    userSignUpSuccess: (userData: UserDataWithIDType) => baseActionTypeWithPayload<actionTypesEnum.SIGN_UP_SUCCESS, UserDataWithIDType>;
    resetSignUp: () => baseActionType<actionTypesEnum.RESET_SIGN_UP>
};

export const userSignUpActions: ISignUpActions = {
    userSignUpSuccess: (userData: UserDataWithIDType) => ({
        type: actionTypesEnum.SIGN_UP_SUCCESS,
        payload: userData,
    }),
    resetSignUp: () => ({
        type: actionTypesEnum.RESET_SIGN_UP,
    }),
};