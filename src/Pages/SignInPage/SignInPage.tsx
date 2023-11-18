import React, { FC, useState , useRef, useEffect, useContext} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Title from '../../components/Title/Title';
import SubmitButton from '../../components/Buttons/SubmitButton/SubmitButton';
import { UserDataType } from '../../types';
import { useActions } from '../../store/Hooks/useActions';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';
import { userSignInSelectors } from '../../store/UserSignIn/userSignInSelectors';
import { SignInPageWrapper , PageTitle , InnerWrapper , SignInForm , SignInFormGroup , SignInInputField , ForgotPasswordLink , SignInText} from './styles';

const emptyUserData: UserDataType = {
    email: '',
    password: '',
};

const SignInPage = () => {
    const [signInData , setSignInData] = useState(emptyUserData);
    const { userSignIn } = useActions();
    const navigate = useNavigate();
    const isSignedIn = useTypedSelector(userSignInSelectors.isUserSignedIn);

    const handleChangeValue = (
        fieldname: keyof typeof emptyUserData,
        event: React.ChangeEvent<HTMLInputElement>
        ) => {
        setSignInData((prevData) => {
            return {...prevData, [fieldname]: event.target.value}
        })
    };

    const handleSignIn = () => {
        userSignIn(signInData);
    };

    useEffect(() => {
        if(isSignedIn) {
            navigate('/');
        }
    }, [isSignedIn]);

    return (
        <SignInPageWrapper>
            <PageTitle>
                <Title variant='span'> <Link to='/'> Back to home </Link></Title>
                <Title variant='h1'> Sign In </Title>            
            </PageTitle>
            <InnerWrapper>
                <SignInForm>
                    <SignInFormGroup>
                        <label>Email</label>
                        <SignInInputField 
                            type = 'email' 
                            placeholder = 'Your Email'
                            value = {signInData.email}
                            onChange = {event => handleChangeValue('email', event)}
                        />
                    </SignInFormGroup>
                    <SignInFormGroup>
                        <label>Password</label>
                        <SignInInputField 
                            type = 'password' 
                            placeholder = 'Your Password'
                            value = {signInData.password}
                            onChange = {event => handleChangeValue('password', event)}
                        />
                    </SignInFormGroup>  
                </SignInForm>
                <div>
                    <SubmitButton onBtnClick={handleSignIn}                
                        content = 'Sign In'
                        variant='filled' 
                        isActive={true} />
                </div> 
                <SignInText>
                    Don't have an account? <Link to={'/sign-up'}> Sign up!</Link>
                </SignInText>
            </InnerWrapper>           
        </SignInPageWrapper>
    );
};

export default SignInPage;