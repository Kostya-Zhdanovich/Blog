import styled from "styled-components";

export const SignInPageWrapper = styled('div') `
    max-width: 700px;
    margin: 0 auto;   
    padding-bottom: 72px;
`

export const PageTitle = styled('div') `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 72px 0; 
    gap: 32px;
    & a {
        text-decoration: none;
        color: ${(props) => props.theme.palette.primary.main};  
    }
`

export const InnerWrapper = styled('div') `
    width: 620px;
    margin: 0 auto;   
    padding: 40px;
    box-shadow: 2px 2px 2px 2px gray;
    border-radius: 5px;
`

export const SignInForm = styled('form') `
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 60px;
`

export const SignInFormGroup = styled('div') `
    & label {
        font-size: 16px;
        font-weight: 500;
    }
`

export const SignInInputField = styled('input') `
    width: 100%;
    height: 56px;
    background-color: white;
    border: none;
    padding-left: 10px;
    margin-top: 8px;
    font-size: 18px;
    &::placeholder {
        font-size: 16px;
        font-weight: 400;
    };
    &:focus {
        outline: none;
    };
`

export const ForgotPasswordLink = styled('div') `
    margin-top: 5px;
    font-size: 14px;
    & a {
        color: black;
        text-decoration: none; 
    }
`

export const SignInText = styled('p') `
    width: 100%;
    text-align: center;
    margin-top: 20px;
    & a {
        text-decoration: none;
        color: ${(props) => props.theme.palette.primary.main};     
    }
`

export const SuccessText = styled('div') `
    width: 100%;
    font-size: 16px;
    margin-bottom: 30px;
`