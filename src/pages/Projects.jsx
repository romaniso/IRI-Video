import React, { useState } from "react";
//import TitleSection from "../components/TitleSection";
import styled from "styled-components";
import data from "../assets/data/galleryRefs";
import VideoCarousel from "../components/VideoCarousel";
import Player from "../components/Player";
import backgroundImage from "../assets/images/background-projects.jpg";
//import DescriptionSection from "../components/DescriptionSection";

//Temporary solution
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import { useMediaQuery } from "react-responsive";

const ProjectsPageStyles = styled.div`
  padding: 10rem 0px 0px 0px;
  @media only screen and (max-width: 990px) {
    padding: 14rem 0px 0px 0px;
  }
  position: relative;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  /* Temprorary */
  .swiper {
    /*position: absolute;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);*/

    .swiper-button-prev,
    .swiper-button-next {
      color: var(--highlight);
      transition: color 0.5s ease-in-out;
      width: 3%;
      height: 100%;
      top: 50%;
      transform: translateY(-50%);
      z-index: 100;
    }
  }
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
    /*padding-top: 5rem;*/
    text-align: center;
    /*height: 80vh;*/
    /*position: relative;*/

    .projects__carousel {
    }
  }
  .project {
    /*display: none;*/
    /*position: absolute;*/
    /*top: calc(0% - 100px);*/
    /*left: 50%;*/
    /*transform: translate(-50%, 0);*/
    position: relative;
    width: 50%;
    height: 100%;
    margin: 0 auto;

    /*max-width: 1000px;*/
    /*z-index: 0;*/
    /*box-shadow: 0px 0px 20px #ffffff14;*/
    transition: filter 0.5s ease-out 0s;

    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 768px) {
      .project__video {
        /* display: none; */
        /*pointer-events: none;*/
        position: relative;
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
  };
  //Temporary solution
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

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

      {isMobile ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="slider__item item-slider"
              tag="li"
              style={{
                aspectRatio: 16 / 9,
              }}
            >
              <Player src={item.source.src} light={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="projects__container">
          {selectedItem ? (
            <div className="project">
              <div className="project__video">
                <Player src={selectedItem.source.src} light={false} />
              </div>
            </div>
          ) : (
            <div
              className="project"
              style={{
                filter: shadowBg
                  ? "brightness(25%) grayscale(10%)"
                  : selectedItem
                  ? "brightness(25%) grayscale(10%)"
                  : "none",
              }}
            >
              <div className="project__video">
                <Player
                  src={data[0].source.src}
                  light={false}
                  autoPlay={true}
                />
              </div>
            </div>
          )}

          {!isMobile ? (
            <VideoCarousel
              title="My Recent Projects"
              handleSelect={handleSelect}
              handleShadow={handleShadow}
            />
          ) : null}
        </div>
      )}
    </ProjectsPageStyles>
  );
}
