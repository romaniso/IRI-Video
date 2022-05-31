import React, { useState } from "react";
import TitleSection from "../components/TitleSection";
import styled from "styled-components";
import data from "../assets/data/galleryRefs";
import VideoCarousel from "../components/VideoCarousel";
import Player from "../components/Player";
import DescriptionSection from "../components/DescriptionSection";

const ProjectsPageStyles = styled.div`
  text-align: center;
  .container {
    max-width: 1500px;
  }
  .project {
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin: 1rem auto;

    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 768px) {
      .project__video {
        display: none;
      }
    }

    .project__description {
      flex: 2;
      text-align: left;
      border-right: 2px solid var(--highlight);
      h3 {
        font-size: 2.4rem;
      }

      @media only screen and (max-width: 768px) {
        padding: 2.4rem;
        h3 {
          font-size: 1.8rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  .project__video {
    flex: 4;
    aspect-ratio: 16/9;
    .player-wrapper {
      pointer-events: all;
      transform: none;
    }
  }
`;

export default function Projects() {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleSelect = (selectedItem) => {
    setSelectedItem(selectedItem);
  };
  return (
    <ProjectsPageStyles>
      <TitleSection
        heading="My Works"
        subheading="Take a look at my projects"
      />
      <div className="container project">
        <div className="project__video">
          {<Player src={selectedItem.source.src} light={false} />}
        </div>
        <div className="project__description card">
          <h3>{selectedItem.title}</h3>
          <DescriptionSection>{selectedItem.des}</DescriptionSection>
        </div>
      </div>

      <VideoCarousel title="My Recent Projects" handleSelect={handleSelect} />
    </ProjectsPageStyles>
  );
}
