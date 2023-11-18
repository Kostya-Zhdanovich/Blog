import styled from "styled-components";
import { IconButton } from "@mui/material";

export const PopupBackground = styled('div') `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
`

export const PopupWrapper = styled('div') `
    width: 750px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    position: absolute;
    display: flex;
    padding: 25px 40px 40px 40px;
    border-radius: 3px;
`

export const CloseButtonWrapper = styled('div') `
    width: 100%;
    text-align: end;
    padding-bottom: 30px;
`

export const CloseButton = styled(IconButton) `
    border: none;
    background-color: transparent;
`

export const SelectedPostContent = styled('div') `
    width: 100%;
`