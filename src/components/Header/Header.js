import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navigation/Navbar';
import Logo from '../Logo/Logo';
import breakpoint from '../UI/Breakpoints/Breakpoints';
import colors from '../UI/Colors/Colors';

const Header = styled.header`
    display: flex;
    width: 100%;
    background: ${colors.whiteTwo};
    
    @media ${breakpoint.sm} {    
        display: block;    
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        background: transparent;
    }
`;

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;

    @media ${breakpoint.sm} {
        max-width: 1200px;
        padding: 0;
    }
`;

const header = () => (
    <Header>
        <Container>
            <Logo />
            <Navbar />
        </Container>
    </Header>
);

export default header;