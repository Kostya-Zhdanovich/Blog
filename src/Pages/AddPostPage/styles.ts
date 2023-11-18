import styled from "styled-components";

export const PageWrapper = styled('div') `
    max-width: 1118px;
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
    width: 100%;
    margin: 0 auto;   
`

export const AddPostForm = styled('div') `
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 60px;
`

export const FormGroup = styled('div') `
    & label {
        font-size: 16px;
        font-weight: 500;
    }
`

export const ButtonsGroup = styled('div') `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 8px 0 76px 0;
`

export const CancelButton = styled('button') `
    width: 150px;
    height: 56px;
    font-size: 18px;
    font-weight: 400;
    background-color: ${(props) => props.theme.palette.primary.additionalLight};  
    color: ${(props) => props.theme.palette.fontColor.main}; 
    border: none;
    outline: none;
    margin-right: 25px;
`

export const AddPostButton = styled('button') `
    width: 150px;
    height: 56px;
    font-size: 18px;
    font-weight: 400;
    background-color: ${(props) => props.theme.palette.primary.main};  
    color: ${(props) => props.theme.palette.fontColor.white}; 
    border: none;
    outline: none;
`