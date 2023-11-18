import { baseActionType , baseActionTypeWithPayload } from "../../types";

export enum actionTypesEnum {
    SEARCH_INPUT = 'SEARCH_INPUT',
    CLEAR_INPUT = 'CLEAR_INPUT',
};

interface ISearchActions {
    searchInput: () => baseActionType<actionTypesEnum.SEARCH_INPUT>;
    clearInput: () => baseActionType<actionTypesEnum.CLEAR_INPUT>;
};

export const searchActions: ISearchActions = {
    searchInput: () => ({
        type: actionTypesEnum.SEARCH_INPUT
    }),
    clearInput: () => ({
        type: actionTypesEnum.CLEAR_INPUT
    }),
};