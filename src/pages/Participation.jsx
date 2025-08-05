import React, { useState } from 'react';
import styled from 'styled-components';
import Guestbook from '../components/Participation/Guestbook.jsx';
import Preapply from '../components/Participation/Preapply.jsx';
import Footer from '../components/common/Footer';

const Container = styled.div`
  min-height: 100vh;
  color: #fff;
  font-family: 'Montserrat', 'Pretendard', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.header`
  padding-top: clamp(13rem, 8vh, 13rem);
  text-align: center;
  flex-shrink: 0;
  @media (max-width: 900px) {
    padding-top: 6rem;
  }
  @media (max-width: 600px) {
    padding-top: 3.2rem;
  }
`;

const Title = styled.h1`
  color: var(--Text-Primary, #fbfbfb);
  text-align: center;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: #fff;
  font-family: Syncopate;
  font-size: clamp(2rem, 4vw, 3.6rem);
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.36px;
  padding-bottom: clamp(1.5rem, 3vh, 2.4rem);
  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  color: var(--Text-Primary, #fbfbfb);
  text-align: center;
  font-family: 'IBM Plex Mono';
  font-size: clamp(1rem, 1.5vw, 1.6rem);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.16px;
  padding-bottom: clamp(3rem, 8vh, 9rem);
  max-width: 80ch;
  margin: 0 auto;
  @media (max-width: 900px) {
    font-size: 1.05rem;
    margin-bottom: 2.8rem;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.8rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(2rem, 4vh, 4rem) 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin-bottom: clamp(3rem, 8vh, 8rem);
  width: 100%;
  @media (max-width: 900px) {
    gap: 2.4rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 2.4rem;
  }
`;

const Card = styled.div`
  display: flex;
  width: 34rem;
  height: 23rem;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  border-radius: 1.8rem;
  border: 0.14rem solid var(--Glass, rgba(255, 255, 255, 0.4));
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(calc(var(--Glass-L, 30px) / 2));
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
  @media (max-width: 900px) {
    width: 26rem;
    height: 18rem;
    padding: 2.4rem 1.8rem;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 14rem;
    padding: 1.6rem 1.2rem;
  }
`;

const CardTitle = styled.div`
  color: #fff;
  -webkit-text-stroke-width: 0.14px;
  -webkit-text-stroke-color: #fff;
  font-family: 'IBM Plex Mono';
  font-size: clamp(0.9rem, 1.2vw, 1.5rem);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.144px;
  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const CardAction = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-family: 'IBM Plex Mono';
  font-size: clamp(1rem, 1.3vw, 1.6rem);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.16px;
  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const BottomSpace = styled.div`
  height: clamp(2rem, 4vh, 8rem);
  flex-shrink: 0;
  @media (max-width: 600px) {
    height: 4.8rem;
  }
`;

const Participation = () => {
  const [showGuestbook, setShowGuestbook] = useState(false);
  const [showPreapply, setShowPreapply] = useState(false);

  return (
    <Container>
      <Header>
        <Title>PARTICIPATION</Title>
        <Subtitle>
          포럼에 참여하고 여러분의 소감을 방명록에 공유해 보세요.
        </Subtitle>
      </Header>
      <MainContent>
        <CardRow>
          <Card onClick={() => setShowPreapply(true)}>
            <CardTitle>Pre-Apply</CardTitle>
            <CardAction>사전신청하기</CardAction>
          </Card>
          <Card onClick={() => setShowGuestbook(true)}>
            <CardTitle>Guestbook</CardTitle>
            <CardAction>방명록 작성하기</CardAction>
          </Card>
        </CardRow>
      </MainContent>
      <BottomSpace />
      {showGuestbook && <Guestbook onClose={() => setShowGuestbook(false)} />}
      {showPreapply && <Preapply onClose={() => setShowPreapply(false)} />}
      <Footer />
    </Container>
  );
};

export default Participation;
