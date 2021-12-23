import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;padding: 0;box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
