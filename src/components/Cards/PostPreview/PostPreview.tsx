import React, { FC, useState } from 'react';
import { IPost } from '../../../types';
import { PostWrapper , ContentSection , TextImageBlock , TextBlock , PostDate , PostTitle, PostDescription, ImageBlock, PostImage} from './styles';

const PostPreview: FC<{postData: IPost}> = ({postData}) => {
    return (
        <PostWrapper>
            <ContentSection>
                <TextImageBlock>
                    <TextBlock>
                        <PostDate>
                            {postData.published_at}
                        </PostDate>
                        <PostTitle>
                            {postData.title}
                        </PostTitle>
                    </TextBlock>

                    <ImageBlock>
                        <PostImage src = {postData.image_url}/>  
                    </ImageBlock>
                </TextImageBlock>

                <PostDescription>
                        {postData.summary}
                </PostDescription>

            </ContentSection>               
        </PostWrapper>
    );
}

export default PostPreview;