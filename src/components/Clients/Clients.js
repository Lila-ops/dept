import React from 'react';
import styled from 'styled-components';
import colors from '../../components/UI/Colors/Colors';
import breakpoint from '../UI/Breakpoints/Breakpoints';

const ContainerFluid = styled.div`
    background-color: ${colors.paleGrey};
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 40px 0;
    
    @media ${breakpoint.sm} {
        padding: 100px 0;
    }
`;

const Title = styled.h1`
  font-family: Teko;
  padding-bottom: 18px;
  font-size: 60px;
  line-height: 1;
  text-align: center;
  color: ${colors.black};
`;

const Content = styled.p`
  font-family: Arial;
  padding-bottom: 85px;
  margin: auto;
  padding: 0 20px;
  font-size: 17px;
  line-height: 1.59;
  text-align: center;
  color: ${colors.black};
  
  @media ${breakpoint.sm} {
    padding: 0;  
    width: 520px;
  }
`;

const Clients = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ClientsLogo = styled.li`
    flex: 1 0 25%auto;
    margin: 10px 0;
`;

const clients = props => {
    return (
        <ContainerFluid>
            <Container>
                <Title>Clients</Title>
                <Content>
                    We value a great working relationship with our clients above all else. 
                    It’s why they often come to our parties. 
                    It’s also why we’re able to challenge and inspire them to reach for the stars.
                </Content>
                <Clients>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Philips_logo_zwart-320x161.png" alt="Philips" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Nivea_logo_zwart-320x161.png" alt="Nivea" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Pathe_logo_zwart-320x161.png" alt="Pathe" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Tomtom_logo_zwart-320x161.png" alt="Tomtom" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Mona_logo_zwart-320x161.png" alt="Mona" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Allianz_logo_zwart-320x161.png" alt="Alianz" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Rabobank_logo_zwart-320x161.png" alt="Redobank" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Unilever_logo_zwart-320x161.png" alt="Unilever" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/ABN_logo_zwart-320x161.png" alt="Abn" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/10/schramm-320x161.png" alt="Schram" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/Oxxio_logo_zwart-320x161.png" alt="Oxxio" />
                    </ClientsLogo>
                    <ClientsLogo>
                        <img src="https://www.deptagency.com/wp-content/uploads/2018/03/United_logo_zwart-320x161.png" alt="United" />
                    </ClientsLogo>
                </Clients>
            </Container>    
        </ContainerFluid>
    )
};

export default clients;