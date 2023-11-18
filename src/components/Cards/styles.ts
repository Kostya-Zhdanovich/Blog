import styled from "styled-components";
import { builtinModules } from 'module';

type SizeProps = {
    size: 'large' | 'medium' | 'small' | 'search';
};

const fontSize = {
    large: '26px',
    medium: '20px',
    small: '20px',
    search: '20px',
};

const wrapperSize = {
    large: 'width: 100%; height: 350px',
    medium: 'width: 47%; height: 350px',
    small: 'width: 100%; height: 160px',
    search: 'width: 100%; height: 160px',
};

const textBlockSize = {
    large: '60%',
    medium: '60%',
    small: '60%',
    search: '85%'
};

const flexDirection = {
    large: 'row',
    medium: 'column',
    small: 'row',
    search: 'row',
};

const showDescription = {
    large: 'display: block',
    medium: 'display: none',
    small: 'display: none',
    search: 'display: none',
};

const imgSize = {
    large: 'width: 200px; height: 200px',
    medium: 'width: 100%; height: 200px',
    small: 'width: 100px; height: 100px',
    search: 'width: 100px; height: 100px',
};

export const PostWrapper = styled('div')<SizeProps> `
    ${(props) => wrapperSize[props.size]};
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid silver;
`

export const ContentSection = styled('div')<SizeProps> `
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: ${props => flexDirection[props.size]};
    justify-content: space-between;
`

export const TextBlock = styled('div')<SizeProps> `
    width: ${props => textBlockSize[props.size]};
    padding-right: 20px;
`

export const PostDate = styled('p') `
    font-size: 16px;
    color: silver;
    margin: 0 0 20px 0;
`

export const PostTitle = styled('h2')<SizeProps> `
    font-size: ${(props) => fontSize[props.size]};
    color: black;
    margin-bottom: 20px;
`

export const PostDescription = styled('p')<SizeProps> `
    ${(props) => showDescription[props.size]};
    font-size: 16px;
    color: silver;
    margin-bottom: 20px;
`

export const ImageBlock = styled('div')<SizeProps> `
    ${(props) => imgSize[props.size]};
    overflow: hidden;
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
`

export const LikeButtons = styled('div') `
    width: 50%;
    display: flex;
    justify-content: flex-start;
`