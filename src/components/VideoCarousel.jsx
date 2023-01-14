import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import styled from "styled-components";
import data from "../assets/data/galleryRefs";
import Player from "./Player";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const VideoCarouselStyles = styled.div`
  #swiper {
    overflow: visible;
    /*cursor: grab;*/
    ul.swiper-wrapper {
      /*transition: 1s transform;*/
      /*&:hover {
        transform: translate3d(-40px, 0, 0);
      }*/
      .swiper-slide.slider__item {
        box-sizing: border-box;
        transition: 700ms all;
        transform-origin: center center;
        backface-visibility: hidden;
        position: relative;
        &:hover {
          transform: scale(1.3);
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
        font-size: 1.4rem;
        letter-spacing: 0.15rem;
        color: white;
        text-align: center;
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
    .swiper-pagination {
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      position: relative;
      .swiper-pagination-progressbar-fill {
        background: var(--highlight);
      }
    }
  }
`;

//const backgroundImage = document.querySelector(".projects__background");
export default function VideoCarousel({
  title = "Title of the row",
  handleSelect,
  handleShadow,
}) {
  //  const [hovered, setHover] = useState(false);
  const slides = document.getElementsByClassName("swiper-slide");
  let number = 0;
  //  console.log(backgroundImage);
  function handleHoverEnter(hoveredSlide) {
    const currentIndex = hoveredSlide.dataset.order;
    slides[currentIndex].style.zIndex = "100";
    slides[currentIndex].style.boxShadow = "0px 0px 20px #ffffff14";
    // backgroundImage.style.filter = "brightness(10%) grayscale(10%)";
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
    // backgroundImage.style.filter = "brightness(35%) grayscale(10%)";
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
        //  autoplay={{ delay: 2000 }}
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
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 2,
          },
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
                handleShadow(true);
                handleHoverEnter(e.target);
              }}
              onMouseLeave={(e) => {
                handleShadow(false);
                handleHoverLeave(e.target);
              }}
            >
              <div className="item-slider__title">
                <p>{item.title}</p>
              </div>
              <Player src={item.source.src} />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </VideoCarouselStyles>
  );
}
