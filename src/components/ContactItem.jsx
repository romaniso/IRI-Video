import React from "react";
import { MdPlace } from "react-icons/md";
//import DescriptionSection from "../components/DescriptionSection";
import styled from "styled-components";

const ContactItemStyles = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  /*flex-wrap: wrap;*/
  .info {
    align-self: center;
    text-align: center;
    p,
    a {
      font-size: 1.6rem;
      color: var(--light);
      /*opacity: 0.8;*/
      letter-spacing: 1.1px;
      &:hover {
        text-decoration: underline;
      }
      @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }
  .icon {
    color: black;
    background: var(--light);
    padding: 0.35rem 0.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
    opacity: 0.8;

    svg {
      width: 3rem;
    }
  }
`;

export default function ContactItem({ icon = <MdPlace></MdPlace>, text }) {
  switch (text) {
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
    <ContactItemStyles className="wrapper">
      <div className="icon">{icon}</div>
      <div className="info">{text}</div>
    </ContactItemStyles>
  );
}
