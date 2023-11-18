import React, { FC, useState , useEffect } from 'react';
import { IPost } from '../../types';
import Title from '../../components/Title/Title';
import SearchResultCard from '../../components/Cards/SearchResultCard/SearchResultCard';
import { SearchPageWrapper , SearchPageTitle , SearchPageContent } from './styles';

const SearchResults = () => {
    const [posts, setPosts] = useState<IPost[] | null>(null);

    const getPost = async () => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10');

        return response.json();
    };

    useEffect(() => {
        getPost().then(({results}) => {
            setPosts(results)
        })
    }, [])

    return (
        <SearchPageWrapper>
            <SearchPageTitle>
                <Title variant = 'h1'>Search results</Title>
            </SearchPageTitle>
        </SearchPageWrapper>
    );
};

export default SearchResults;