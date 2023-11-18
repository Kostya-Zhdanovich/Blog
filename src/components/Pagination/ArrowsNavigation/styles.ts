import styled from "styled-components";

export const PaginationWrapper = styled('div') `
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Pages = styled('div') `
    width: max-content;
    & span {
        margin: 0 10px;
        cursor: pointer;
    }
`