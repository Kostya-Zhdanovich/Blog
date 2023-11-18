import React, { FC } from 'react';
import { IPost } from '../../../types';
import Title from '../../Title/Title';
import { IconButton } from '@mui/material';
import { Bookmark , BookmarkBorder ,  ThumbUpOutlined , ThumbDownOutlined } from '@mui/icons-material';
import { ContentWrapper , PostTitle , PostImage , PostDescription , ActionsSection , LikeButtons } from './styles';

interface IPostProps {
    post: IPost,
};

const FullPost: FC<IPostProps> = ({post}) => {
    return (
        <div>               
            <ContentWrapper>
                <PostTitle>
                    <Title variant='h1'>{post.title}</Title>
                </PostTitle>

                <PostImage src = {post.image_url}/>

                <PostDescription>
                    {post.summary}        
                </PostDescription>
            </ContentWrapper>
        </div>
    );
};

export default FullPost;