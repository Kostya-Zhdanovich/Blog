import React, { FC, forwardRef , memo} from 'react';
import { StyledInput , StyledLabel } from './styles';

interface IInputProps {
    type: string,
    label: string,
    placeholder: string,
    value?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<IInputProps> = forwardRef ((
    { type, label, placeholder , value , onChange },
    ref: React.Ref<HTMLInputElement>
) => {
    return (
        <StyledLabel>
            {label} <br />
            <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} ref={ref} /> 
        </StyledLabel>
    );
}
)

export default memo(Input);