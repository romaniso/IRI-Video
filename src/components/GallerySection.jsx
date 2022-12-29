import React from "react";
import styled from "styled-components";
import { useState } from "react";

//GIFS for video thumbnails
import DiversoSaloni from "../assets/images/gifs/Diverso Saloni - Roma Tiburtina.gif";
import BellaOlga from "../assets/images/gifs/Bella Olga.gif";
import DiversoSaloni3 from "../assets/images/gifs/Diverso Saloni - Roma Tiburtina Part 3.gif";
import EnergyClubPalestra from "../assets/images/gifs/Energy Club - Palestra.gif";
import FieraDiSposa from "../assets/images/gifs/Fiera di sposa.gif";
import TitanicByFranca from "../assets/images/gifs/Titanic by Franca.gif";
import VideoConLaDrone from "../assets/images/gifs/VIDEO CON LA DRONE 1.gif";
import VideoConLaDrone3 from "../assets/images/gifs/VIDEO CON LA dron Part 3.gif";
import Wedding from "../assets/images/gifs/Wedding.gif";
import PiccolaAFragile from "../assets/images/gifs/Piccola a fragile.gif";
import NataleInFioreARoma from "../assets/images/gifs/Natale in fiore a Roma.gif";
import Franca from "../assets/images/gifs/Franca.gif";
import LaNatura from "../assets/images/gifs/La natura, liberta a amore.gif";
import NotreDameDeParis from "../assets/images/gifs/NotreDameDeParis.gif";
import Concerto from "../assets/images/gifs/concerto.gif";
import ArtEvent from "../assets/images/gifs/ArtEvent.gif";

import Gallery from "./Gallery";

const GallerySectionStyles = styled.div`
  /*padding-top: 15rem;*/
  /*padding-bottom: 15rem;*/
  /*background: var(--dark-bg);*/
  /*text-align: center;*/
  overflow: hidden;
  position: relative;
  .gallery-container {
    position: relative;
    .player {
      width: 70%;
      aspect-ratio: 16/9;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: fixed;
      z-index: 200;
      @media only screen and (max-width: 940px) {
        width: 95%;
      }
      /*#close {
        display: none;
        position: absolute;
        cursor: pointer;
        right: 2.2rem;
        top: 3rem;
        width: 4rem;
        color: var(--highlight);
        &:hover path {
          color: var(--light);
        }
      }*/
      iframe {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .gallery-cover {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.904);
    transition: all 0.3s ease 0s;
    &.opened {
      /*left: 0;*/
      position: absolute;
      z-index: 100;
      cursor: pointer;
    }
  }
  .gallery__content {
    margin-top: 5rem;
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-auto-flow: dense;
    /*flex-wrap: wrap;*/
    /*align-items: center;*/
  }
`;

export default function GallerySection() {
  const [galleryItems, setItems] = useState([
    {
      src: "https://www.youtube.com/embed/ImZwWtOJL-Q",
      opened: false,
      gif: DiversoSaloni,
      id: 0,
    },
    {
      src: "https://www.youtube.com/embed/f_5A6rkstiY",
      opened: false,
      gif: ArtEvent,
      id: 1,
    },
    {
      src: "https://www.youtube.com/embed/VrBAKInGJC0",
      opened: false,
      gif: NotreDameDeParis,
      id: 2,
    },
    {
      src: "https://www.youtube.com/embed/Jt-Cdfz3Jck",
      opened: false,
      gif: TitanicByFranca,
      id: 3,
    },
    {
      src: "https://www.youtube.com/embed/ni-OECxQiiE",
      opened: false,
      gif: BellaOlga,
      id: 4,
    },
    {
      src: "https://www.youtube.com/embed/ed2z3UlUTXY",
      opened: false,
      gif: PiccolaAFragile,
      id: 5,
    },
    {
      src: "https://www.youtube.com/embed/kQk8dgEOjQg",
      opened: false,
      gif: EnergyClubPalestra,
      id: 6,
    },
    {
      src: "https://www.youtube.com/embed/XZlnaongDZc",
      opened: false,
      gif: VideoConLaDrone3,
      id: 7,
    },
    {
      src: "https://www.youtube.com/embed/s4yBssN_QHo",
      opened: false,
      gif: VideoConLaDrone,
      id: 8,
    },
    {
      src: "https://www.youtube.com/embed/q7a8u60Qucs",
      opened: false,
      gif: Wedding,
      id: 9,
    },
    {
      src: "https://www.youtube.com/embed/isn4OMrESTI",
      opened: false,
      gif: FieraDiSposa,
      id: 10,
    },
    {
      src: "https://www.youtube.com/embed/z4bCqgWeLoo",
      opened: false,
      gif: NataleInFioreARoma,
      id: 11,
    },
    {
      src: "https://www.youtube.com/embed/r4Y_QGI0ZmE",
      opened: false,
      gif: Franca,
      id: 12,
    },
    {
      src: "https://www.youtube.com/embed/26QHrDpnsYs",
      opened: false,
      gif: LaNatura,
      id: 13,
    },
    {
      src: "https://www.youtube.com/embed/mcR8UEFrWrQ",
      opened: false,
      gif: DiversoSaloni3,
      id: 14,
    },
    {
      src: "https://www.youtube.com/embed/dptZEZgSebA",
      opened: false,
      gif: Concerto,
      id: 14,
    },
  ]);
  const [isPlaying, setPlaying] = useState(false);
  const [playingVideo, setVideo] = useState(null);

  function onThumbnailClick(id) {
    const newGalleryItems = [...galleryItems];
    newGalleryItems.forEach((item) => (item.opened = false));
    const openedGalleryItem = newGalleryItems.find((item) => item.id === id);
    openedGalleryItem.opened = !openedGalleryItem.opened;
    setItems(newGalleryItems);
    setPlaying(true);
    openPlayer(openedGalleryItem);
    document.body.style.overflow = "hidden";
  }
  function openPlayer(video) {
    setVideo(video.src);
  }

  return (
    <GallerySectionStyles>
      <div
        className={isPlaying ? "gallery-cover opened" : "gallery-cover"}
        onClick={() => {
          setPlaying(false);
          document.body.style.overflow = "auto";
        }}
      ></div>
      {/*<TitleSection heading="My Works" />*/}
      <div className="gallery">
        <div className="gallery-container">
          {isPlaying ? (
            <div className="player">
              {/*<AiFillCloseCircle id="close" />*/}
              <iframe
                src={playingVideo}
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="1"
              ></iframe>
            </div>
          ) : null}
          <div className="gallery__content">
            {galleryItems.map((item) => (
              <Gallery item={item} key={item.id} onClick={onThumbnailClick} />
            ))}
          </div>
        </div>
      </div>
    </GallerySectionStyles>
  );
}
