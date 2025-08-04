// Header.jsx
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../../assets//images/_GKSF Logo.svg';
import hamburgerIcon from '../../assets/icons/hamburg.svg';
import closeIcon from '../../assets/icons/close.svg';
import { useEffect, useState } from 'react';
import {
  GlassEffectWithBlurryBg,
  GlassEffectWithTransparentBg
} from '../../style/common';

export default function Header() {
  const [currentTab, setCurrentTab] = useState('');
  const [DropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrentTab(location.pathname);
  }, [location]);

  const handleMobileTabClick = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <div>
      <HeaderSection $dropdownOpen={DropdownOpen}>
        <HeaderWrapper $dropdownOpen={DropdownOpen}>
          <Logo>
            <img src={logoImg} onClick={() => navigate('/')} />
          </Logo>
          <NavWrapper>
            <Tab
              $isActive={currentTab === '/about'}
              onClick={() => navigate('/about')}
            >
              <p>ABOUT</p>
            </Tab>
            <DropdownContainer>
              <Tab
                $isActive={currentTab === '/booth'}
                onClick={() => navigate('/booth')}
              >
                <p>BOOTH</p>
              </Tab>
              <DropdownMenu>
                <DropdownItem onClick={() => navigate('/boothDetail/1')}>
                  <p>BOOTH A</p>
                </DropdownItem>
                <DropdownItem onClick={() => navigate('/boothDetail/2')}>
                  <p>BOOTH B</p>
                </DropdownItem>
                <DropdownItem onClick={() => navigate('/boothDetail/3')}>
                  <p>BOOTH C</p>
                </DropdownItem>
              </DropdownMenu>
            </DropdownContainer>
            <Tab
              $isActive={currentTab === '/session'}
              onClick={() => navigate('/session')}
            >
              <p>SESSION</p>
            </Tab>
            <Tab
              $isActive={currentTab === '/archiving'}
              onClick={() => navigate('/archiving')}
            >
              <p>ARCHIVING</p>
            </Tab>
          </NavWrapper>
          <Participation>
            <Tab onClick={() => navigate('/participation')}>
              <p>PARTICIPATION</p>
            </Tab>
          </Participation>
          <TabIcon
            src={DropdownOpen ? closeIcon : hamburgerIcon}
            alt="hamburger menu"
            onClick={() => {
              setDropdownOpen(!DropdownOpen);
            }}
          />
        </HeaderWrapper>
        {DropdownOpen && (
          <MobileDropdown>
            <Tab onClick={() => handleMobileTabClick('/about')}>
              <p>ABOUT</p>
            </Tab>
            <Tab onClick={() => handleMobileTabClick('/booth')}>
              <p>BOOTH</p>
            </Tab>
            <Tab
              $isIndent={true}
              onClick={() => handleMobileTabClick('/boothDetail/1')}
            >
              <p>BOOTH A</p>
            </Tab>
            <Tab
              $isIndent={true}
              onClick={() => handleMobileTabClick('/boothDetail/2')}
            >
              <p>BOOTH B</p>
            </Tab>
            <Tab
              $isIndent={true}
              onClick={() => handleMobileTabClick('/boothDetail/3')}
            >
              <p>BOOTH C</p>
            </Tab>
            <Tab onClick={() => handleMobileTabClick('/session')}>
              <p>SESSION</p>
            </Tab>
            <Tab onClick={() => handleMobileTabClick('/archiving')}>
              <p>ARCHIVING</p>
            </Tab>
          </MobileDropdown>
        )}
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
  height: 9rem;
  padding: 3.6rem 10rem 0 10rem;
  text-align: center;
  color: var(--text-primary);

  @media (max-width: 768px) {
    display: flex;
    padding: 3.6rem 2rem 1.2rem 2rem;
    flex-direction: column;
    align-items: center;

    ${({ $DropdownOpen }) =>
      $DropdownOpen &&
      `
      height:100vh;
      position:fixed;
      top:0;
      background: var(--Background-Glass, rgba(16, 16, 16, 0.40));
      backdrop-filter: blur(6px);
    `}
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.6rem 2.4rem;

    ${({ $DropdownOpen }) =>
      !$DropdownOpen &&
      `
      ${GlassEffectWithTransparentBg.componentStyle.rules};
      border-radius:10rem;
    `}
  }
`;

const Logo = styled.div`
  display: flex;
  width: 18rem;
  height: 5.4rem;
  padding: 0rem 6.3rem;
  justify-content: center;
  align-items: center;

  > img {
    width: 5.4rem;
    height: 5.4rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 4.2rem;
    width: 4.2rem;
    padding: 0.7rem;
    > img {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;


const NavWrapper = styled(GlassEffectWithBlurryBg)`

  display: flex;
  padding: 0.6rem 0.8rem;
  /* height: 4.2rem; */
  align-items: center;
  gap: 1.2rem;
  position: relative;
  border-radius: 10rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Tab = styled.button`
  display: flex;
  width: 11rem;
  height: 4.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;

  > p {
    color: var(--text-primary);
    text-align: center;
    -webkit-text-stroke-width: 0.16px;
    -webkit-text-stroke-color: var(--text-primary);
    font-family: 'SF Pro';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 1.82rem */
    letter-spacing: 0.028rem;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    position: relative;
   backdrop-filter: blur(calc(var(--Glass-L, 30px) / 2));

  & > * {
    position: relative;
    z-index: 1;
  }

    &::before{
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50px; 
  padding: 1px; 
  background:linear-gradient(rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.10)), /* 내부 배경 */
    linear-gradient(170deg, 
    rgba(255, 255, 255, 0.40) 1.04%, 
    rgba(255, 255, 255, 0.00) 31.76%, 
    rgba(255, 255, 255, 0.00) 44.53%, 
    rgba(255, 255, 255, 0.10) 76.76%); /* 테두리 */
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude; 
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--Background-Tertiary, rgba(255, 255, 255, 0.20));
    z-index: -1;
  }
  `}

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 6rem;
    padding-left: ${({ $isIndent }) => ($isIndent ? `3.4rem` : `1.6rem`)};
    align-items: center;
    justify-content: flex-start;
  }
`;

const Participation = styled(GlassEffectWithTransparentBg)`
  display: flex;
  padding: 1.6rem 2.8rem;
  height: 4.2rem;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  border-radius: 10rem;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: var(--Interaction-Hover, rgba(255, 255, 255, 0.05));
      z-index: -1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div:last-child {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 0.6rem;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  width: 100%;
`;

const DropdownItem = styled(Tab)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;

  > p {
    color: var(--text-primary);
    text-align: center;
    font-family: 'SF Pro';
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 300;
    line-height: 130%;
    letter-spacing: 0.026rem;
  }
`;

const TabIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileDropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div`
  position: relative;
  background-color: black;
  color: white;
`;
