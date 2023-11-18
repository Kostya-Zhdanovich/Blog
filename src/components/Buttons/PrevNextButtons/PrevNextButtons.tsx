import React, {FC} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavButtonWrapper , ButtonText } from './styles';

interface INavButtonProps {
    content?: string,
    isActive?: boolean,
    onBtnClick?: () => void,
};

export const PreviousButton:FC<INavButtonProps> = ({
    content = 'Prev',
    isActive = true,
    onBtnClick
    }) => {
    
    return (
        <NavButtonWrapper $active = {isActive}  onClick={onBtnClick}>
            <ArrowBackIcon></ArrowBackIcon>
            <ButtonText>{content}</ButtonText>
        </NavButtonWrapper>
    );
};

export const NextButton:FC<INavButtonProps> = ({
    content = 'Next',
    isActive = true,
    onBtnClick
    }) => {
    
    return (
        <NavButtonWrapper $active = {isActive}  onClick={onBtnClick}>
            <ArrowForwardIcon></ArrowForwardIcon>
            <ButtonText>{content}</ButtonText>
        </NavButtonWrapper>
    );
};