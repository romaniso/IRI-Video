import React from "react";
import DescriptionSection from "../components/DescriptionSection";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-transparent.png";
import styled from "styled-components";
import VideoBg from "../assets/videos/background-compressed.mp4";

const AboutPageStyles = styled.div`
  @keyframes animatePhoto {
    50% {
      right: 10px;
      top: -30px;
    }
  }
  @keyframes animateBg {
    50% {
      right: 20px;
      top: 20px;
    }
  }
  .about__wrapper {
    background-color: var(--dark-bg);
    position: relative;

    .about__container {
      padding: 6rem 0 0 0;
      @media only screen and (max-width: 1460px) {
        padding: 14rem 0 0 0;
      }
      /*@media only screen and (max-width: 940px) {
        padding: 12rem 0 0 0;
      }
      @media only screen and (max-width: 768px) {
        padding: 12rem 0 0 0;
      }*/
    }
  }
  .video__wrapper {
    pointer-events: none;
    position: fixed;
    top: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    video {
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .top-section {
    /*border-left: 2px solid var(--highlight);*/

    column-gap: 4rem;
    row-gap: 6rem;
    /*height: 100vh;*/
    display: flex;
    justify-content: center;
    align-items: center;
    /*flex-wrap: wrap;*/

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      .left {
        text-align: center;
        .info p {
          max-width: 100%;
          margin-right: 0;
          margin-bottom: 5rem;
        }
      }
    }
    .subheading {
      font-size: 1.8rem;
    }
    .heading {
      font-size: 3.2rem;
    }
    span {
      font-size: 2.4rem;
    }
  }
  .left {
    .subheading {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      color: var(--light);
      text-shadow: 0px 0px 20px #ffffff3e;
      font-weight: 500;
      opacity: 0.8;

      span {
        font-weight: 600;
      }
    }

    .heading {
      font-size: 4.6rem;
      margin-bottom: 2.4rem;
      color: var(--light);
      text-shadow: 0px 0px 20px #ffffff3e;
      @media only screen and (max-width: 1050px) {
        font-size: 3.6rem;
      }
    }

    .info {
      margin-bottom: 2rem;

      p {
        max-width: 80%;
        @media only screen and (max-width: 1050px) {
          font-size: 1.5rem;
          line-height: 2.8rem;
        }
      }
    }
  }
  .right {
    .imagebox-right {
      position: relative;
      max-width: 600px;
      width: 100%;
      height: 100%;
      margin: 3rem auto;
      @media only screen and (max-width: 768px) {
        max-width: 400px;
      }
      @media only screen and (max-width: 530px) {
        max-width: 350px;
      }
      &__image {
        position: relative;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 20;
        animation: animatePhoto 4s linear infinite;
      }
      &__background {
        position: absolute;
        top: 10%;
        left: 27%;
        height: 80%;
        width: 80%;
        /*background-color: var(--highlight);*/
        border-radius: 50%;
        background: rgb(255, 239, 205);
        background: linear-gradient(
          160deg,
          rgba(255, 239, 205, 1) 16%,
          rgba(143, 107, 28, 1) 68%
        );
        animation: animateBg 2s linear infinite;
        @media only screen and (max-width: 530px) {
          left: 19%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .top-section {
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="about__wrapper">
        <div className="video__wrapper">
          <video autoPlay muted loop playsInline id="background-video">
            <source src={VideoBg} type="video/mp4" />
          </video>
        </div>
        <div className="container about__container">
          <div className="top-section">
            <div className="left">
              <p className="subheading">
                Ciao! I am <span>Irina</span>
              </p>
              <h2 className="heading">Proffessional Video-Maker</h2>
              <div className="info">
                <DescriptionSection heroDes={true}>
                  I am a proffessional video maker who loves filming and editing
                  videos. Stick around here and I'll show you what I can. A
                  passionate video maker from Rome, Italy.
                  <br />
                  <br /> Film making is my hobby that allows me to use my
                  creativity and imagination.
                  <br />
                  <br /> I can also make up a plot for your video clip . If you
                  are looking for a eye-catching video, you are in the right
                  place!
                </DescriptionSection>
              </div>
              <Button btnText="Contact me" btnLink="/contact" />
            </div>
            <div className="right">
              <div className="right__imagebox imagebox-right">
                <img
                  src={AboutImg}
                  alt="me"
                  className="imagebox-right__image"
                />
                <div className="imagebox-right__background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
