import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --teal-100: #B2F5EA;
    --teal-200: #81E6D9;
    --teal-300: #4FD1C5;
    --teal-400: #38B2AC;
    --teal-500: #38B2AC;
    --teal-600: #2C7A7B;
    --teal-700: #285E61;
    --teal-800: #234E52;

    --gray-400: #A0AEC0;
    --gray-500: #718096;
    --gray-600: #4A5568;
    --gray-700: #2D3748;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'montseratt', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }
`