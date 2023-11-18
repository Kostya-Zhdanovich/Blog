import { RootState } from "..";

export const searchSelectors = {
    getSearchState: (state: RootState) => state.search.isSearchActive,
};