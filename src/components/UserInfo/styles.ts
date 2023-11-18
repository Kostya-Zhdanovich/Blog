import styled from 'styled-components';

export const UserInfoWrapper = styled('div') `
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
`

export const InitialsWrapper = styled('div') `
    width: 35px;
    height: 35px;
    background-color: ${(props) => props.theme.palette.primary.contrast};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`

export const UserName = styled('p') `
    width: calc(100% - 35px);
    padding-left: 10px;
    text-align: center;
`