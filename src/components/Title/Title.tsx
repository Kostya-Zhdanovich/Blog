import React, {FC , PropsWithChildren} from 'react';
import { StyledTitle } from './styles';

interface ITitleProps extends PropsWithChildren {
    variant: 'h1' | 'h2' | 'span',
};

const Title: FC<ITitleProps> = ({ children , variant: TagName = 'span' }) => {
    return (
        <StyledTitle>
            <TagName>{children}</TagName>
        </StyledTitle>
    );
};

export default Title;