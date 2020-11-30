import React from 'react';
import styled from 'styled-components';
import colors from '../../components/UI/Colors/Colors';
import breakpoint from '../UI/Breakpoints/Breakpoints';

const Teaser = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

const Article = styled.article`
    flex: 1 0 100%;
    /* flex: ${props => {
        if (props.view === 'grid' && props.ifEmptyImg) {
                return '1 0 15%'
            } else if (props.view === 'list' && props.ifEmptyImg) {
                return '0 0 auto';
            } else if (props.view === 'grid' && !props.ifEmptyImg) {
                return '1 0 50%';
            } else {
                return '1 0 100%';
            }
        }
    }; */
    display: flex;
    flex-direction: ${props => props.view === "list" ? "row" : "column"};
    margin-bottom: ${props => props.view === "list" ? "20px" : "50px"};
    border-top: ${props => props.ifEmptyImg ? `1px solid ${colors.warmGreyTwo}` : 0};
    
    @media ${breakpoint.sm} {
        flex: 1 0 ${props => props.view === 'grid' ? '50%' : '100%'};
    }
`;

const Figure = styled.figure`
    margin: 0 20px 20px 20px;

    @media ${breakpoint.sm} {
        margin: 0 10px 18px 10px;
    }
`;

const Img = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: ${props => props.view === "list" ? "150px" : "500px"};
    width: ${props => props.view === "list" ? "150px" : "100%"};
`;

const Name = styled.span`
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  line-height: 2;
  margin: 0 20px 20px 20px;
  color: ${colors.warmGreyTwo};
  
    @media ${breakpoint.sm} {
        margin: 18px 10px 12px 10px;
    }
`;

const Title = styled.h3`
  font-family: Teko;
  font-size: 30px;
  line-height: 1.07;
  margin: 0 20px 20px 20px;
  color: ${colors.blackTwo};
  
    @media ${breakpoint.sm} {
        margin: 12px 10px 15.5px 10px;
    }
`;

const Content = styled.div`
  font-family: Teko;
  font-size: 24px;
  line-height: 1.25;
  margin: 20px 20px 20px 20px;
  color: ${colors.blackTwo};
  
  @media ${breakpoint.sm} {
    margin: 12px 10px 19px 10px;
    }
`;

const Link = styled.a`
    width: 79px;
    height: 30px;
    padding-left: 20px;
    margin-left: 20px;
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    line-height: 2.14;
    color: ${colors.strongBlue};
    position: relative;
    
    &:before {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        left: 0;
        top: 3px;
        position:absolute;
        border: 5px solid transparent;
        border-right-color: ${colors.strongBlue};
    }
    
    @media ${breakpoint.sm} {
        margin: 15.5px 0 0 0;
    }
`;

const teaser = props => {
    const article = props.work.map((item) => (
            <Article 
                ifEmptyImg={item.img_url === "" ? true : false} 
                view={props.view} 
                key={item.id}
            >
                {item.img_url !== "" ?
                <Figure>
                    <Img 
                        src={item.img_url} 
                        view={props.view} />
                </Figure>
                : null}
                <div>
                    <Name>{item.industry}</Name>
                    {item.img_url === "" ? <Content>item.content</Content> : <Title>{item.title}</Title>}
                    <Link>View Case</Link>
                </div>
            </Article>
        )
    )

    return (
        <Teaser>
            {article}
        </Teaser>
    )
};

export default teaser;