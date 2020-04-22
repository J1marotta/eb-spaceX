import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto;
  }
  body {
    padding: 0;
    margin: 0;
    & > #cape-canaveral {
      display: grid;
      width: 100%;
      /*  remove scroll bars */
      height: calc(100vw - (100vw - 100%));
    }
  }
`;

export default GlobalStyle;
