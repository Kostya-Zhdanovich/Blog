import styled from 'styled-components';

export const ThemeTogglerWrapper = styled('div') `
    width: 100%;
    height: 45px;
    display: flex;
`

export const ThemeTogglerButton = styled('button') `
    width: 50%;
    height: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid transparent;

    &:hover {
        border-bottom: 3px solid ${(props) => props.theme.palette.primary.main};
    }
`