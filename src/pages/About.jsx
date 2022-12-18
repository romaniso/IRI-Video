import React from "react";
import DescriptionSection from "../components/DescriptionSection";
import ServicesSection from "../components/ServicesSection";
import Button from "../components/Button";
import AboutImg from "../assets/images/aboutImg-2.jpg";
//import AboutImg2 from "../assets/images/Iri.jpg";
//import AboutImg3 from "../assets/images/Iri-2.jpg";
import styled from "styled-components";
import VideoBg from "../assets/videos/background.mp4";

const AboutPageStyles = styled.div`
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

  position: relative;
  padding: 5rem 0 0;
  .top-section {
    /*border-left: 2px solid var(--highlight);*/
    gap: 2rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .left {
      flex: 3;
      .subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        color: var(--highlight);
        font-weight: 500;
        opacity: 0.8;

        span {
          font-weight: 600;
          font-size: 3rem;
          padding: 0.5rem;
        }
      }

      .heading {
        font-size: 4.6rem;
        margin-bottom: 3rem;
      }

      .info {
        margin-bottom: 4rem;

        p {
          max-width: 100%;
        }
      }
    }
    .right {
      flex: 2;
      position: relative;

      img {
        border: 2px solid var(--gray-1);
        max-width: 600px;
        width: 100%;
        margin: 3rem auto;
      }
    }

    .services__section {
      margin-top: 15rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .wrapper {
      padding: 10rem 0;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
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
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="video__wrapper">
        <video autoPlay muted loop playsInline id="background-video">
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="subheading">
              Ciao! I am <span>Irina</span>
            </p>
            <h2 className="heading">Proffessional Video-Maker</h2>
            <div className="info">
              <DescriptionSection>
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
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        {/* Maybe we can add more info about services, equipment, etc. */}
        <ServicesSection />
      </div>
    </AboutPageStyles>
  );
}
