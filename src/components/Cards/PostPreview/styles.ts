import styled from "styled-components";

export const PostWrapper = styled('div') `
    width: 100%; 
    height: 450px;
    display: flex;
    flex-direction: column;
`

export const ContentSection = styled('div')`
    width: 100%;
    height: calc(100% - 50px);
`

export const TextImageBlock = styled('div')`
    width: 100%;
    display: flex;
    margin-bottom: 40px;
`

export const TextBlock = styled('div') `
    width: calc(100% - 256px);
    display: flex;
    flex-direction: column;
    padding-right: 30px;
`

export const PostDate = styled('p') `
    width: 100%;
    font-size: 16px;
    color: ${(props) => props.theme.palette.fontColor.additional};
    margin-bottom: 30px;
`

export const PostTitle = styled('h2') `
    width: 100%;
    font-size: 32px;
    font-style: 700;
    color: ${(props) => props.theme.palette.fontColor.main};
`

export const PostDescription = styled('p') `
    font-size: 16px;
    line-height: 28px;
    color: ${(props) => props.theme.palette.fontColor.additional};
    margin-bottom: 31px;
`

export const ImageBlock = styled('div') `
    width: 256px; 
    height: 244px;
    overflow: hidden;
    //display: block;
    flex-shrink: 0;
`

export const PostImage = styled('img') `
    width: 100%;
    height: 100%;
    display: block;
`