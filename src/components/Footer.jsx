import React from "react";
import logo from "../assets/images/logo-2.png";
import DescriptionSection from "./DescriptionSection";
import styled from "styled-components";
import FooterCol from "./FooterCol";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background: #13070ce5;

  .container {
    width: 90%;
    margin-inline: auto;
    max-width: 1600px;
    display: flex;
    gap: 3rem;
    @media only screen and (max-width: 940px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 768px) {
      gap: 0rem;

      div {
        margin-top: 5rem;
      }

      .col1 .container {
        max-width: 100%;
      }
    }
    .col1 {
      flex: 3;

      .logo img {
        max-width: 90px;
        margin-right: 1rem;
        transform: translate(0, 30%);
      }

      .title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
      }
    }

    .col2,
    .col3,
    .col4 {
      flex: 1;
    }
  }

  .copyright {
    background-color: var(--dark-bg);
    padding: 1rem 0;
    margin-top: 5rem;

    .container {
      font-size: 1.3rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles className="wrapper">
      <div className="container">
        <div className="col1">
          <h1 className="title">
            <span className="logo">
              <img src={logo} alt="logo" />
            </span>
            IRI Video
          </h1>
          <DescriptionSection>
            A passionate video-maker from Rome, Italy. Video production is my
            hobby that allows me to use my creativity and imagination.
          </DescriptionSection>
        </div>
        <div className="col2">
          <FooterCol
            heading="Main Links"
            links={[
              { title: "Home", path: "/", type: "link" },
              { title: "About", path: "/about", type: "link" },
              { title: "Projects", path: "/projects", type: "link" },
              { title: "Contact", path: "/contact", type: "link" },
            ]}
          />
        </div>
        <div className="col3">
          <FooterCol
            heading="Contact Info"
            links={[
              { title: "+39 328 617 1688", path: "tel:+393286171688" },
              {
                title: "iri.production.roma@gmail.com",
                path: "mailto:iri.production.roma@gmail.com",
              },
              {
                title: "IRI Video, Rome, Italy",
                path: "/",
                type: "link",
              },
            ]}
          />
        </div>
        <div className="col4">
          <FooterCol
            heading="Social Media"
            links={[
              {
                title: "Facebook",
                path: "https://www.facebook.com/IRI-Production-Roma-101611189020712",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/iri_production_/",
              },
              {
                title: "YouTube",
                path: "https://www.youtube.com/channel/UC7KJVvlAbiof1jEAX35VWZg",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <DescriptionSection>&copy; 2022 - IRI Video</DescriptionSection>
        </div>
      </div>
    </FooterStyles>
  );
}
