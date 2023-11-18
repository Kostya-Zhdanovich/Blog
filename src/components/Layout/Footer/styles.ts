import styled from "styled-components";


export const StyledFooter = styled('footer') `
    width: 100%;
    height: 85px;
    position: relative;
    top: 85px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.palette.primary.main};
`

export const StyledFooterWrapper = styled('div') `
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: ${(props) => props.theme.palette.fontColor.main};
`