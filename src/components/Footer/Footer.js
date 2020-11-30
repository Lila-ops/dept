import React from 'react';
import styled from 'styled-components';
import colors from '../../components/UI/Colors/Colors';
import Logo from '../Logo/Logo';

const Footer = styled.footer`
    background-color: ${colors.black};
    padding: 10px 0;
    text-align: center;
`;

const footer = props => {
    return (
        <Footer>
            <Logo />
        </Footer>
    )
}

export default footer;