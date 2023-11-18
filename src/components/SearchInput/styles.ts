import styled from "styled-components";
import { builtinModules } from 'module';
import { Search , Close } from '@mui/icons-material';
import { IconButton } from "@mui/material";

export const SearchInputWrapper = styled('div') `
    width: calc(100% - 85px - 85px);
    height: 100%;
    display: flex;
    justify-content: space-between;
    border-right: 1px solid silver;
    border-left: 1px solid silver;
`

export const SearchInputContainer = styled('div') `
    width: 100%;
    display: flex;
`

export const SearchInputField = styled('input') `
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.palette.primary.contrast};
    opacity: 0.7;
    padding-left: 30px;
    color: white;
    border: none;
    font-size: 18px;
    &::placeholder {
        color: white;
    };
    &:focus {
        outline: none;
    }
`

export const StyledButton = styled(IconButton) `
    width: 85px;
    border: 1px solid white;
`

export const StyledSearchIcon = styled(Search) `
    color: white;
`

export const StyledCloseIcon = styled(Close) `
    color: white;
`