import styled from "styled-components";

export const GlassEffect=styled.div`
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
  background:linear-gradient(rgba(16, 16, 16, 0.40), rgba(16, 16, 16, 0.40)), /* 내부 배경 */
    linear-gradient(108deg, #FFF 0%, rgba(255, 255, 255, 0.40) 40%, rgba(255, 255, 255, 0.03) 98.74%); /* 테두리 */
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
    background: var(--Background-Glass, rgba(16, 16, 16, 0.40));
    z-index: -1;
  }
`

export const GlassEffectWithTransparentBg=styled.div`
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
  background:linear-gradient(rgba(16, 16, 16, 0.40), rgba(16, 16, 16, 0.40)), /* 내부 배경 */
        linear-gradient(108deg, #FFF 0%, rgba(255, 255, 255, 0.40) 40%, rgba(255, 255, 255, 0.03) 98.74%); /* 테두리 */
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude; 
  }
`
