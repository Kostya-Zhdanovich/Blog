import React, {FC} from 'react';
import { BookmarkBorderOutlined } from '@mui/icons-material';
import { AddToFavsBtnWrapper , ButtonText } from './styles';

interface IFavsButtonProps {
    content?: string,
    isActive?: boolean,
    onBtnClick?: () => void,
};

const AddToFavsButton:FC<IFavsButtonProps> = ({
    content = 'Add to favourites',
    isActive = true,
    onBtnClick,
    }) => {

    return (
        <AddToFavsBtnWrapper>
            <BookmarkBorderOutlined></BookmarkBorderOutlined>
            <ButtonText>{content}</ButtonText>
        </AddToFavsBtnWrapper>
    );
};

export default AddToFavsButton;