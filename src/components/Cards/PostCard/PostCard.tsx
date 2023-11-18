import React, { FC, useState } from 'react';
import { MoreHorizOutlined , Bookmark , BookmarkBorder ,  ThumbUpOutlined , ThumbDownOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useActions } from '../../../store/Hooks/useActions';
import { IPost } from '../../../types';
import { Link } from 'react-router-dom';
import { PostWrapper , ContentSection , TextBlock , PostDate , 
    PostTitle, ImageBlock, PostImage, ActionsSection, 
    LikeButtons , LikeCounter} from './styles';

const PostCard: FC<{ postData: IPost }> = ({postData}) => {
    const { setSelected , openPopup , likePost , dislikePost , addToFavs } = useActions();
    const fullPageURL = `/post/${postData.id}`;

    const handlePreview = () => {
        setSelected(postData);
        openPopup();
    };

    return (
        <PostWrapper>
            <ContentSection>
                <ImageBlock>
                    <PostImage src = {postData.image_url}/>  
                </ImageBlock>

                <TextBlock>
                    <PostDate>
                        {postData.published_at}
                    </PostDate>
                    <Link to={fullPageURL}>
                        <PostTitle>
                            {postData.title}
                        </PostTitle>
                    </Link>

                </TextBlock>
            </ContentSection>

            <ActionsSection>
                <LikeButtons>
                    <IconButton onClick={() => {likePost(postData.id)}}>
                        <ThumbUpOutlined color="action" />
                    </IconButton>
                    <LikeCounter>
                        {postData.likes}
                    </LikeCounter>                        
                    <IconButton onClick={() => {dislikePost(postData.id)}}>
                        <ThumbDownOutlined color='action' />
                    </IconButton>
                </LikeButtons>

                <div>
                    <IconButton onClick={() => {addToFavs(postData.id)}}>
                        {postData.isFavourite ? <Bookmark /> : <BookmarkBorder /> }
                    </IconButton>
                    <IconButton onClick={handlePreview}>
                        <MoreHorizOutlined />
                    </IconButton>
                </div>

            </ActionsSection>
                
        </PostWrapper>
    );
}

export default PostCard;