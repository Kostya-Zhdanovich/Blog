import { baseActionType, baseActionTypeWithPayload, UserDataWithIDType } from "../../types";

export enum actionTypesEnum {
    SIGN_IN_USER = 'SIGN_IN_USER',
    SIGN_OUT = 'SIGN_OUT',
};

interface ISignInActions {
    userSignIn: (userData: UserDataWithIDType) => baseActionTypeWithPayload<actionTypesEnum.SIGN_IN_USER, UserDataWithIDType>;
    signOut: () => baseActionType<actionTypesEnum.SIGN_OUT>
};

export const userSignInActions: ISignInActions = {
    userSignIn: (userData: UserDataWithIDType) => ({
        type: actionTypesEnum.SIGN_IN_USER,
        payload: userData,
    }),
    signOut: () => ({
        type: actionTypesEnum.SIGN_OUT
    })
};