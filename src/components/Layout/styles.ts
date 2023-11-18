import styled from "styled-components";

export const ContentWrapper = styled('div')`
    min-height: 100%;
    background-color: ${props => props.theme.palette.background.paper};
    color: ${props => props.theme.palette.fontColor.main};
    position: relative;
    top: 85px;
`