import styled from "styled-components";

export const PostWrapper = styled('div') `
    width: 47%; 
    height: 450px;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid ${(props) => props.theme.palette.fontColor.additionalLight};
`

export const ContentSection = styled('div')`
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImageBlock = styled('div') `
    width: 100%; 
    height: 246px;
    overflow: hidden;
    padding-bottom: 24px;
`

export const PostImage = styled('img') `
    width: 100%;
    height: 100%;
    display: block;
`

export const TextBlock = styled('div')`
    width: 100%;
`

export const PostDate = styled('p') `
    font-size: 16px;
    color: ${(props) => props.theme.palette.fontColor.additional};
    padding-bottom: 10px;
`

export const PostTitle = styled('h2') `
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.palette.fontColor.main};
    margin-bottom: 28px;
`

export const ActionsSection = styled('div') `
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LikeButtons = styled('div') `
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const LikeCounter = styled('div') `
    padding: 0px 10px 0px 2px;
    font-size: 14px;
    color: ${(props) => props.theme.palette.fontColor.additional};
`