import React from 'react';
import { StyledFooter, StyledFooterWrapper } from './styles';

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterWrapper>
                <p>
                    @ 2023 Kostya Zhdanovich
                </p>

                <p>
                    All rights reserved
                </p>
            </StyledFooterWrapper>
        </StyledFooter>
    );
};

export default Footer;