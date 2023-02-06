import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    // colors are supposed to be here
    --dark-bg: rgba(0, 0, 0, 0.8);
    --dark-main: #6b4d57;
    --brown: #896a67;
    --light: #f7ebc1;
    --highlight: #e6a555;
    --success-color: #c2fb24;
    --highlight-gradient: linear-gradient(
          160deg,
          rgba(255, 239, 205, 1) 16%,
          #ba7917 68%
        );
   --box-shadow: 0px 0px 20px #ffffff3e;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
    scroll-behavior: smooth;
    
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
    outline: none;
  }
  .container {
    /* max-width: 1200px; */
    width: 90%;
    margin: 0 auto;
  }
    .card {
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.223);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: 10px;
    padding: 3rem 4rem;
    transition: 0.5s ease-out;
  }
  .card:hover {
    background: rgb(0, 0, 0);
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
