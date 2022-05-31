import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import styled from "styled-components";
import data from "../assets/data/galleryRefs";
import Player from "./Player";

SwiperCore.use([Navigation, Pagination]);

const VideoCarouselStyles = styled.div`
  .player-wrapper {
    pointer-events: none;

    @media only screen and (max-width: 768px) {
      pointer-events: all;
    }
  }
  .swiper {
    max-width: 90%;
    filter: brightness(50%);
    transition: filter 0.5s ease-in-out;

    @media only screen and (max-width: 768px) {
      filter: none;
    }

    &:hover {
      filter: none;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: var(--highlight);
      top: 50%;
      transition: color 0.5s ease-in-out;
      &:hover {
        color: var(--light);
      }
    }
    .swiper-pagination {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      position: relative;
      .swiper-pagination-bullet {
        background: var(--highlight);
      }
    }
  }
`;

export default function VideoCarousel({
  title = "Title of the row",
  handleSelect,
}) {
  return (
    <VideoCarouselStyles>
      <Swiper
        id="swiper"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={4}
        onInit={(swiper) => console.log("Swiper initialized")}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
        breakpoints={{
          1450: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="container">
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="slider__item"
              tag="li"
              style={{
                // height: 300,
                aspectRatio: 16 / 9,
              }}
              onClick={() => handleSelect(item)}
            >
              <Player src={item.source.src} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </VideoCarouselStyles>
  );
}
