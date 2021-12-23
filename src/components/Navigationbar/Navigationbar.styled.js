import styled from "styled-components";

export const Mobile = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0;

  color: #353535;

  h1 {
    font-family: NeoNeon, sans-serif;
    font-size: 3rem;
  }

  a {
    font-size: 1.75rem;
    font-family: NeoNeon;
    position: relative;
    display: inline-block;
  }

  a:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #da83a0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: clamp(1rem, 5rem, 100rem);
  }
`;

export const Desktop = styled.nav`
  width: 100%;
`;
