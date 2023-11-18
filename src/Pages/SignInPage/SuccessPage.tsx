import React, { FC, useState } from 'react';
import Title from '../../components/Title/Title';
import SubmitButton from '../../components/Buttons/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';
import { SignInPageWrapper , PageTitle , InnerWrapper , SuccessText } from './styles';

const SuccessPage = () => {
    return (
        <SignInPageWrapper>
            <PageTitle>
                <Title variant='span'> Back to home </Title>  
                <Title variant='h1'> Success </Title>               
            </PageTitle>

            <InnerWrapper>
                <SuccessText>
                    <p>Email confirmed</p>
                    <p>Your registration is now completed</p>
                </SuccessText>

                <Link to = '/'>
                    <SubmitButton                 
                        content = 'Go back Home'
                        variant='filled' 
                        isActive={true}/>
                        
                </Link>
            </InnerWrapper>
            
        </SignInPageWrapper>
    );
};

export default SuccessPage;