import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import styled from "styled-components";
import data from "../assets/data/galleryRefs";
import Player from "./Player";

SwiperCore.use([Navigation, Pagination]);

const VideoCarouselStyles = styled.div`
  #swiper {
    overflow: visible;
    ul.swiper-wrapper {
      /*transition: 1s transform;*/
      /*&:hover {
        transform: translate3d(-40px, 0, 0);
      }*/
      .swiper-slide.slider__item {
        box-sizing: border-box;
        transition: 300ms transform;
        transform-origin: center center;
        float: left;
        position: relative;
        backface-visibility: hidden;
        &:hover {
          transform: scale(1.5);
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
  }
  .player-wrapper {
    pointer-events: none;
  }
  .swiper {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*.swiper-button-prev {
      left: 2rem;
    }

    .swiper-button-next {
      right: 2rem;
    }*/
    /*
    @media only screen and (max-width: 768px) {
      .swiper-button-prev::after,
      .swiper-button-next::after {
        font-size: 3rem;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: var(--highlight);
      top: 50%;
      transition: color 0.5s ease-in-out;

      &:hover {
        color: var(--light);
      }
    }*/
    /*.swiper-pagination {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      position: relative;
      .swiper-pagination-bullet {
        background: var(--highlight);
      }
    }*/
  }
`;

export default function VideoCarousel({
  title = "Title of the row",
  handleSelect,
}) {
  const slides = document.getElementsByClassName("swiper-slide");
  const swiper = document.getElementsByClassName("swiper-wrapper");
  let number = 0;
  function handleHoverEnter(hoveredSlide) {
    const currentIndex = hoveredSlide.dataset.order;
    slides[currentIndex].style.zIndex = "100";
    for (let i = 0; i < currentIndex; i++) {
      let slide = slides[i];
      slide.classList.add("shiftLeft");
    }
    for (let i = currentIndex; i < slides.length; i++) {
      let slide = slides[i];
      slide.classList.add("shiftRight");
    }
    slides[currentIndex].classList.remove("shiftRight");
    console.log(currentIndex, slides.length);
  }
  function handleHoverLeave(hoveredSlide) {
    console.log("Leave");
    const currentIndex = hoveredSlide.dataset.order;
    slides[currentIndex].style.zIndex = "0";
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
    <VideoCarouselStyles>
      <Swiper
        id="swiper"
        //  className="row"
        tag="section"
        wrapperTag="ul"
        //  navigation
        //  pagination
        spaceBetween={8}
        slidesPerView={6}
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
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 4,
          },
          450: {
            slidesPerView: 3,
          },
        }}
      >
        <section>
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="slider__item"
              tag="li"
              data-order={number++}
              style={{
                // height: 300,
                aspectRatio: 16 / 9,
              }}
              onClick={() => handleSelect(item)}
              onMouseEnter={(e) => handleHoverEnter(e.target)}
              onMouseLeave={(e) => handleHoverLeave(e.target)}
            >
              <Player src={item.source.src} />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </VideoCarouselStyles>
  );
}
