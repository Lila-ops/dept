import React from 'react';
import styled from 'styled-components';
import colors from '../UI/Colors/Colors'

const Logo = styled.h1`
    font-family: 'Teko', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: ${colors.blackTwo};
    padding: 25px 0;
`;

const logo = props => {
    return (
    <Logo>DEPT</Logo>
)};

export default logo;