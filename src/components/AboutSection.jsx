import React from "react";
import TitleSection from "./TitleSection";
import styled from "styled-components";
import DescriptionSection from "./DescriptionSection";
import AboutImg2 from "../assets/images/Iri.jpg";
import { Link } from "react-router-dom";

const AboutSectionStyles = styled.div`
  background: rgba(0, 0, 0, 0.9);
  .container {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 17rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .left {
      border-left: 2px solid var(--highlight);
      padding-left: 2rem;
      flex: 3;
      text-align: left;
      .link {
        color: var(--highlight);
        text-decoration: underline;
        text-underline-position: under;
        transition: all 0.3s ease 0s;
        &:hover {
          color: var(--light);
        }
      }
    }

    .right {
      flex: 3;
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        max-width: 500px;
        min-width: 250px;
        filter: brightness(90%) grayscale(30%);
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 5rem;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="left">
          <TitleSection heading="About me" subheading="" />
          <DescriptionSection heroDes={true}>
            Hi! I am Irina - a professional and passionate video maker located
            in Rome. Video-making and video-editing are my life passions that
            have accompanied me through my entire life. I began making films a
            dozen years ago in Ukraine - my motherland and carry on doing it in
            picturesque Italy. I have filmed several hundreds or even more
            movies for various occasions. In Ukraine I mainly filmed weddings
            and family events. Currently my main fields are music clips and
            landscapes and cityscapes movies. Check out my works<span> </span>
            <Link to="/projects" className="link">
              here
            </Link>
            .
          </DescriptionSection>
        </div>
        <div className="right">
          <img src={AboutImg2} alt="me" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
