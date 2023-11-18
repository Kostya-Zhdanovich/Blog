import React, { FC, useRef, useEffect, useContext, useState , ChangeEvent } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Title from '../../components/Title/Title';
import SubmitButton from '../../components/Buttons/SubmitButton/SubmitButton';
import { UserDataType } from '../../types';
import { useActions } from '../../store/Hooks/useActions';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';
import { SignUpPageWrapper , PageTitle , InnerWrapper , SignUpForm , SignUpFormGroup , SignUpInputField , SignUpText} from './styles';

const emptyUserData: UserDataType = {
    userName: '',
    email: '',
    password: '',
};

const SignUpPage = () => {
    const [signUpData , setSignUpData] = useState(emptyUserData);
    const { isSignUpSuccessful , inputData } = useTypedSelector(state => state.userSignUp);
    const navigate = useNavigate();
    const { userSignUp } = useActions();

    const handleChangeValue = (
        fieldname: keyof typeof emptyUserData,
        event: React.ChangeEvent<HTMLInputElement>
        ) => {
        setSignUpData((prevData) => {
            return {...prevData, [fieldname]: event.target.value}
        })
    };

    const handleSignUp = () => {
        if(signUpData.userName && signUpData.email && signUpData.password) {
            console.log(signUpData);
            userSignUp(signUpData)
        };
    };

    useEffect(() => {
        if(isSignUpSuccessful && inputData?.id) {
            navigate('/sign-up/registration-confirm');
        }
    }, [isSignUpSuccessful , inputData]);

    return (
        <SignUpPageWrapper>
            <PageTitle>
                <Title variant='span'> <Link to='/'> Back to home </Link></Title> 
                <Title variant='h1'> Sign Up </Title>            
            </PageTitle>
            <InnerWrapper>
                <SignUpForm>
                    <SignUpFormGroup>
                        <label>Name</label>
                        <SignUpInputField 
                            type = 'userName' 
                            placeholder = 'Your Name'
                            value = {signUpData.userName}
                            onChange = {event => handleChangeValue('userName', event)}
                        />
                    </SignUpFormGroup>
                    <SignUpFormGroup>
                        <label>Email</label>
                        <SignUpInputField 
                            type = 'email' 
                            placeholder = 'Your Email'
                            value = {signUpData.email}
                            onChange = {event => handleChangeValue('email', event)}
                        />
                    </SignUpFormGroup>
                    <SignUpFormGroup>
                        <label>Password</label>
                        <SignUpInputField 
                            type = 'password' 
                            placeholder = 'Your Password'
                            value = {signUpData.password}
                            onChange = {event => handleChangeValue('password', event)}
                        />
                    </SignUpFormGroup>
                </SignUpForm>
                <div>
                    <SubmitButton onBtnClick={handleSignUp}                
                        content = 'Sign Up'
                        variant='filled' 
                        isActive={true} />
                </div> 
                <SignUpText>
                    Already have an account? <Link to={'/sign-in'}> Sign in!</Link>
                </SignUpText>
            </InnerWrapper>            
        </SignUpPageWrapper>
    );
};

export default SignUpPage;