import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { postsActions } from "../Posts/postsActions";
import { toggleThemeActions } from "../Theme/themeActions";
import { postPreviewActions } from "../PostPreview/postPreviewActions";
import { getPostsAsync } from "../Posts/getPostsAsync";
import { userSignUp } from "../UserSignUp/userSignUp";
import { authorizeUser, userSignIn } from "../UserSignIn/userSignIn";
import { userSignInActions } from "../UserSignIn/userSignInActions";
import { getPostsCount } from "../Pagination/getPostsCount";
import { paginationActions } from "../Pagination/paginationActions";
import { getPrevNextPostsAsync } from "../Pagination/getPostsCount";
import { searchPostsAsync } from "../Posts/getPostsAsync";
import { searchActions } from "../Search/searchActions";
import { addPostsAsync } from "../Posts/addPostsAsync";
import { getMyPosts } from "../Posts/getPostsAsync";

export const useActions = () => {
    const dispatch = useDispatch();
    
    return bindActionCreators({
        ...postsActions, 
        ...toggleThemeActions, 
        ...postPreviewActions,
        ...userSignInActions,
        ...paginationActions,
        ...searchActions,
        getPostsAsync,
        userSignUp,
        userSignIn,
        authorizeUser,
        getMyPosts,
        getPostsCount,
        getPrevNextPostsAsync,
        searchPostsAsync,
        addPostsAsync,
    }, 
    dispatch);
};