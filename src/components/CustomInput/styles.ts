import styled from "styled-components";

export const StyledLabel = styled('label') `
    font-size: 16px;
    font-weight: 600;
`

export const StyledInput = styled('input') `
    width: 100%;
    min-height: 56px;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 0 20px;
    margin-top: 8px;
    &::placeholder {
        font-size: 16px;
    }
`