import React, { useState } from "react";
import styled from "styled-components";
import data from "../assets/data/galleryRefs";
import VideoCarousel from "../components/VideoCarousel";
import Player from "../components/Player";
import backgroundImage from "../assets/images/background-projects.jpg";
import { BiChevronDown } from "react-icons/bi";

//Temporary solution
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import { useMediaQuery } from "react-responsive";
import GallerySection from "../components/GallerySection";

const ProjectsPageStyles = styled.div`
  @keyframes shakeY {
    50% {
      top: 5px;
    }
  }
  padding: 12rem 0px 0px 0px;
  @media only screen and (max-width: 990px) {
    padding: 11rem 0px 0px 0px;
  }
  position: relative;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  .gallery-section--projects {
    padding: 25px 15px 0;
    .see-more {
      color: var(--light);
      opacity: 0.8;
      letter-spacing: 1.5px;
      /*line-height: 3.6rem;*/
      font-size: 2.2rem;
      text-align: end;
      position: relative;
      margin-right: 3rem;
      .arrow {
        top: 0;
        transform: translateY(-10%);
        position: absolute;
        width: 3rem;
        height: 3rem;
        animation: shakeY infinite 2s linear;
      }
    }
  }

  /* Temprorary */
  .swiper {
    .swiper-button-prev,
    .swiper-button-next {
      width: 3%;
      height: 100%;
      transform: translateY(-50%);
      color: var(--highlight);
      z-index: 100;
      @media only screen and (max-width: 768px) {
        /*display: inline-block;*/
        transition: color 0.5s ease-in-out;
        width: 6%;
        height: 18%;
        top: 55%;
      }
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
  .project {
    position: relative;
    width: 50%;
    height: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 40px #000000ba;
    transition: filter 0.5s ease-out 0s;

    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 768px) {
      .project__video {
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
    overflow: hidden;
    border-radius: 10px;
    .player-wrapper {
      pointer-events: all;
      transform: none;
    }
  }
`;

export default function Projects() {
  const [playing, setPlaying] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const [shadowBg, setshadowBg] = useState(false);
  const handleSelect = (selectedItem) => {
    setSelectedItem(selectedItem);
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
        <>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            onSlideChange={() => {
              console.log("stop");
              setPlaying(false);
            }}
            autoplay={false}
            watchSlidesProgress={true}
            // onSwiper={(swiper) => console.log(swiper)}
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
                <Player
                  src={item.source.src}
                  light={true}
                  playing={playing}
                  setPlaying={setPlaying}
                  data={item.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <section className="gallery-section--projects">
            <p className="see-more">
              See more <BiChevronDown className="arrow"></BiChevronDown>
            </p>
            <GallerySection isProjectsPage={true} />
          </section>
        </>
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
                <Player src={data[0].source.src} light={false} playing={true} />
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
