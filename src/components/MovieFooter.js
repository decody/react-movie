import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div class="footer">
            <StyledFooter>
                <address>2021 &copy; React Movie. All rights reserved.</address>
            </StyledFooter>
        </div>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    min-height: 30px;
    padding: 60px 10px 40px;
    text-align: center;
    font-size: 14px;
`