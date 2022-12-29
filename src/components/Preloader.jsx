import React from "react";
//import PreloaderGif from "../assets/images/preloader.gif";
import LogoImg from "../assets/images/logo-2.png";
import styled from "styled-components";

window.addEventListener("load", () => {
  const preloaderWrapper = document.querySelector("#preloaderWrapper");
  preloaderWrapper.style.backdropFilter = "blur(0px) brightness(100%)";
  const logo = document.querySelector(".logo-wrapper");
  logo.style.display = "none";
});

const PreloaderSectionStyles = styled.div`
  #preloaderWrapper {
    backdrop-filter: blur(20px) brightness(20%);
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 500;
    transition: all 0.3s ease 0s;

    .logo-wrapper {
      position: fixed;
      top: 50%;
      left: 50%;
      max-width: 300px;
      transform: translate(-50%, -50%);
    }
    img {
      animation: logoBouncing 1s ease-in-out infinite;
      width: 100%;
      height: 100px;
    }
    @keyframes logoBouncing {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export default function Preloader() {
  return (
    <PreloaderSectionStyles>
      <div id="preloaderWrapper">
        {/*<img src={PreloaderGif} alt="preloader" />*/}
        <div className="logo-wrapper">
          <img src={LogoImg} alt="logo" />
        </div>
      </div>
    </PreloaderSectionStyles>
  );
}
