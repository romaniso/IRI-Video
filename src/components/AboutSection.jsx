import React from "react";
import TitleSection from "./TitleSection";
import styled from "styled-components";
import DescriptionSection from "./DescriptionSection";
import AboutImg2 from "../assets/images/Iri-min.jpg";
import { Link } from "react-router-dom";

const AboutSectionStyles = styled.div`
  background: rgba(0, 0, 0, 0.9);
  .about-section__container {
    max-width: 1200px;
    margin: 4rem auto;
    /*padding: 17rem 0;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    @media only screen and (max-width: 940px) {
      padding: 10rem 0;
    }

    .left {
      /*border-left: 2px solid var(--highlight);*/
      padding-left: 2rem;
      flex: 3;
      text-align: left;
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
      flex: 3;
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
          <img src={AboutImg2} alt="me" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
