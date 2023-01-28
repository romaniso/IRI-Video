import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import styled from "styled-components";
import data from "../assets/data/galleryRefs";
//import Player from "./Player";
import Thumbnail from "./Thumbnail";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const VideoCarouselStyles = styled.div`
  #swiper {
    overflow: visible;
    /*background: rgb(0, 0, 0);*/
    background: linear-gradient(0deg, #000000df 23%, rgba(0, 0, 0, 0.146) 84%);
    padding: 25px 0;
    @media only screen and (max-width: 768px) {
      /*height: 200px;*/
      /*width: 100%;*/
    }
    .swiper-slide.slider__item {
      box-sizing: border-box;
      transition: 400ms transform ease-out;
      transform-origin: center center;
      backface-visibility: hidden;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      /*@media only screen and (min-width: 768px) {
      }*/
      &:hover {
        transform: scale(1.3);
        z-index: 20;
        .item-slider__title {
          opacity: 1;
        }
      }
      &:hover ~ & {
        transform: translate3d(80px, 0, 0);
      }
    }
    .shiftLeft {
      transform: translate3d(-40px, 0, 0);
      filter: brightness(10%);
    }

    .shiftRight {
      transform: translate3d(40px, 0, 0);
      filter: brightness(10%);
    }
  }
  .item-slider__title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    font-size: 10px;
    opacity: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 25%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0;
    pointer-events: none;
    z-index: 20;
    transition: opacity 0.3s ease 0s;
    p {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 10px;
      z-index: 22;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      color: white;
      text-align: center;
    }
  }
  /*.player-wrapper {
    pointer-events: none;
  }*/
  .swiper {
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
    .swiper-pagination {
      margin-top: 4rem;
      position: relative;
      height: 2px;
      .swiper-pagination-progressbar-fill {
        background: var(--highlight-gradient);
      }
    }
  }
`;

export default function VideoCarousel({
  title = "Title of the row",
  handleSelect,
  handleShadow,
}) {
  const [hovered, setHovered] = useState(false);
  const slides = document.getElementsByClassName("swiper-slide");
  let number = 0;
  const handleHovered = (hovered) => {
    setHovered(hovered);
  };
  function handleHoverEnter(hoveredSlide) {
    const currentIndex = hoveredSlide.dataset.order;
    slides[currentIndex].style.zIndex = "100";
    slides[currentIndex].style.boxShadow = "0px 0px 20px #ffffff14";
    for (let i = 0; i < currentIndex; i++) {
      let slide = slides[i];
      slide.classList.add("shiftLeft");
    }
    for (let i = currentIndex; i < slides.length; i++) {
      let slide = slides[i];
      slide.classList.add("shiftRight");
    }
    slides[currentIndex].classList.remove("shiftRight");
  }
  function handleHoverLeave(hoveredSlide) {
    const currentIndex = hoveredSlide.dataset.order;
    slides[currentIndex].style.zIndex = "0";
    slides[currentIndex].style.boxShadow = "none";
    for (let i = 0; i < slides.length; i++) {
      let slide = slides[i];
      slide.classList.remove("shiftLeft");
    }
    for (let i = currentIndex; i < slides.length; i++) {
      let slide = slides[i];
      slide.classList.remove("shiftRight");
    }
  }

  return (
    <VideoCarouselStyles
      onMouseEnter={() => {
        handleHovered(true);
        handleShadow(true);
      }}
      onMouseLeave={() => {
        handleHovered(false);
        handleShadow(false);
      }}
    >
      <Swiper
        id="swiper"
        tag="section"
        wrapperTag="ul"
        navigation={hovered ? true : false}
        pagination={{ type: "progressbar" }}
        spaceBetween={8}
        //  slidesPerView={5}
        //  grid={{ rows: 2 }}
        onInit={(swiper) => console.log("Swiper initialized")}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
        breakpoints={{
          1450: {
            slidesPerView: 7,
          },
          1024: {
            slidesPerView: 7,
          },
          768: {
            slidesPerView: 6,
          },
          // 450: {
          //   slidesPerView: 5,
          // },
        }}
      >
        <section>
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="slider__item item-slider"
              tag="li"
              data-order={number++}
              style={{
                aspectRatio: 16 / 9,
              }}
              onClick={() => {
                handleSelect(item);
              }}
              onMouseEnter={(e) => {
                handleHoverEnter(e.target);
                handleHovered(true);
              }}
              onMouseLeave={(e) => {
                handleHoverLeave(e.target);
              }}
            >
              <div className="item-slider__title">
                <p>{item.title}</p>
              </div>
              <Thumbnail
                item={item}
                key={item.id}
                // onClick={onThumbnailClick}
                // isProjectsPage={isProjectsPage}
              />
              {/*<Player src={item.source.src} />*/}
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </VideoCarouselStyles>
  );
}
