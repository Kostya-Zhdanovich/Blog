import { Dispatch } from "redux";
import { UserDataType } from "../../types"
import { userSignUpActions } from "./userSignUpActions";

const handleUserSignUp = async (userData: UserDataType) => {
    const { userName: username, email, password } = userData;

    const response = await fetch(`https://studapi.teachmeskills.by/auth/users/`, {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {
            'Content-type': 'application/json',
        }
    });

    return response.json();
};

export const userSignUp = (userData: UserDataType) => {
    return (dispatch: Dispatch) => {
        handleUserSignUp(userData).then((data) => {
            if(data.id) {
                dispatch(userSignUpActions.userSignUpSuccess(data));
            }
        })
    }
};