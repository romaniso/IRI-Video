import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    // colors are supposed to be here
    --dark-bg: #13070c;
    --dark-main: #6b4d57;
    --brown: #896a67;
    --light: #ddc8c4;
    --highlight: #aa915b;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    // background-color: var(--gray-1);
    .scroll-content {
      // background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      // background: var(--deep-dark);
      .scrollbar-thumb-y {
        // background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
