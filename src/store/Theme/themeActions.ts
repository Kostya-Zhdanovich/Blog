import { ThemeModesEnum } from "../../styles/theme";
import { baseActionTypeWithPayload } from "../../types";

export enum actionTypesEnum {
    TOGGLE_THEME = 'TOGGLE_THEME',
};

interface IThemeActions {
    toggleTheme: (themeMode: ThemeModesEnum) => 
        baseActionTypeWithPayload<actionTypesEnum, ThemeModesEnum>
};

export const toggleThemeActions: IThemeActions = {
    toggleTheme: (payload) => {
        return {
            type: actionTypesEnum.TOGGLE_THEME,
            payload,
        };
    },   
};