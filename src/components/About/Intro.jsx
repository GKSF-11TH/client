import React from 'react';
import mapImg from '../../assets/images/about-page-world-map.svg';
import styled from 'styled-components';
import iconAI from '../../assets/images/GKS_AI.png';
import { GlassyBox } from '../../style/common';


const Intro = () => {
    return (
        <Container>
            <Background src={mapImg}></Background>
            <Content>
                <TitleWrapper>
                    <h1>Global Korean<br/>Studies Forum</h1>
                    <h3>AI and Korea: Innovate. Integrate. Inspire.</h3>
                </TitleWrapper>
                <ChatBox>
                    <img src={iconAI} alt="AI Icon" />
                    <span>What is GKSF?</span>
                </ChatBox>
            </Content>
        </Container>
    );
};

const Container=styled.div`
    position:relative;
    width:100%;
    /* height:275.2rem; */
    height:72.4rem;
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
    align-items:center;
`

const TitleWrapper=styled.div`
    display:flex;
    flex-direction:column;
    gap:3.9rem;
    align-items:center;
    text-align:center;
    font-style: normal;
    
    >h1{
        font-family: "Syncopate", sans-serif;
        color: var(--text-primary);
        line-height: 100%; /* 8.4rem */
        font-size: 7.2rem;
        font-weight: 400;
        letter-spacing: -0.072rem;
    }
    
    >h3{
        font-family: "SF Pro";
        color: var(--text-secondary);
        line-height: 100%; /* 8.4rem */
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -0.024rem;    
    }
`

const ChatBox=styled(GlassyBox)`
    display: flex;
    width: 45.8rem;
    height: 10.4rem;
    justify-content: center;
    align-items: center;
    gap: 2.2rem;
    flex-shrink: 0;

    >img{
        width: calc(6.4 * 1.25rem);
        height: calc(6.4 * 1.25rem);
        flex-shrink: 0;
    }

    >span{
        color: var(--text-primary);
        font-family: "IBM Plex Mono";
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 3.2rem */
        letter-spacing: -0.032rem;
    }
`

export default Intro;