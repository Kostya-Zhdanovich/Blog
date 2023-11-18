import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';
import SubmitButton from '../../components/Buttons/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';
import { SignUpPageWrapper , PageTitle , InnerWrapper , SuccessText } from './styles';

enum StatusesEnum {
    SUCCESS = 204,
};

const handleActivateAccount = async (uid: string, token: string) => {
    try {
        const response = await fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
            method: 'POST',
            body: JSON.stringify({ uid, token }),
            headers: {
                'Content-type': 'application/json',
            }
        });
    
        return response.status;
    } catch (error) {
        console.log(error);
        return error;
    };
};
    
const ActivationSuccessPage = () => {
    const { uid , token } = useParams();
    const [activationStatus, setActivationStatus] = useState();

    useEffect (() => {
        if(uid && token) {
            handleActivateAccount(uid, token).then((status) => {
                console.log(status);
                //@ts-ignore
                setActivationStatus(status);
            })
        }
    }, [uid, token])

    return (
        <SignUpPageWrapper>
            <PageTitle>
                <Title variant='span'> Back to home </Title>  
                <Title variant='h1'> Success </Title>               
            </PageTitle>

            <InnerWrapper>
                {activationStatus === StatusesEnum.SUCCESS ? (
                    <SuccessText> <p>Email confirmed!</p> <p>Your registration is now completed.</p> </SuccessText>
                ) : (
                    <SuccessText> <p>Something went wrong, try again!</p> </SuccessText>
                )}

                <Link to = '/'>
                    <SubmitButton                 
                        content = 'Go back Home'
                        variant='filled' 
                        isActive={true} />
                </Link>
            </InnerWrapper>
            
        </SignUpPageWrapper>
    );
};

export default ActivationSuccessPage;