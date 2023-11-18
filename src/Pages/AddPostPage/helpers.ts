import { IPostData } from "../../types";

export const validatePostData = (postData: IPostData) => {
    return (
        !!postData.description && 
        !!postData.image && 
        !!postData.lesson_num && 
        !!postData.text && 
        !!postData.title
    );
};