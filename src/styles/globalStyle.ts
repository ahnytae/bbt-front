import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    font-family: Univers45, Malgun Gothic, 맑은 고딕, Dotum, Gulim, AppleGothic, sans-serif;
    box-sizing: border-box;
    margin: 0 auto;
  }
  body,
  p,
  pre,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  button {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: normal;
  }
  strong {
    font-weight: 700;
  }
  i,
  em {
    font-style: normal;
  }
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
  input,
  textarea,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;

    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  a,
  button {
    cursor: pointer;
  }
  pre {
    white-space: pre-line;
  }

 
`;

export default GlobalStyle;
