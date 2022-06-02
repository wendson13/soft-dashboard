import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.gray2};
  }

  @media screen and (max-width: 1080px) {
    html{
      font-size: 93.75%;
    }
  }

  @media screen and (max-width: 720px) {
    html{
      font-size: 87.50%;
    }
  }

  @media screen and (max-width: 400px) {
    html{
      font-size: 81.25%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`