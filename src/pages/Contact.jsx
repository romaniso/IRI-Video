import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import VideoBg from "../assets/videos/background-compressed.mp4";
import ContactItem from "../components/ContactItem";
import TitleSection from "../components/TitleSection";
import {
  AiFillPhone,
  AiTwotoneMail,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import Button from "../components/Button";

import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  &.hidden {
    display: none;
  }
`;

const ContactPageStyles = styled.div`
  display: flex;
  padding: 12rem 0px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 920px) {
    padding: 8rem 0px 3rem;
  }
  .video__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    filter: blur(5px);
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
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    column-gap: 2rem;
    row-gap: 2.4rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    position: relative;
    @media only screen and (max-width: 920px) {
      row-gap: 1.8rem;
    }
  }
  .section-contact {
    .headingSection {
      flex-basis: 100%;
    }
    &__right {
      background-color: var(--dark-bg);
      border-radius: 10px;
      width: 360px;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media only screen and (max-width: 920px) {
        flex-basis: 100%;
        width: 100%;
      }
      .contact-right__socials {
        display: flex;
        justify-content: flex-start;
        column-gap: 15px;
        padding: 1rem;
        @media only screen and (max-width: 920px) {
          width: 100%;
          justify-content: space-between;
        }
        .social {
          display: flex;
          align-items: center;
          color: black;
          background: var(--highlight);
          box-shadow: var(--box-shadow);
          padding: 0.5rem;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          opacity: 0.8;
          &:not(:last-child) {
            margin-right: 20px;
          }

          svg {
            width: 3rem;
            @media only screen and (max-width: 920px) {
              width: 2.6rem;
            }
          }
        }
      }
    }
    &__left {
      display: inline-flex;
      flex-direction: column;
      width: 360px;
      @media only screen and (max-width: 920px) {
        width: 100%;
      }
      .form {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        &__input {
          width: 100%;
          height: 50px;
          outline: none;
          border: none;
          color: var(--highlight);
          font-size: 18px;
          letter-spacing: 1.6px;
          padding: 10px 15px;
          border-radius: 8px;
          background-color: var(--dark-bg);
          margin-bottom: 10px;
          @media only screen and (max-width: 920px) {
            height: 40px;
            padding: 8px 12px;
            font-size: 12px;
          }
          &:focus {
            border: 1px solid var(--light);
          }
          &::placeholder {
            color: var(--light);
            font-family: "Prata Regular";
            font-size: 14px;
            letter-spacing: 2.2px;
            opacity: 0.4;
            padding-left: 6px;
            @media only screen and (max-width: 920px) {
              font-size: 12px;
            }
          }
          &--message {
            min-height: 200px;
            resize: none;
            margin-bottom: 0;
            @media only screen and (max-width: 920px) {
              min-height: 160px;
            }
          }
        }
        &__label {
          color: var(--highlight);
          font-size: 18px;
          text-align: left;
          letter-spacing: 1.6px;
          margin: 0px 0px 5px 0px;
        }
      }
    }
  }
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 150px;
    padding: 10px 15px;
    background-color: var(--dark-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    font-size: 14px;
    color: var(--success-color);
    letter-spacing: 1.1px;
    line-height: 1.8;
    opacity: 0.9;
    transition: opacity 0.3s ease 0s;
    &.hidden {
      opacity: 0;
      z-index: -100;
      pointer-events: none;
    }
  }
`;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const override = {
    position: "relative",
    zIndex: 300,
    borderColor: "eab676",
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [popUp, setPopUp] = useState(false);
  const handlePopup = (popUp) => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };
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
          handlePopup();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactPageStyles className="container">
      <Cover className={loading ? "cover" : "cover hidden"}>
        <ClipLoader
          color="#eab676"
          loading={loading}
          size={150}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Cover>

      <div className="video__wrapper">
        <video autoPlay muted loop playsInline id="background-video">
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>
      <div className="contact__section section-contact">
        <TitleSection heading={"Contact"} />
        <div className="section-contact__right contact-right">
          <ContactItem icon={<AiFillPhone />} text="+39 328 617 1688" />
          <ContactItem
            icon={<AiTwotoneMail />}
            text="iri.zinchenko.roma@gmail.com"
          />
          <ContactItem text="Rome, Lazio, Italy" />
          <section className="contact-right__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100076280823208"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UC7KJVvlAbiof1jEAX35VWZg"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://www.instagram.com/iri_production_/"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <AiFillInstagram />
            </a>
          </section>
        </div>
        <div className="section-contact__left">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="section-contact__form form"
          >
            <input
              type="text"
              name="user_name"
              className="form__input"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="user_email"
              className="form__input"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              className="form__input form__input--message"
              placeholder="What do you want to ask?"
              required
            />
            <Button formMessage={true} btnText="Send" />
          </form>
        </div>
      </div>
      <article className={popUp ? "popup" : "popup hidden"}>
        <p className="popup__content">
          You message has been sent <br></br>successfully
        </p>
      </article>
    </ContactPageStyles>
  );
}
