import React, { FC , useContext, useState } from 'react';
import DropDown from './BurgerMenu/BurgerMenu';
import SearchInput from '../../SearchInput/SearchInput';
import UserInfo from '../../UserInfo/UserInfo';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { userSignInSelectors } from '../../../store/UserSignIn/userSignInSelectors';
import { StyledHeader , StyledHeaderWrapper , StyledPersonButton , StyledPersonIcon} from './styles';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header: FC = () => {
    const userData = useTypedSelector(userSignInSelectors.getUserData);

    return (
        <StyledHeader>
            <StyledHeaderWrapper>
                <BurgerMenu/>
                <SearchInput />
                <Link to = '/sign-in'>
                    {userData ? <UserInfo user = {userData}/> : <StyledPersonButton><StyledPersonIcon fontSize='large'/></StyledPersonButton>}
                </Link>
            </StyledHeaderWrapper>
        </StyledHeader>
    );
};

export default Header;