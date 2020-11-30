import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button/Button';
import colors from '../../components/UI/Colors/Colors';
import img from '../../assets/images/Banner.jpg';
import breakpoint from '../UI/Breakpoints/Breakpoints';

const BannerWrapper = styled.div`
    @media ${breakpoint.sm} {
        background: url(${img});
        height: 940px;
        width: 100%;
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        display: flex;
    }
`;

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    
    @media ${breakpoint.sm} {
        position: relative;
        display: block;
        flex-direction: unset;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
    }
`;

const Title = styled.h1`
  font-family: Teko;
  font-size: 40vw;
  text-transform: uppercase;
  line-height: 1;
  color: ${colors.blackTwo};
  
  @media ${breakpoint.sm} {
    margin: 80px 232px 249px 0;
  }
`;

const TitleWrapper = styled.div`
    background: url(${img});
    height: 320px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media ${breakpoint.sm} {
        background: none;
        background-repeat: unset;
        background-position: unset;
        background-size: unset;
        display: block;
    }
`;

const BtnWrapper = styled.div`
    flex: 1 1 100%;
    padding: 20px;

    @media ${breakpoint.sm} {
        bottom: 80px; 
        right: 0; 
        position: absolute;
        flex: unset;
    }
`;

const banner = props => {
    return (
    <BannerWrapper>
        <Banner>
            <TitleWrapper>
                <Title>{props.title}</Title>
            </TitleWrapper>
            <BtnWrapper>
                <Button bgColor={colors.blackTwo} width={props.mql ? "100%" : "170px"}>View Case</Button>
            </BtnWrapper>
        </Banner>
    </BannerWrapper>
)};

export default banner;