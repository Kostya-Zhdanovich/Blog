import React, { FC , useState , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { userRoutes } from '../../client/Routes/userRoutes';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { useActions } from '../../store/Hooks/useActions';
import { clearTokens } from '../../client/utils/session';
import { MenuButton , DropDownWrapper , LinksWrapper , StyledLink , LogOutButton , StyledMenuButton, StyledCloseButton} from './styles';

export const DropDown = () => {
    const [openDrop, setOpenDrop] = useState(false);
    const navigate = useNavigate();
    const { signOut } = useActions();

    const handleBtnClick = () => {
        setOpenDrop(prev => !prev);
    };

    const handleSignOut = () => {
        signOut();
        clearTokens();
        navigate('/sign-in')
    };

    return (
        <div>
            <MenuButton onClick={handleBtnClick}>
                {openDrop ? <StyledCloseButton fontSize='large' /> : <StyledMenuButton fontSize='large'/>}
            </MenuButton>

            {openDrop && (
                <DropDownWrapper>                                     
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

                    <LogOutButton onClick={handleSignOut}> Sign out </LogOutButton>
                </DropDownWrapper>
            )}           
        </div>  
    );
};

export default DropDown;