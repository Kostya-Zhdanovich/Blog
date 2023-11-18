import React, { FC } from 'react';
import { UserDataWithIDType } from '../../types';
import { UserInfoWrapper , InitialsWrapper , UserName } from './styles'; 

interface IUserInfoProps {
    user: UserDataWithIDType,
};

const UserInfo: FC<IUserInfoProps> = ({ user }) => {
    const {username} = user;

    const getInitials = username?.split(' ').reduce((acc, word) => acc + word[0].toUpperCase(), '');

    return (
        <UserInfoWrapper>        
            <InitialsWrapper>{getInitials}</InitialsWrapper>
            <UserName>{username}</UserName>             
        </UserInfoWrapper>
    );
};

export default UserInfo;