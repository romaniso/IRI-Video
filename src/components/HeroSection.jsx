import React from "react";
import styled from "styled-components";
import VideoBg from "../assets/videos/background.mp4";
import Card from "./Card";
import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const HeroSectionStyles = styled.div`
  .video__wrapper {
    position: fixed;
    top: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    filter: brightness(30%) grayscale(50%);
    video {
      opacity: 0.8;
    }
  }

  .container {
    height: calc(100vh - 120px); //minus the height of navbar
    position: relative;
    #card {
      position: absolute;
      bottom: 50%;
      transform: translate(-0%, 50%);
    }
    .socials {
      position: absolute;
      bottom: 50%;
      right: 0;
      display: flex;
      flex-direction: column;
      transform: translateY(50%);

      svg {
        margin: 2rem 0;
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
        bottom: 3rem;
        svg {
          margin: 0 0.5rem;
        }
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionStyles className="heroSection__wrapper">
      <div className="video__wrapper">
        <video autoPlay muted loop id="background-video">
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <Card
          heading="IRI Video"
          subheading="a proffessional video maker"
          btnText="Contact"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            provident quod! Velit ullam temporibus quae fugiat, nemo est,
            pariatur veniam molestias ad vitae, sunt maiores voluptatem
            architecto neque sit."
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
    </HeroSectionStyles>
  );
}
