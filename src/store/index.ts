import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postPreviewReducer } from "./PostPreview/postPreviewReducer";
import { postsReducer } from "./Posts/postsReducer";
import { themeReducer } from "./Theme/themeReducer";
import { userSignUpReducer } from "./UserSignUp/userSignUpReducer";
import { userSignInReducer } from "./UserSignIn/userSignInReducer";
import { paginationReducer } from "./Pagination/paginationReducer";
import { searchReducer } from "./Search/searchReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    theme: themeReducer,
    postPreview: postPreviewReducer,
    userSignUp: userSignUpReducer,
    session: userSignInReducer,
    pagination: paginationReducer,
    search: searchReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;