import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import Input from '../../components/CustomInput/Input';
import ImageUploading , { ImageListType } from 'react-images-uploading';
import { IPostData } from '../../types';
import { PageWrapper,  PageTitle , InnerWrapper , AddPostForm , FormGroup , ButtonsGroup , CancelButton , AddPostButton} from './styles';
import { validatePostData } from './helpers';
import { useActions } from '../../store/Hooks/useActions';

const initialPostData: IPostData = {
    title: '',
    lesson_num: '',
    description: '',
    text: '',
    image: '',
};

const AddPostPage = () => {
    const [postData, setPostData] = useState<IPostData>(initialPostData);
    const [images, setImages] = useState<ImageListType>([]);
    const { addPostsAsync } = useActions();
    const navigate = useNavigate();

    const onImageSelect = (imageList: ImageListType):void => {
        const imageUrl = imageList[0].data_url;

        if(imageUrl) {
            setImages(imageList);
            setPostData((prevData) => {
                return {...prevData, image: imageUrl}
            })
        }
    };

    const handleChangeValue = (
        fieldname: keyof typeof initialPostData,
        event: React.ChangeEvent<HTMLInputElement>
        ) => {
        setPostData((prevData) => {
            return {...prevData, [fieldname]: event.target.value}
        })
    };

    const handleAddPost = (event:any) => {
        event?.preventDefault();
        addPostsAsync(postData);
        setPostData(initialPostData);
        navigate('/');
    };

    return (
        <PageWrapper>
            <PageTitle>
                <Title variant='span'> <Link to='/'> Back to home </Link></Title>
                <Title variant='h1'> Add post </Title>            
            </PageTitle>
            <InnerWrapper>
                <AddPostForm>
                        <Input 
                            type = 'text'
                            label = 'Title'
                            placeholder = 'Enter title'
                            value = {postData.title}
                            onChange = {(event) => {handleChangeValue('title', event)}}/>
                    <FormGroup>
                        <Input 
                            type = 'text'
                            label = 'Lesson Number'
                            placeholder = 'Enter Lesson Number'
                            value = {postData.lesson_num}
                            onChange = {(event) => {handleChangeValue('lesson_num', event)}}/>
                    </FormGroup>  
                        <Input 
                            type = 'text'
                            label = 'Description'
                            placeholder = 'Enter description'
                            value = {postData.description}
                            onChange = {(event) => {handleChangeValue('description', event)}}/>
                        <Input 
                            type = 'text'
                            label = 'Text'
                            placeholder = 'Enter text'
                            value = {postData.text}
                            onChange = {(event) => {handleChangeValue('text', event)}}/>
                            <ImageUploading
                            value={images}
                            onChange={onImageSelect}
                            maxNumber={1}
                            dataURLKey="data_url"
                        >
                            {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            <div className="upload__image-wrapper">
                                <button
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                >
                                Upload image
                                </button>
                                &nbsp;
                                <button onClick={onImageRemoveAll}>Remove image</button>
                                {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                        </ImageUploading>

                    <ButtonsGroup>
                        <CancelButton> Cancel </CancelButton>
                        <AddPostButton onClick={handleAddPost} disabled={!validatePostData(postData)}> Add post </AddPostButton>
                    </ButtonsGroup>
                    
                </AddPostForm>
            </InnerWrapper>           
        </PageWrapper>
    );
};

export default AddPostPage;