// Header.jsx
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../../assets//images/_GKSF Logo.svg'

export default function Header() {
  const navigate=useNavigate();

  return (
    <div>
      <HeaderSection>
        <HeaderWrapper>
          <Logo><img src={logoImg}  onClick={()=>navigate("/")} /></Logo>
          <NavWrapper>
            <Tab onClick={()=>navigate("/about")}><p>ABOUT</p></Tab>
            <Tab onClick={()=>navigate("/booth")}><p>BOOTH</p></Tab>
            <Tab onClick={()=>navigate("/session")}><p>SESSION</p></Tab>
            <Tab onClick={()=>navigate("/archiving")}><p>ARCHIVING</p></Tab>
          </NavWrapper>
          <Participation>
            <Tab onClick={()=>navigate("/participation")}><p>PARTICIPATION</p></Tab>
          </Participation>
        </HeaderWrapper>
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
`;

const HeaderWrapper=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
`

const Logo=styled.div`
  display: flex;
  width: 18rem;
  height: 5.4rem;
  padding: 0rem 6.3rem;
  justify-content: center;
  align-items: center;

  >img{
    width:5.4rem;
    height:5.4rem;
    cursor:pointer;
  }
`

const NavWrapper=styled.div`
  display: flex;
  padding: 0.6rem 0.8rem;
  height: 4.2rem;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  border-radius: 10rem;
  background-image: 
    linear-gradient(rgba(16, 16, 16, 0.40), rgba(16, 16, 16, 0.40)), /* 내부 배경 */
    linear-gradient(
      108deg,
      #FFF 0%,
      rgba(255, 255, 255, 0.40) 3.95%,
      rgba(255, 255, 255, 0.2) 98.74%
    ); /* 테두리 */
  background-origin:border-box;
  border: 1px solid transparent;
  background-clip: padding-box, border-box;
  backdrop-filter: blur(calc(var(--Glass-L, 30px) / 2));
`

const Tab=styled.button`
  display: flex;
  width: 11rem;
  height: 4.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >p{
    color: var(--text-primary);
    text-align: center;
    -webkit-text-stroke-width: 0.16px;
    -webkit-text-stroke-color: var(--text-primary);
    font-family: "SF Pro";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; /* 1.82rem */
    letter-spacing: 0.028rem;
  }
`

const Participation=styled(NavWrapper)`
  padding: 1.6rem 2.8rem;
`

const MainSection = styled.div`
  position: relative;
  background-color:black;
  color:white;
`;
