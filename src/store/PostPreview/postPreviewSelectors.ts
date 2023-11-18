import { RootState } from "..";

//const namespace = 'postPreviewPopup';

export const postPreviewSelectors = {
    getSelectedPost: (state: RootState) => state.postPreview.selectedPost,
    getPopupState: (state: RootState) => state.postPreview.openedPopup,
};