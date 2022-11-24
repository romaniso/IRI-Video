import React from "react";
import { MdPlace } from "react-icons/md";
//import DescriptionSection from "../components/DescriptionSection";
import styled from "styled-components";

const ContactItemStyles = styled.div`
  width: 500px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 3.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  border-right: 2px solid var(--highlight);
  .info {
    align-self: center;
    text-align: center;
    p,
    a {
      font-size: 1.6rem;
      color: var(--highlight);
      /*opacity: 0.8;*/
      letter-spacing: 1.5px;
      &:hover {
        text-decoration: underline;
      }
      @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 0 2.5rem;
    max-width: 450px;
  }
  .icon {
    color: var(--light);
    background-color: var(--highlight);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    svg {
      width: 3rem;
    }
  }
`;

export default function ContactItem({
  icon = <MdPlace></MdPlace>,
  text = "this is an info",
}) {
  switch (text) {
    case "Facebook":
      text = (
        <a
          href="https://www.facebook.com/profile.php?id=100076280823208"
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      );
      break;
    case "YouTube":
      text = (
        <a
          href="https://www.youtube.com/channel/UC7KJVvlAbiof1jEAX35VWZg"
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      );
      break;
    case "Instagram":
      text = (
        <a
          href="https://www.instagram.com/iri_production_/"
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      );
      break;
    case "iri.zinchenko.roma@gmail.com":
      text = (
        <a
          href="mailto:iri.zinchenko.roma@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      );
      break;
    case "+39 328 617 1688":
      text = (
        <a href="tel:+393286171688" target="_blank" rel="noreferrer">
          {text}
        </a>
      );
      break;
    default:
      text = <p>{text}</p>;
  }
  return (
    <ContactItemStyles className="wrapper card">
      <div className="icon">{icon}</div>
      <div className="info">{text}</div>
    </ContactItemStyles>
  );
}
