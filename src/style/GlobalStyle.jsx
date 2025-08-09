import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
}
  
* {
  word-break: keep-all;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  background-color: var(--background-primary);
  overflow-x: hidden;
  font-family: "Syncopate", sans-serif;
  font-weight: 400;
}

button{
  background:none;
  border:none;
  cursor:pointer;
}

:root {
  /* 🎨 Background */
  --background-primary: #0e0e0e; /* Netural/90 */
  --background-secondary: #101010; /* Netural/80 */
  --background-tertiary: #ffffff10; /* FFFFFF 10% */
  --background-glass: #10101066; /* 40% (101010 + 66 alpha) */
  --background-footer: #2f2f2f; /* Netural/70 */
  --background-modal: #000000bf; /* 75% (000000 + bf alpha) */

  /* 📝 Text */
  --text-primary: #fbfbfb; /* Netural/5 */
  --text-secondary: #efefef; /* Netural/30 */
  --text-tertiary: #bbbbbb; /* Netural/50 */

  /* 🤝 Interaction */
  --interaction-disable-white: #ffffff1a; /* FFFFFF 10% */
  --interaction-disable-black: #1010101a; /* 101010 10% */
  --interaction-hover: #ffffff0d; /* FFFFFF 5% */

  /* 🖋 Icon */
  --icon-white: #ffffff; /* Netural/0 */

  /* 🌈 Gradients */
  --gradient-1: #10d48d;
  --gradient-2: #226adf;
  --gradient-3: #038dfe;
  --gradient-4: #133de7;
  --gradient-5: #5419ea;

  /* 🟦 Radius */
  --radius-s: 8px;
  --radius-m: 12px;
  --radius-l: 16px;
  --radius-xl: 20px;
  --radius-xxl: 24px;

  /* 🧊 Glass */
  --glass-l: 30px;
  --Glass: rgba(255, 255, 255, 0.40);
  --Glass-L: 30px;
}


`;

export default GlobalStyle;
