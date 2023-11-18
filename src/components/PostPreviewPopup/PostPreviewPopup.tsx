import { Close } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { postPreviewSelectors } from '../../store/PostPreview/postPreviewSelectors';
import PostPreview from '../Cards/PostPreview/PostPreview';
import { PopupBackground , PopupWrapper , SelectedPostContent , CloseButtonWrapper, CloseButton } from './styles';
import { useActions } from '../../store/Hooks/useActions';

const { getSelectedPost } = postPreviewSelectors; 

const PostPreviewPopup = () => {
    const selectedPost = useSelector(getSelectedPost);
    const {clearSelected , closePopup } = useActions();

    const closePreviewPopup = () => {
        clearSelected();
        closePopup()
    };
    
    return (
        <PopupBackground>
            <PopupWrapper>
                <CloseButtonWrapper>
                    <CloseButton onClick={closePreviewPopup}> <Close /></CloseButton>
                </CloseButtonWrapper>
                
                <SelectedPostContent>{selectedPost && <PostPreview postData={selectedPost}/> }</SelectedPostContent>
            </PopupWrapper>
        </PopupBackground>

    );
};

export default PostPreviewPopup;