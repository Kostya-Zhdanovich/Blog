import { baseActionType , baseActionTypeWithPayload } from "../../types";

export enum actionTypesEnum {
    SET_SELECTED_POST = 'SET_SELECTED_POST',
    CLEAR_SELECTED_POST = 'CLEAR_SELECTED_POST',
    OPEN_POPUP = 'OPEN_POPUP',
    CLOSE_POPUP = 'CLOSE_POPUP',
};

interface IPostPreviewActions {
    setSelected: (selectedPost: any) => baseActionTypeWithPayload<actionTypesEnum, any>;
    clearSelected: () => baseActionType<actionTypesEnum>;
    openPopup: () => baseActionType<actionTypesEnum>;
    closePopup: () => baseActionType<actionTypesEnum>;
};

export const postPreviewActions: IPostPreviewActions = {
    setSelected: (selectedPost) => ({
        type: actionTypesEnum.SET_SELECTED_POST,
        payload: selectedPost,
    }),
    clearSelected: () => ({
        type: actionTypesEnum.CLEAR_SELECTED_POST
    }),
    openPopup: () => ({
        type: actionTypesEnum.OPEN_POPUP
    }),
    closePopup: () => ({
        type: actionTypesEnum.CLOSE_POPUP
    }),
};