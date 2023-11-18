import styled from "styled-components";

export const FullPostPageWrapper = styled('div') `
    max-width: 1200px;
    margin: 0 auto;
    padding: 72px 15px;
`

export const PrevNextLinks = styled('div') `
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

`

export const LinkButton = styled('button') `
    border: none;
    outline: none;
    background-color: transparent;
    & a {
        text-decoration: none;
        font-size: 16px;
    }
`