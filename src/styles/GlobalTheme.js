import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`

  @font-face {
    font-family: "Neoneon";
    src: url("../assets/Neoneon.otf") format('opentype');
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');

  *, *::before, *::after {
    margin: 0;padding: 0;box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background-color: #fdfdfd;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
