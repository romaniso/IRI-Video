import React, { useState } from "react";
import TitleSection from "../components/TitleSection";
import styled from "styled-components";
//import data from "../assets/data/galleryRefs";
import VideoCarousel from "../components/VideoCarousel";
import Player from "../components/Player";
import backgroundImage from "../assets/images/background-projects.jpg";
//import DescriptionSection from "../components/DescriptionSection";

const ProjectsPageStyles = styled.div`
  padding: 10rem 0px 0px 0px;
  position: relative;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  .projects__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.5s ease 0s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .projects__container {
    padding-top: 5rem;
    text-align: center;
    height: 60vh;
    position: relative;

    .projects__carousel {
    }
  }
  .project {
    /*display: none;*/
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    max-width: 1000px;
    z-index: 100;
    box-shadow: 0px 0px 20px #ffffff14;

    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 768px) {
      .project__video {
        /* display: none; */
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
  const [selectedItem, setSelectedItem] = useState(false);
  const [shadowBg, setshadowBg] = useState(false);
  const handleSelect = (selectedItem) => {
    setSelectedItem(selectedItem);
    console.log(selectedItem);
  };
  const handleShadow = (shadowBg) => {
    setshadowBg(shadowBg);
    console.log(selectedItem);
  };
  return (
    <ProjectsPageStyles className="projects">
      <div className="projects__background">
        <img
          src={backgroundImage}
          alt="background"
          style={{
            filter: shadowBg
              ? "brightness(5%) grayscale(10%)"
              : selectedItem
              ? "brightness(5%) grayscale(10%)"
              : "brightness(35%) grayscale(10%)",
          }}
        />
      </div>

      <div className="projects__container">
        <TitleSection heading="Projects" />
        {selectedItem ? (
          <div className="project">
            <div className="project__video">
              <Player src={selectedItem.source.src} light={false} />
            </div>
          </div>
        ) : null}

        <VideoCarousel
          title="My Recent Projects"
          handleSelect={handleSelect}
          handleShadow={handleShadow}
        />
      </div>
    </ProjectsPageStyles>
  );
}
