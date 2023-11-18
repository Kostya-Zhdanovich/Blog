import styled from "styled-components";

export const ContentWrapper = styled('div') `
    width: 100%;
`

export const PostTitle = styled('div') `
    padding: 32px 0 40px 0; 
`

export const PostImage = styled('img') `
    width: 100%;
    height: 500px;
    display: block;
    padding: 0 40px 20px 40px;
`

export const PostDescription = styled('div') `
    padding: 0 50px 20px 50px;
`

export const ActionsSection = styled('div') `
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LikeButtons = styled('div') `
    width: max-content;
    height: max-content;
    display: flex;
`