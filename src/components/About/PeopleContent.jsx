import React from 'react';
import styled from 'styled-components';

const PeopleContent = () => {
  return (
    <Container>
      <Table>
        <tbody>
          <TableRow>
            <RoleCell>디렉터</RoleCell>
            <ContentCell>김형준</ContentCell>
          </TableRow>
          <TableRow>
            <RoleCell>부디렉터</RoleCell>
            <ContentCell>공다연</ContentCell>
          </TableRow>
          <TableRow>
            <RoleCell>연구기획팀</RoleCell>
            <ContentCell>
              <Strong>팀장</Strong> 정채원
              <br />
              강소이 권경은 김명찬 김민정 김준희 김태영 박소빈 송현지 윤지혜
              이나영
            </ContentCell>
          </TableRow>
          <TableRow>
            <RoleCell>세션기획팀</RoleCell>
            <ContentCell>
              <Strong>팀장</Strong> 황연우
              <br />
              권은비 김서연 남가빈 박지원 변혜진 손정윤 윤원준 차묘정 허준서
              현유영
            </ContentCell>
          </TableRow>
          <TableRow>
            <RoleCell>홍보기획팀</RoleCell>
            <ContentCell>
              <Strong>팀장</Strong> 김지안
              <br />
              김아람 문서영 우정완 이승현 임혜리 최신유
            </ContentCell>
          </TableRow>
          <TableRow>
            <RoleCell>디자인팀</RoleCell>
            <ContentCell>
              <Strong>팀장</Strong> 천사은
              <br />
              김태희 문서영 원예슬 윤난경 임윤상 하연서
            </ContentCell>
          </TableRow>
          <TableRow>
            <RoleCell>웹팀</RoleCell>
            <ContentCell>
              <Strong>팀장</Strong> 김동휘
              <br />
              김은홍 이연재 유민우
            </ContentCell>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  color: var(--text-secondary);
  font-family: 'SF Pro';
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 2.52rem */
  letter-spacing: 0.036rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  margin-bottom: 1.8rem;

  &:not(:last-child) td {
    padding-bottom: 1.8rem;
  }
`;

const RoleCell = styled.td`
  width: 20rem;
  font-weight: 500;
  vertical-align: top;
  padding-right: 2rem;

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

const ContentCell = styled.td`
  font-weight: 400;
  vertical-align: top;
`;

const Strong = styled.strong`
  font-weight: 500;
`;

export default PeopleContent;
