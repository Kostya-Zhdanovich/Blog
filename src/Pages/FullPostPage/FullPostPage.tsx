import { FC, useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../types';
import { CircularProgress } from '@mui/material';
import FullPost from '../../components/Cards/FullPostCard/FullPost';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';
import { FullPostPageWrapper , PrevNextLinks , LinkButton} from './styles';

interface IFullPostProps {
    postId: string
};

const getPostById = async (postId: string): Promise<IPost> => {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/blogs/${postId}/`);

    return await response.json();
};

const FullPostPage: FC<IFullPostProps> = () => {
    const [post, setPost] = useState<IPost>();
    const {postId} = useParams();
    const prevPostId = (+postId! - 1).toString();
    const prevPageURL = `/post/${prevPostId}`;
    const nextPostId = (+postId! + 1).toString();
    const nextPageURL = `/post/${nextPostId}`;
    const postsCount = useTypedSelector(state => state.pagination.postsCount);

    useEffect(() => {
        getPostById(postId!).then((post) => {
            setPost(post)
        });
    }, [postId]);

    return (
        <FullPostPageWrapper> 
            <Title variant='span'> <Link to='/'> Back to home </Link></Title>  
            {post ? <FullPost post = {post}/> : <CircularProgress />}
            <PrevNextLinks>
                <LinkButton disabled={+prevPostId < 1}><Link to={prevPageURL}>Prev</Link></LinkButton>
                <LinkButton disabled={+nextPostId > 1138}><Link to={nextPageURL}>Next</Link></LinkButton>
            </PrevNextLinks>
        </FullPostPageWrapper>
    );
};

export default FullPostPage;