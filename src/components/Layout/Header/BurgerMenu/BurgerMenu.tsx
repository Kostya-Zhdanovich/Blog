import React, { FC , useState , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu , Close} from '@mui/icons-material';
import UserInfo from '../../../UserInfo/UserInfo';
import { NavLink } from 'react-router-dom';
import { userRoutes } from '../../../../client/Routes/userRoutes';
import ThemeToggler from '../../../ThemeToggler/ThemeToggler';
import { useActions } from '../../../../store/Hooks/useActions';
import { clearTokens } from '../../../../client/utils/session';
import { MenuButton , BurgerMenuWrapper , LinksWrapper , StyledLink , LogOutButton , StyledMenuButton, StyledCloseButton} from './styles';

export const BurgerMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const { signOut } = useActions();

    const handleBtnClick = () => {
        setOpenMenu(prev => !prev);
    };

    const handleSignOut = () => {
        signOut();
        clearTokens();
        navigate('/sign-in')
    };

    return (
        <div>
            <MenuButton onClick={handleBtnClick}>
                {openMenu ? <StyledCloseButton fontSize='large' /> : <StyledMenuButton fontSize='large'/>}
            </MenuButton>

            {openMenu && (
                <BurgerMenuWrapper>                                     
                    <LinksWrapper>
                        <StyledLink>
                            <NavLink to = '/'> Main Page</NavLink>
                        </StyledLink>
                        {userRoutes.map((route) => {
                            if(route.navLink) {
                                return <StyledLink><NavLink to = {route.path} key = {route.id}>{route.title} </NavLink></StyledLink>
                            }
                        })}
                    </LinksWrapper>

                    <ThemeToggler />

                    <LogOutButton onClick={handleSignOut}> Log out </LogOutButton>
                </BurgerMenuWrapper>
            )}           
        </div>  
    );
};

export default BurgerMenu;