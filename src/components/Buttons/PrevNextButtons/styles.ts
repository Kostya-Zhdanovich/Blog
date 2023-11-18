import styled from 'styled-components';

type BtnProps = {
    $active: boolean;
};

export const NavButtonWrapper = styled('button')<BtnProps> `
    width: 100px;
    height: 40px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    ${props => {
        return props.$active ? '' : 'pointer-events: none; color: silver'
    }
};
`

export const ButtonText = styled('p') `
    font-size: 14px;
    color: ${(props) => props.theme.palette.fontColor.main};
`