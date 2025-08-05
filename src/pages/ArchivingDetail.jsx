import React from "react";
import styled from "styled-components";

const DetailContainer = styled.div`
  max-width: 700px;
  margin: 40px auto;
  background: rgba(20, 30, 50, 0.9);
  border-radius: 16px;
  padding: 40px 32px;
  box-shadow: 0 0 24px #2e3c5d55;
  color: #fff;
  @media (max-width: 600px) {
    padding: 24px 8px;
    margin: 16px 0;
  }
`;

const DetailTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const DetailImg = styled.img`
  max-width: 180px;
  margin-bottom: 24px;
`;

const DetailText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #eee;
`;

const BackBtn = styled.button`
  margin-top: 32px;
  padding: 10px 24px;
  background: #2e3c5d;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #1a2236;
  }
`;

const ArchivingDetail = ({ event, onBack }) => {
  if (!event) return null;

  return (
    <DetailContainer>
      <DetailTitle>{event.title}</DetailTitle>
      <DetailImg src={event.img} alt={event.title} />
      <DetailText>{event.detail}</DetailText>
      <BackBtn onClick={onBack}>목록으로 돌아가기</BackBtn>
    </DetailContainer>
  );
};

export default ArchivingDetail;