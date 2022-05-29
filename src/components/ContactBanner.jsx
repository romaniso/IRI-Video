import React from "react";
import Button from "./Button";
import DescriptionSection from "./DescriptionSection";
import LogoImg from "../assets/images/logo-2.png";
import styled from "styled-components";

const ContactBannerStyles = styled.div`
  padding: 10rem 0;

  .wrapper {
    margin: 0 auto;
    max-width: 700px;
    padding: 5rem 0rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-left: 2px solid var(--highlight);

    .logo {
      width: 100px;
    }
  }
  p {
    opacity: 0.8;
    font-family: "Parisienne Regular";
    font-size: 2.4rem;
  }

  h3 {
    font-family: "Prata Regular";
    color: var(--highlight);
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 1.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles className="container">
      <div className="wrapper card">
        <div className="logo">
          <img src={LogoImg} alt="logo" />
        </div>
        <DescriptionSection>
          Are you looking for a good film maker?
        </DescriptionSection>
        <h3>Let me know</h3>
        <Button btnText="Contact Me" btnLink="/contact" />
      </div>
    </ContactBannerStyles>
  );
}
