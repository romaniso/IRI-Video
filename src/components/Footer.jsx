import React from "react";
import logo from "../assets/images/logo-2.png";
import DescriptionSection from "./DescriptionSection";
import styled from "styled-components";
import FooterCol from "./FooterCol";

const FooterStyles = styled.div`
  background-color: var(--dark-bg);
  backdrop-filter: blur(6px);
  .container {
    padding: 7rem 0;
    width: 90%;
    margin-inline: auto;
    max-width: 1600px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    @media only screen and (max-width: 940px) {
      flex-direction: column;
      padding: 5rem 0;
    }

    @media only screen and (max-width: 768px) {
      gap: 0rem;

      div:not(.logo) {
        margin-top: 2rem;
      }

      .col1 .container {
        max-width: 100%;
      }
    }
    .col1 {
      flex: 2;
      @media only screen and (min-width: 940px) {
        &:not(:last-child) {
          margin-right: 5rem;
        }
      }

      &__heading {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media only screen and (max-width: 940px) {
          flex-direction: column;
        }
      }
      .logo {
        width: 110px;
        margin-right: 1rem;
        &:not(:last-child) {
          @media only screen and (max-width: 940px) {
            margin-bottom: 2rem;
          }
        }
      }
      .logo img {
        width: 100%;
      }

      .title {
        font-size: 3.2rem;
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
    /* Dark mode */
    background-color: #000;
    /* Light mode */
    /*background-color: #aa915b;*/
    /*margin-top: 5rem;*/

    &__container {
      margin: 0 auto;
      font-size: 1.3rem;
      padding: 2.4rem 0;
      width: 90%;
      text-align: center;
      p {
        font-size: 1rem;
        /* Light mode */
        color: var(--highlight);
        opacity: 0.6;
        letter-spacing: 0.3rem;
        font-weight: 700;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles className="wrapper">
      <div className="container">
        <div className="col1">
          <div className="col1__heading">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="title">IRI&nbsp;Zinchenko</h1>
          </div>
          <DescriptionSection>
            A passionate video-maker from Rome
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
                title: "iri.zinchenko.roma@gmail.com",
                path: "mailto:iri.zinchenko.roma@gmail.com",
              },
              {
                title: "IRI Zinchenko, Rome, Italy",
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
        <div className="copyright__container">
          <p>&copy; 2022 - IRI Zinchenko</p>
        </div>
      </div>
    </FooterStyles>
  );
}
