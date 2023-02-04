import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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
  .section-contact {
    &__form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yjthayg",
        "template_rlbnlvc",
        form.current,
        "BMi048vbnITw-BuDh"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactPageStyles className="container">
      <div className="video__wrapper">
        <video autoPlay muted loop playsInline id="background-video">
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>
      <TitleSection heading="Contact" subheading="Get in touch with me" />
      <div className="contact__section section-contact">
        <div className="section-contact__right">
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
        <div className="section-contact__left">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="section-contact__form"
          >
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </ContactPageStyles>
  );
}
