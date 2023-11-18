import React, { FC, useState } from 'react';
import { MoreHorizOutlined , BookmarkBorder , Bookmark , ThumbUpOutlined , ThumbDownOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useActions } from '../../../store/Hooks/useActions';
import { IPost } from '../../../types';
import { PostWrapper , ContentSection , TextBlock , PostDate , 
    PostTitle, ImageBlock, PostImage, ActionsSection, 
    LikeButtons , LikeCounter} from './styles';

const SearchResultCard: FC<{postData: IPost}> = ({postData}) => {
    const { likePost , dislikePost , addToFavs } = useActions();

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
                    <PostTitle>
                        {postData.title}
                    </PostTitle>
                </TextBlock>
            </ContentSection>

            <ActionsSection>
                <LikeButtons>
                    <IconButton onClick={() => {likePost(postData.id)}}>
                        <ThumbUpOutlined color='action' />
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
                    <IconButton>
                        <MoreHorizOutlined />
                    </IconButton>
                </div>

            </ActionsSection>
                
        </PostWrapper>
    );
}

export default SearchResultCard;