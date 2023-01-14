import React from "react";
import TitleSection from "./TitleSection";
import styled from "styled-components";
import Service from "./Service";
import { MdOutlineVideoSettings, MdOutlineVideocam } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";
const ServicesSectionStyles = styled.div`
  text-align: center;
  /*height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;*/
  .wrapper {
    margin: 15rem auto;
    @media only screen and (max-width: 768px) {
      margin: 10rem auto;
    }
  }
  .headingSection h2 {
    margin-bottom: 5rem;
    @media only screen and (max-width: 768px) {
      margin-bottom: 3rem;
    }
  }

  .services {
    /*padding-top: 5rem;*/
    /*padding: 7rem 3rem;*/
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 5rem;
    /*@media only screen and (max-width: 940) {
      padding: 0rem 0 0 0;
    }*/
  }

  @media only screen and (max-width: 768px) {
    .services {
      flex-direction: column;
      max-width: 450px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesSectionStyles className="container services__section">
      <div className="wrapper">
        <TitleSection heading="Services" />
        <div className="services">
          <Service
            title="video editing"
            icon={<MdOutlineVideoSettings />}
            des="I will edit your films and make them eye-catching"
          />
          <Service
            title="Film production"
            icon={<MdOutlineVideocam />}
            des="A proper frame draws the eye, so let me make it"
          />
          <Service
            title="Direction"
            icon={<RiFilmFill />}
            des="I can make up a great plot for you story"
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}
