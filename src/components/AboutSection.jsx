import React from "react";
import TitleSection from "./TitleSection";
import styled from "styled-components";
import DescriptionSection from "./DescriptionSection";
//import AboutImg from "../assets/images/aboutImg-4.jpg";
import AboutImg2 from "../assets/images/Iri.jpg";
//import AboutImg3 from "../assets/images/Iri-2.jpg";

const AboutSectionStyles = styled.div`
  background: #13070ce5;
  .container {
    margin: 4rem auto;
    padding: 17rem 0;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 2rem;

    .left {
      border-left: 2px solid var(--highlight);
      padding-left: 2rem;
      flex: 5;
      text-align: left;
    }

    .right {
      flex: 3;
      position: relative;
      img {
        max-width: 500px;
        min-width: 250px;
        filter: brightness(90%) grayscale(30%);
        /* border: 2px solid var(--highlight); */
        /* border-radius: 16px; */
      }
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 5rem;
    }
  }
  /* .headingSection {
    padding-top: 12rem;
    text-align: center;
  } */
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="left">
          <TitleSection
            heading="About me"
            subheading="I will capture your wonderful story"
          />
          <DescriptionSection>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatem, magni maiores repudiandae eius accusamus facilis? Labore
            architecto autem blanditiis quibusdam fugit omnis itaque reiciendis,
            sunt aperiam et! Tempore, blanditiis.Labore architecto autem
            blanditiis quibusdam fugit omnis itaque reiciendis, sunt aperiam et!
            Tempore, blanditiis.Tempore, blanditiis.Labore architecto autem
            blanditiis quibusdam fugit omnis itaque reiciendis, sunt aperiam et!
            Tempore, blanditiis.
          </DescriptionSection>
        </div>
        <div className="right">
          <img src={AboutImg2} alt="me" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
