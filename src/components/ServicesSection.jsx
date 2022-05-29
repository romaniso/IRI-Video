import React from "react";
import TitleSection from "./TitleSection";
import styled from "styled-components";
import Service from "./Service";
import { MdOutlineVideoSettings, MdOutlineVideocam } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";
const ServicesSectionStyles = styled.div`
  text-align: center;
  .wrapper {
    margin: 15rem auto;
  }

  .services {
    padding-top: 5rem;
    padding: 7rem 3rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 7rem;
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
        <TitleSection heading="Services" subheading="What I offer" />
        <div className="services">
          <Service
            title="video editing"
            icon={<MdOutlineVideoSettings />}
            des="I will edit your films and clips so they look like wonderful and eye-catching. If you are a YouTuber or a musician who wants to show up, You are in the right place!"
          />
          <Service
            title="Film production"
            icon={<MdOutlineVideocam />}
            des="I will edit your films and clips so they look like wonderful and eye-catching. If you are a YouTuber or a musician who wants to show up, You are in the right place!"
          />
          <Service
            title="Direction"
            icon={<RiFilmFill />}
            des="I will edit your films and clips so they look like wonderful and eye-catching. If you are a YouTuber or a musician who wants to show up, You are in the right place!"
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}
