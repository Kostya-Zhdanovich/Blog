import { useState , useEffect } from 'react';
import { IPost } from '../../types';
import Title from '../../components/Title/Title';
import { Tab, Tabs } from "@mui/material";
import PostCard from '../../components/Cards/PostCard/PostCard';
import PostTeaser from '../../components/Cards/PostTeaser/PostTeaser';
import { postPreviewSelectors } from '../../store/PostPreview/postPreviewSelectors';
import { useSelector } from 'react-redux';
import PostPreviewPopup from '../../components/PostPreviewPopup/PostPreviewPopup';
import { useActions } from '../../store/Hooks/useActions';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';
import SearchResultCard from '../../components/Cards/SearchResultCard/SearchResultCard';
import PaginationBar from '../../components/Pagination/Pagination';
import { searchSelectors } from '../../store/Search/searchSelectors';
import { MainPageWrapper , MainPageTabs , MainPageContent , 
    PostCardWrapper , PostsMainSection , PostsAside , MainPageTitle , 
    FavouritePostsContent , PopularPostsContent , MainPagePagination, SearchPageContent} from './styles';

const MainPage = () => {
    const posts = useTypedSelector(state => state.posts.allPosts);
    const favouritePosts = useTypedSelector(state => state.posts.allPosts.filter((post) => post.isFavourite));
    const popularPosts = useTypedSelector(state => state.posts.popularPosts);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const { getPopupState } = postPreviewSelectors;
    const isPopupOpen = useSelector(getPopupState);
    const { getSearchState } = searchSelectors;
    const isSearchActive = useSelector(getSearchState);
    const {  getPostsAsync , getPostsCount , getCount , setPerPage} = useActions();
    const perPage = useTypedSelector(state => state.pagination.postsPerPage);
    const postsCount = useTypedSelector(state => state.pagination.postsCount);

    const handleTabChange = (e:any, tabIndex: number) => {
        setCurrentTabIndex(tabIndex);
    };

    const pagesNumber = Math.ceil(postsCount / perPage);
      
    useEffect(() => {
        getPostsAsync(perPage);
        getPostsCount();
    }, [perPage]);

    return isSearchActive ? (
        <MainPageWrapper>
            <MainPageTitle>
                <Title variant='h1'> Search Results </Title>  
            </MainPageTitle>
            <SearchPageContent>
                {posts && posts.map((postData: IPost) => <SearchResultCard postData = {postData} key = {postData.id} />) }
            </SearchPageContent>     
        </MainPageWrapper>
    ) : (
        <MainPageWrapper>
            <MainPageTitle>
                <Title variant='h1'> Blog </Title>  
            </MainPageTitle>

            <MainPageTabs>
                <Tabs value={currentTabIndex} onChange={handleTabChange} indicatorColor = {'primary'}>
                    <Tab label='All' />
                    <Tab label='My favourites' />
                </Tabs>
            </MainPageTabs>
            {currentTabIndex === 0 && (
                <div>
                    <MainPageContent>
                        <PostsMainSection>
                            <PostCardWrapper>
                                {posts && posts.map((postData: IPost) => <PostCard postData = {postData} key = {postData.id}/>) }
                            </PostCardWrapper>
                        </PostsMainSection>
                        <PostsAside>
                            {posts && posts.map((postData: IPost) => <PostTeaser postData = {postData} key = {postData.id} />) }
                        </PostsAside>   
                    </MainPageContent>
                    <MainPagePagination>
                        {/* <SelectPagination value={perPage} label='Per Page' onBtnClick={(e) => {setPerPage(e.target.value)}}/> */}
                        <PaginationBar count={pagesNumber} onBtnClick={(e, pagesNumber) => getPostsAsync(perPage, (pagesNumber - 1) * perPage)}/>
                    </MainPagePagination>
                </div>                
            )}

            {currentTabIndex === 1 && (
                <FavouritePostsContent>
                    {favouritePosts && favouritePosts.map((postData: IPost) => <SearchResultCard postData = {postData} key = {postData.id}/>) }
                </FavouritePostsContent> 
            )}

            {currentTabIndex === 2 && (
                <PopularPostsContent>
                    {popularPosts && popularPosts.map((postData: IPost) => <SearchResultCard postData = {postData} key = {postData.id}/>) }
                </PopularPostsContent> 
            )}

            {isPopupOpen && <PostPreviewPopup/>}    
        </MainPageWrapper>     
    );
};

export default MainPage;