import styled from "styled-components";

export const GlassyBox=styled.div`
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