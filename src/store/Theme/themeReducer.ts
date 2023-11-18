import { ThemeModesEnum } from "../../styles/theme";
import { actionTypesEnum } from "./themeActions";
import { baseActionType , baseActionTypeWithPayload } from "../../types";

const defaultState = {
    themeMode: ThemeModesEnum.LIGHT
};

export const themeReducer = (state = defaultState, action: baseActionTypeWithPayload<actionTypesEnum, ThemeModesEnum>) => {
    switch (action.type) {
        case actionTypesEnum.TOGGLE_THEME: 
            return {
                ...state,
                themeMode: action.payload
            };
        default:
            return state;
    }
};