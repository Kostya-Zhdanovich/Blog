import styled from "styled-components";

type BtnProps = {
    $active?: boolean;
};

export const AddToFavsBtnWrapper = styled('button')<BtnProps> `
    width: 160px;
    height: 40px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

export const ButtonText = styled('p') `
    font-size: 14px;
    color: ${(props) => props.theme.palette.fontColor.main};
`