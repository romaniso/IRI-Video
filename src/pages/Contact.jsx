import React from "react";
import styled from "styled-components";
import TitleSection from "../components/TitleSection";
import VideoBg from "../assets/videos/background.mp4";
import ContactItem from "../components/ContactItem";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const ContactPageStyles = styled.div`
  .video__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    filter: brightness(10%) grayscale(60%);
    video {
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  padding-top: 5rem;
  text-align: center;

  .contact__section {
    padding: 5rem 0;
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .contact__section::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--highlight-color);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
`;

export default function Contact() {
  return (
    <ContactPageStyles className="container">
      <div className="video__wrapper">
        <video autoPlay muted loop playsInline id="background-video">
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>
      <TitleSection heading="Contact" subheading="Get in touch with me" />
      <div className="contact__section">
        <ContactItem icon={<AiFillPhone />} text="+39 328 617 1688" />
        <ContactItem
          icon={<AiTwotoneMail />}
          text="iri.production.roma@gmail.com"
        />
        <ContactItem text="Rome, Lazio, Italy" />
      </div>
    </ContactPageStyles>
  );
}
