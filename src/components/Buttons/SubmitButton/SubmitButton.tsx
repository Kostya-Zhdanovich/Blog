import React, {FC} from 'react';
import { SubmitFilledButton , SubmitOutlinedButton } from './styles';

interface ISubmitButtonProps {
    content?: string,
    isActive?: boolean,
    variant: 'filled' | 'outlined',
    onBtnClick?: () => void,
};

const buttons: Record<'filled' | 'outlined', typeof SubmitFilledButton> = {
    filled: SubmitFilledButton,
    outlined: SubmitOutlinedButton,
};

const SubmitButton: FC<ISubmitButtonProps> = ({
    content = 'Submit',
    isActive = true,
    variant,
    onBtnClick 
    }) => {
    const Button = buttons[variant];

    return (
        <Button $active = {isActive} onClick = {onBtnClick}>
            {content}
        </Button>
    );
};

export default SubmitButton;