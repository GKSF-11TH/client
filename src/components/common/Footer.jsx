import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GKSFLogo from '../../assets/images/_GKSF Logo.svg';
import LogoText from '../../assets/images/Logo Text.svg';
import YouTubeLogo from '../../assets/images/youtube logo.png';

const FooterContainer = styled.footer`
  background: #101010;
  color: #b0b0b0;
  padding: 30px 0 8px 0;
  font-family: 'SF Pro Text', sans-serif;
  width: 100%;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  @media (max-width: 900px) {
    padding: 30px 0 5px 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  gap: 6px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    padding: 8px 38px;
  }
`;

const FooterHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  align-self: flex-end;
  margin-top: 20px;
  @media (max-width: 900px) {
    align-self: flex-start;
    margin-top: 0;
    gap: 12px;
  }
`;

const Logo = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  @media (max-width: 900px) {
    width: 48px;
    height: 48px;
  }
`;

const ForumName = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 24px;
    width: auto;
  }
  @media (max-width: 900px) {
    img {
      height: 28px;
    }
  }
`;

const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 15px;
  @media (max-width: 900px) {
    align-items: flex-start;
    margin-top: 10px;
    gap: 16px;
  }
`;

const SectionTitle = styled.h3`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-family: 'SF Pro Text', sans-serif;
  margin-bottom: 6px;
  @media (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 60px;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 600px) {
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

const NavLink = styled.li`
  color: #b0b0b0;
  font-size: 14px;
  font-weight: 400;
  font-family: 'SF Pro Text', sans-serif;
  cursor: pointer;
  transition: color 0.15s;
  user-select: none;
  pointer-events: auto;
  position: relative;
  z-index: 10;

  &:hover {
    color: #fff;
  }

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const FollowSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media (max-width: 900px) {
    align-items: flex-start;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.div`
  color: #888;
  font-size: 14px;
  font-family: 'SF Pro Text', sans-serif;
  text-align: center;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
  @media (max-width: 900px) {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log('Footer link clicked:', path);
    try {
      navigate(path);
    } catch (error) {
      console.log('Navigation failed, using window.location.href');
      window.location.href = path;
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeader>
          <Logo>
            <img src={GKSFLogo} alt="GKSF Logo" />
          </Logo>
          <ForumName>
            <img src={LogoText} alt="GKSF Logo Text" />
          </ForumName>
        </FooterHeader>

        <NavigationSection>
          <SectionTitle>Navigation</SectionTitle>
          <NavLinks>
            <NavLink onClick={() => handleClick('/')}>Home</NavLink>
            <NavLink onClick={() => handleClick('/about')}>About</NavLink>
            <NavLink onClick={() => handleClick('/booth')}>Booth</NavLink>
            <NavLink onClick={() => handleClick('/session')}>Session</NavLink>
            <NavLink onClick={() => handleClick('/archiving')}>
              Archiving
            </NavLink>
            <NavLink onClick={() => handleClick('/participation')}>
              Participation
            </NavLink>
          </NavLinks>
        </NavigationSection>

        <FollowSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            <SocialIconLink
              href="https://www.instagram.com/gksf_official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="24"
                  height="24"
                  rx="8"
                  fill="#181818"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <circle cx="16" cy="16" r="6" stroke="#fff" strokeWidth="2" />
                <circle cx="23" cy="9" r="1.5" fill="#fff" />
              </svg>
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.com/@gksfsogang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img src={YouTubeLogo} alt="YouTube" width="40" height="28" />
            </SocialIconLink>
          </SocialIcons>
        </FollowSection>
      </FooterContent>
      <Copyright>© 2025 AI Forums. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
