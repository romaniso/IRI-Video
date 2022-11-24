import React from "react";
import styled from "styled-components";
import VideoBg from "../assets/videos/background.mp4";
import Card from "./Card";
import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const HeroSectionStyles = styled.div`
  .video__wrapper {
    pointer-events: none;
    background-image: url(../assets/images/background-img.jpg);
    position: fixed;
    top: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    filter: brightness(30%) grayscale(50%);
    video {
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container {
    padding-top: 180px;
    padding-bottom: 100px;
    height: calc(100vh - 120px); //minus the height of navbar
    position: relative;
    @media only screen and (max-width: 940px) {
      padding-top: 100px;
    }

    .hero-section__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      row-gap: 5rem;
      @media only screen and (max-width: 940px) {
        flex-direction: column;
      }
    }
    .socials {
      display: flex;
      flex-direction: column;
      column-gap: 2rem;
      row-gap: 1.8rem;
      @media only screen and (max-width: 940px) {
        flex-direction: row;
        align-self: flex-end;
      }

      svg {
        color: var(--highlight);
        opacity: calc(0.8);
        width: 45px;
        transition: 0.3s ease-in;
        &:hover {
          opacity: 1;
          color: var(--light);
          transform: scale(1.1);
        }
      }
    }
    @media only screen and (max-width: 1024px) {
      .socials svg {
        width: 35px;
      }
    }

    @media only screen and (max-width: 768px) {
      .socials {
        display: flex;
        flex-direction: row;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="video__wrapper">
        <video autoPlay muted loop playsInline id="background-video">
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="hero-section__content">
          <Card
            heading="IRI Zinchenko"
            subheading="a proffessional video maker"
            btnText="Contact"
            btnLink="/contact"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            provident quod! Velit ullam temporibus quae fugiat"
          />
          <div className="socials">
            <a
              href="https://www.youtube.com/channel/UC7KJVvlAbiof1jEAX35VWZg"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://www.facebook.com/IRI-Production-Roma-101611189020712"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/iri_production_/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}
