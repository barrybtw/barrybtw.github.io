import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  #header {
    font-size: 3rem;
    text-align: center;
    margin-top: 40px;
    font-family: NeoNeon, sans-serif;
    letter-spacing: 10px;
  }
  div {
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(99vw / 5), 1fr));
    grid-template-rows: mixmax(300px, auto);
    margin: 40px 0;
    grid-gap: 10px;
    grid-auto-flow: dense;

    #header {
      font-size: 3rem;
    }
    .box {
      background: #f3f3f3;
      border-radius: 8px;
      padding: 20px;
      display: grid;
      font-size: 20px;
      transition: 0.4s;
      grid-column: span 1;
      &:hover {
        background: #da83a0;
      }
      &:hover .content h1::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      &:nth-child(1) {
        grid-column: span 3;
      }
    }
  }
`;

export const IndividualPost = styled.article`
  width: 100%;
  word-break: break-all;
  h1 {
    font-family: NeoNeon, sans-serif;
    letter-spacing: 0.5rem;
    display: inline-block;
    position: relative;
    direction: rtl;
    font-size: 1.75rem;
    text-indent: -0.5rem;
    text-align: center;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -7.5px;
      left: 0;
      background-color: #ce5a81;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
  }
  .box .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
  .author {
    font-style: italic;
  }
`;
