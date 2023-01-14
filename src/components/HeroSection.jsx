import React from "react";
import styled from "styled-components";
import VideoBg from "../assets/videos/background-compressed.mp4";
import Poster from "../assets/images/poster.jpg";
import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Button from "./Button";
import "animate.css";

const HeroSectionStyles = styled.div`
  .video__wrapper {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    /*filter: brightness(60%);*/
    video {
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container {
    .hero-section__content {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
    }
    .banner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      &__title {
        font-size: 6rem;
        letter-spacing: 1rem;
        color: var(--light);
        text-shadow: 0px 0px 20px #ffffff3e;
        &:not(:last-child) {
          margin-bottom: 2.4rem;
        }
        @media only screen and (max-width: 768px) {
          font-size: 4.8rem;
          &:not(:last-child) {
            margin-bottom: 1.8rem;
          }
        }
        @media only screen and (max-width: 425px) {
          font-size: 4rem;
        }
      }
      &__des {
        font-size: 2.4rem;
        color: var(--highlight);
        letter-spacing: 1.5px;
        text-transform: capitalize;
        &:not(:last-child) {
          margin-bottom: 4.2rem;
        }
        @media only screen and (max-width: 768px) {
          font-size: 1.8rem;
          &:not(:last-child) {
            margin-bottom: 2.8rem;
          }
        }
      }
    }
    .socials {
      position: absolute;
      bottom: 5rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      column-gap: 2rem;

      &__item {
        &:not(:last-child) {
          border-right: 2px solid var(--highlight);
          padding-right: 20px;
        }
        svg {
          color: var(--highlight);
          opacity: calc(0.8);
          width: 30px;
          transition: 0.3s ease-in;
          &:hover {
            opacity: 1;
            color: var(--light);
            transform: scale(1.1);
          }
        }
      }
    }
    @media only screen and (max-width: 1024px) {
      .socials svg {
        width: 25px;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="video__wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          id="background-video"
          poster={Poster}
        >
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="hero-section__content content">
          <article className="content__banner banner">
            <h1 className="banner__title animate__animated animate__fadeInLeft">
              IRI Zinchenko
            </h1>
            <p className="banner__des">professional video maker</p>
            <Button btnLink="/projects" btnText="" heroBtn={true}></Button>
          </article>
        </div>
        <div className="content__socials socials">
          <div className="socials__item">
            <a
              href="https://www.youtube.com/channel/UC7KJVvlAbiof1jEAX35VWZg"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillYoutube />
            </a>
          </div>
          <div className="socials__item">
            <a
              href="https://www.facebook.com/IRI-Production-Roma-101611189020712"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
          </div>
          <div className="socials__item">
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
