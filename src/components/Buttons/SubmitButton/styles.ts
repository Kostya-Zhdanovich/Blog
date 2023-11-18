import styled from 'styled-components';

type BtnProps = {
    $active: boolean;
}

const SubmitButton = styled('button')<BtnProps> `
    width: 100%;
    height: 54px;
    background-color: ${(props) => props.theme.palette.primary.main};
    font-size: 18px;
    font-weight: 500;
    transition: 0.3s;

    ${(props) => {
        return props.$active ? '' : 'pointer-events: none; background-color: gray'
    }};

    &: hover {
        background-color: ${(props) => props.theme.palette.primary.contrast};
    }
`

export const SubmitFilledButton = styled(SubmitButton)<BtnProps> `
    border: 2px solid transparent;
    color: white;
`

export const SubmitOutlinedButton = styled(SubmitButton)<BtnProps> `
    background-color: white;
    border: 2px solid gray;
    color: gray;
`