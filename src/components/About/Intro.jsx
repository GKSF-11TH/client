import React from 'react';
import mapImg from '../../assets/images/about-page-world-map.svg';
import styled from 'styled-components';

const Intro = () => {
    return (
        <Container>
            <Background src={mapImg}></Background>
            <Content>
                <TitleWrapper>
                    <h1>Global Korean<br/>Studies Forum</h1>
                    <h3>AI and Korea: Innovate. Integrate. Inspire.</h3>
                </TitleWrapper>
            </Content>
        </Container>
    );
};

const Container=styled.div`
    position:relative;
    width:100%;
    height:275.2rem;
    display:flex;
    justify-content:center;
`

const Background=styled.img`
    width:100%;
    position:absolute;
    z-index:0;
`

const Content=styled.div`
    margin-top: 7.9rem;
    display:flex;
    flex-direction:column;
    gap:17.7rem;
    position:absolute;
    z-index:1;
`

const TitleWrapper=styled.div`
    display:flex;
    flex-direction:column;
    gap:2.5rem;
    align-items:center;
    text-align:center;
    font-family: "SF Pro";
    font-style: normal;
    
    >h1{
        color: var(--text-primary);
        line-height: 100%; /* 8.4rem */
        font-size: 8.4rem;
        font-weight: 100;
        letter-spacing: 0.28em;
    }
    
    >h3{
        color: var(--text-secondary);
        line-height: 100%; /* 8.4rem */
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -0.024rem;    
    }
`

export default Intro;