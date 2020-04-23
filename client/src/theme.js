import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    & > #cape-canaveral {
      display: grid;
      /*  remove scroll bars */
      width: calc(100vw - (100vw - 100%));
      height: calc(100vh - (100vh - 100%));
    }
  }
`;

export default GlobalStyle;
