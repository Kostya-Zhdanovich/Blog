export type baseActionType<T> = {
    type: T;
};

export type baseActionTypeWithPayload<T, P> = {
    type: T;
    payload: P;
};

export type UserDataType = {
    userName?: string;
    email: string;
    password: string;
};

export type UserDataWithIDType = {
    username?: string;
    email: string;
    id: string;
};

export interface IPost {
    id: number,
    title: string,
    url: string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: string,
    updated_at: string,
    featured: boolean,
    launches: [],
    events: [],
    likes: number,
    isFavourite?: boolean,
};

export interface IPostData {
    title: string,
    lesson_num: string,
    description: string,
    text: string,
    image: string,
};