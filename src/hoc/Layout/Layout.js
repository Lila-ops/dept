import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactData from '../../containers/ContactData/ContactData';

const Main = styled.main`
    display: flex;
`;

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Main>{this.props.children}</Main>
                <ContactData />
                <Footer />
            </Fragment>
        )
    }
}

export default Layout;