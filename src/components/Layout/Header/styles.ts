import styled from "styled-components";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const StyledHeader = styled('header') `
    width: 100%;
    height: 85px;
    position: fixed;
    top: 0;
    z-index: 7;
    background-color: ${(props) => props.theme.palette.primary.main};
    & a {
        text-decoration: none;
    }
`

export const StyledHeaderWrapper = styled('div') `
    //max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

export const StyledPersonButton = styled('IconButton') `
    width: 85px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledPersonIcon = styled(PersonOutlineIcon) `
    color: white;
`