import { Menu , Close} from '@mui/icons-material';
import styled from 'styled-components';

export const MenuButton = styled('button')`
    width: 85px;
    height: 85px;
    background-color: ${(props) => props.theme.palette.primary.main};
    transition: 0.3s;
    cursor: pointer;
    border: none;
`

export const BurgerMenuWrapper = styled('div') `
    width: 300px;
    height: calc(100vh - 170px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 85px;
    background-color: white;
`

export const LinksWrapper = styled('ul') `
    height: calc(100% - 45px - 45px);
    display: flex;
    flex-direction: column;
`

export const StyledLink = styled('li') `
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;    
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => props.theme.palette.fontColor.white};       
    &:hover {
        background-color: ${(props) => props.theme.palette.primary.main};   
        & a {
            color: ${(props) => props.theme.palette.fontColor.white};
        }   
    }

    & a {
        width: 100%;
        text-align: center;
        &.active {
            color: ${(props) => props.theme.palette.fontColor.contrast};
        }
    }
`

export const LogOutButton = styled('button') `
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.palette.primary.additionalLight};
    border: none;
    font-size: 16px;
    &:hover {
        background-color: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.fontColor.white};
    }
`

export const StyledMenuButton = styled(Menu) `
    color: white;
`

export const StyledCloseButton = styled(Close) `
    color: white;
`