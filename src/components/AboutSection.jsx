import React from "react";
import TitleSection from "./TitleSection";
import styled from "styled-components";
import DescriptionSection from "./DescriptionSection";
import AboutImg2 from "../assets/images/Iri-transparent.png";
import { Link } from "react-router-dom";

const AboutSectionStyles = styled.div`
  background: rgba(0, 0, 0, 0.9);
  @keyframes animatePhoto {
    50% {
      right: 5px;
      top: -20px;
    }
  }
  @keyframes animateBg {
    50% {
      left: 0%;
      top: 12%;
    }
  }

  .about-section__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 5rem;
    @media only screen and (max-width: 940px) {
      padding: 6rem 0 0;
      row-gap: 2rem;
    }

    .left {
      /*border-left: 2px solid var(--highlight);*/
      padding-left: 2rem;
      /*flex: 3;*/
      text-align: left;
      max-width: 600px;
      @media only screen and (max-width: 768px) {
        text-align: center;
        padding-left: 3rem;
        padding-right: 3rem;
      }
      .link {
        color: var(--highlight);
        text-decoration: underline;
        text-underline-position: under;
        transition: all 0.3s ease 0s;
        &:hover {
          color: var(--light);
        }
      }
    }

    .right {
      /*flex: 3;*/
      /*position: relative;*/
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .imagebox-right {
        position: relative;
        max-width: 600px;
        width: 100%;
        height: 100%;
        /*margin: 3rem auto;*/
        @media only screen and (max-width: 768px) {
          max-width: 400px;
          margin-left: 2.2rem;
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
          overflow: hidden;
          border-radius: 10%;
          /*animation: animatePhoto 6s linear infinite;*/
        }
        &__background {
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 9%;
          left: -10%;
          height: 80%;
          width: 110%;
          background-color: var(--highlight);
          border-radius: 50%;
          opacity: 80%;
          animation: animateBg 7s linear infinite;
          @media only screen and (max-width: 530px) {
            /*left: 19%;*/
          }
          &::before {
            content: "";
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 90deg at 50% 50%,
              #fff1dc,
              #fff1dc,
              #ffcc80,
              #ff9900,
              #ffd089,
              #fff1dc
            );
            animation: spinBorder 10s linear infinite;
          }
        }
      }
      img {
        max-width: 420px;
        min-width: 250px;
        filter: brightness(90%) grayscale(30%);
      }
    }

    @media only screen and (max-width: 920px) {
      flex-direction: column;
      gap: 5rem;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="about-section__container">
        <div className="left">
          <TitleSection heading="About me" subheading="" />
          <DescriptionSection heroDes={true}>
            I am a proffessional video maker who loves filming and editing
            videos. Stick around here and I'll show you what I can. A passionate
            video maker from Rome, Italy.
            <br />
            <br /> Film making is my hobby that allows me to use my creativity
            and imagination.
            <br />
            <br /> I can also make up a plot for your video clip . If you are
            looking for an eye-catching video, you are in the right place! Check
            out my works<span> </span>
            <Link to="/projects" className="link">
              here
            </Link>
            .
          </DescriptionSection>
        </div>
        <div className="right">
          <div className="right__imagebox imagebox-right">
            <img src={AboutImg2} alt="me" className="imagebox-right__image" />
            <div className="imagebox-right__background"></div>
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
