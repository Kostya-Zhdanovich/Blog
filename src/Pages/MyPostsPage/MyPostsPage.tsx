import {  useEffect } from 'react';
import { useActions } from '../../store/Hooks/useActions';
import Title from '../../components/Title/Title';
import { BlogPageWrapper , BlogPageTitle , BlogPageTabs , BlogPageContent , PostsMainSection , PostCardWrapper , PostsAside } from './styles';

const MyPostsPage = () => {
    const { getMyPosts } = useActions();

    useEffect(() => {
        getMyPosts()
    }, []);

    return (
        <BlogPageWrapper>
            <BlogPageTitle>
                <Title variant='h1'> My posts </Title>  
            </BlogPageTitle>

            <BlogPageContent>
                <PostsMainSection>
                    <PostCardWrapper>
                        {/* {posts && posts.map((post) => <PostCard postData = {post} key = {post.id}/>) }  */}
                    </PostCardWrapper>
                </PostsMainSection>
            </BlogPageContent>
        </BlogPageWrapper>
    );
};

export default MyPostsPage;