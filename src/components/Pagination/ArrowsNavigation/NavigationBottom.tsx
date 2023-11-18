import React, {FC} from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack , ArrowForward } from '@mui/icons-material';
import { PaginationWrapper } from './styles';

interface INavigationProps {
    onPrevBtnClick: (event:any) => void,
    onNextBtnClick: (event:any) => void,
};

const NavigationBottom: FC<INavigationProps> = ({
    onPrevBtnClick,
    onNextBtnClick
}) => {
    return (
        <PaginationWrapper>
            <IconButton onClick={onPrevBtnClick}><ArrowBack/></IconButton>
            <IconButton onClick={onNextBtnClick}><ArrowForward/></IconButton>
        </PaginationWrapper>
    );
};

export default NavigationBottom;