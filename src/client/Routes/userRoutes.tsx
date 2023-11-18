import { FC } from 'react';
import FullPostPage from '../../Pages/FullPostPage/FullPostPage';
import MyPostsPage from '../../Pages/MyPostsPage/MyPostsPage';
import MainPage from '../../Pages/MainPage/MainPage';
import SignInPage from '../../Pages/SignInPage/SignInPage';
import SuccessPage from '../../Pages/SignInPage/SuccessPage';
import SignUpPage from '../../Pages/SignUpPage/SignUpPage';
import RegistrationConfirmPage from '../../Pages/SignUpPage/RegistrationConfirm';
import ActivationSuccessPage from '../../Pages/SignUpPage/ActivationSuccessPage';
import AddPostPage from '../../Pages/AddPostPage/AddPostPage';
import NotFoundPage from '../../Pages/404/404';

type UserRoutes = {
    id: string | number,
    path: string,
    Component: FC<any>,
    additionalProps?: any,
    strict?: boolean,
    title?: string,
    navLink?: boolean,
};

export const userRoutes: UserRoutes[]= [
    {
        id: 1,
        path: '/',
        Component: MainPage,
        title: 'Home',
        navLink: false,
    },
    {
        id: 2,
        path: '/post/:postId',
        Component: FullPostPage,
        strict: true,
        title: 'Post',
        navLink: false,
    },
    {
        id: 3,
        path: '/my_posts',
        Component: MyPostsPage,
        title: 'My Posts',
        navLink: true,
    },
    {
        id: 4,
        path: '/sign-in',
        Component: SignInPage,
        title: 'Sign In',
        navLink: true,
    },
    {
        id: 5,
        path: '/success-sign-in',
        Component: SuccessPage,
        navLink: false,
    },
    {
        id: 6,
        path: '/sign-up',
        Component: SignUpPage,
        title: 'Sign Up',
        navLink: true,
    },
    {
        id: 7,
        path: '/sign-up/registration-confirm',
        Component: RegistrationConfirmPage,
        title: 'Registration Confirm',
        navLink: false,
    },
    {
        id: 8,
        path: '/activate/:uid/:token',
        Component: ActivationSuccessPage,
        title: 'Activation',
        navLink: false,
    },
    {
        id: 9,
        path: '/post/add-post',
        Component: AddPostPage,
        strict: true,
        title: 'Add Post',
        navLink: true,
    },
    {
        id: 120,
        path: '*',
        Component: NotFoundPage,
        navLink: false,
    },
]