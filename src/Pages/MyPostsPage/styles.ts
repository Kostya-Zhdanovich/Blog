import styled from "styled-components";

export const BlogPageWrapper = styled('div') `
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`

export const BlogPageTitle = styled('div') `
    width: 100%;
    padding: 72px 0 40px 0;
`

export const BlogPageTabs = styled('div') `
    width: 100%;
    margin: 0 0 30px 0;
    border-bottom: 2px solid silver;
`

export const BlogPageContent = styled('div') `
    width: 100%;
    display: flex;
    gap: 30px;
`

export const PostsMainSection = styled('div') `
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 30px;
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
    gap: 30px;
`