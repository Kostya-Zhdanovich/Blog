import React, { FC , useState } from 'react';
import { IconButton} from '@mui/material';

interface ISearchButtonProps {
    content: JSX.Element,
    onBtnClick: () => void,
};

export const SearchInputButton: FC<ISearchButtonProps> = ({content , onBtnClick}) => {
    return (
        <IconButton content = '' onClick={onBtnClick} size = 'large'>{content}</IconButton>
    );
};

export default SearchInputButton;