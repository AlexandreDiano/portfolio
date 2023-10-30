import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;

    font-family: Playfair Display, serif;
  }

  b {
    color: #FCFC62;
    font-weight: bold;
    font-size: 40px;

    @media (max-width: 414px) {
      font-size: 30px;
    }
  }

  p {
    color: #FFF;
    font-weight: lighter;
    font-size: 35px;

    @media (max-width: 414px) {
      font-size: 25px;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #1c1c1c;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #root {
    height: 100vh;
    width: 100vw;
    position: relative;
  }
`;
