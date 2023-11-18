import React, { FC, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Title from '../../components/Title/Title';
import SubmitButton from '../../components/Buttons/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserDataWithIDType } from '../../types';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';
import { SignUpPageWrapper , PageTitle , InnerWrapper , SuccessText } from './styles';

const RegistrationConfirmPage = () => {
    const { isSignUpSuccessful , inputData } = useTypedSelector(state => state.userSignUp);
    const navigate = useNavigate();

    return isSignUpSuccessful ? (
        <SignUpPageWrapper>
            <PageTitle>
                <Title variant='span'> Back to home </Title>  
                <Title variant='h1'> Registration Confirmation </Title>               
            </PageTitle>

            <InnerWrapper>
                <SuccessText>
                    <p>Dear {inputData?.username}! Please activate your account with the activation link in the email <span>{inputData?.email}</span></p>
                    <p>Please, check your email</p>
                </SuccessText>

                <Link to = '/'>
                    <SubmitButton                 
                        content = 'Go back Home'
                        variant='filled' 
                        isActive={true} />
                </Link>
            </InnerWrapper>
            
        </SignUpPageWrapper>
    ) : (<Navigate to={'/'} />);
};

export default RegistrationConfirmPage;