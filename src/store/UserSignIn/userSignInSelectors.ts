import { RootState } from "..";

export const userSignInSelectors = {
    isUserSignedIn: (state: RootState) => state.session.isSignedIn,
    getUserData: (state: RootState) => state.session.userData,
};