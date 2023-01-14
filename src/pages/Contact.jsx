import React from "react";
import styled from "styled-components";
import TitleSection from "../components/TitleSection";
import VideoBg from "../assets/videos/background-compressed.mp4";
import ContactItem from "../components/ContactItem";
import {
  AiFillPhone,
  AiTwotoneMail,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const ContactPageStyles = styled.div`
  height: 100vh;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .video__wrapper {
    position: fixed;
    top: 0;
    right: 0;
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

  /*padding-top: 7rem;*/
  text-align: center;

  .contact__section {
    padding: 2rem 0;
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    /*flex-direction: column;*/
    column-gap: 5rem;
    row-gap: 2.4rem;
    flex-wrap: wrap;
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
          text="iri.zinchenko.roma@gmail.com"
        />
        <ContactItem text="Rome, Lazio, Italy" />
        <ContactItem icon={<AiFillFacebook />} text="Facebook" />
        <ContactItem icon={<AiFillYoutube />} text="YouTube" />
        <ContactItem icon={<AiFillInstagram />} text="Instagram" />
      </div>
    </ContactPageStyles>
  );
}
