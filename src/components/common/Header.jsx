// Header.jsx
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <div>
      <HeaderSection>
        <h1>헤더 영역</h1>
      </HeaderSection>
      <MainSection>
        <Outlet />
      </MainSection>
    </div>
  );
}

const HeaderSection = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  height: 6.6rem;
  padding: 2.4rem 10rem 0 10rem;
  text-align: center;
  background-color: var(--background-secondary);
  color: var(--text-primary);
  opacity: 0.3;
`;

const MainSection = styled.div`
  position: relative;
`;
