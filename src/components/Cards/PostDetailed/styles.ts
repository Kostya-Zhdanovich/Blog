import styled from "styled-components";

export const PostWrapper = styled('div') `
    width: 100%; 
    height: 450px;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid ${(props) => props.theme.palette.fontColor.additionalLight};
`

export const ContentSection = styled('div')`
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const TextBlock = styled('div')`
    padding-right: 30px;
`

export const PostDate = styled('p') `
    font-size: 16px;
    color: ${(props) => props.theme.palette.fontColor.additional};
    margin-bottom: 8px;
`

export const PostTitle = styled('h2') `
    font-size: 32px;
    font-style: 700;
    color: ${(props) => props.theme.palette.fontColor.main};
    margin-bottom: 24px;
`

export const PostDescription = styled('p') `
    display: block;
    font-size: 16px;
    line-height: 28px;
    color: ${(props) => props.theme.palette.fontColor.additional};
    margin-bottom: 31px;
`

export const ImageBlock = styled('div') `
    width: 256px; 
    height: 244px;
    overflow: hidden;
    display: block;
    flex-shrink: 0;
`

export const PostImage = styled('img') `
    width: 100%;
    height: 100%;
    display: block;
`

export const ActionsSection = styled('div') `
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
`

export const LikeButtons = styled('div') `
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const LikeCounter = styled('div') `
    padding: 0px 10px 0px 2px;
    font-size: 16px;
    color: ${(props) => props.theme.palette.fontColor.additional};
`