import styled from "styled-components";

export const MainPageWrapper = styled('div') `
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    position: relative;
`

export const MainPageTitle = styled('div') `
    width: 100%;
    padding: 72px 0 40px 0; 
`

export const MainPageTabs = styled('div') `
    width: 100%;
    margin: 0 0 64px 0;
    border-bottom: 2px solid silver;
`

export const MainPageContent = styled('div') `
    width: 100%;
    display: flex;
    gap: 30px;
`

export const MainPagePagination = styled('div') `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 72px 0;
    gap: 50px;
`

export const PostsMainSection = styled('div') `
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const PostDetailedWrapper = styled('div') `
    width: 100%;
    display: flex;
`

export const PostCardWrapper = styled('div') `
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
` 

export const PostsAside = styled('aside') `
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 34.5px;
`

export const FavouritePostsContent = styled('div') `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const PopularPostsContent = styled('div') `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const SearchPageContent = styled('div') `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`