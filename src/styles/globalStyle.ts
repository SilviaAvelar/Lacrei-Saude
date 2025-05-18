// src/styles/globalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.lacreiGreen}; 
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }

  p {
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }

  a {
    color: ${({ theme }) => theme.colors.primary}; /
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

export default GlobalStyles;