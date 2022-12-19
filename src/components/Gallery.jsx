//import React, { useState } from "react";
//import ReactPlayer from "react-player";
import styled from "styled-components";

const GalleryStyles = styled.div`
  @media only screen and (min-width: 1024px) {
    /* The biggest grid elements*/
    &:nth-child(5) {
      grid-column: span 3;
      grid-row: span 3;
    }
    /* Big grid elements */
    &:nth-child(6),
    &:nth-child(3) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
  @media only screen and (max-width: 1450px) and (min-width: 1160px) {
    /* Big grid elements */
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(3) {
      grid-column: span 2;
      grid-row: span 2;
    }
    &:nth-child(16) {
      display: none;
    }
  }
  @media only screen and (max-width: 1023px) and (min-width: 870px) {
    &:nth-child(16) {
      display: none;
    }
  }
  &:hover {
    /*transform: scale(1.03);
    z-index: 2;*/
    filter: grayscale(100%) blur(3px);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 16 / 9;
  /*padding-bottom: 52%;*/
  overflow: hidden;
  transition: 0.5s ease-out;
  cursor: pointer;
`;
function getClassName(selected) {
  if (selected) {
    return "thumbnail selected";
  } else {
    return "thumbnail";
  }
}

const Player = ({ item, onClick }) => {
  return (
    <GalleryStyles className="gallery-wrapper">
      <img
        src={item.gif}
        alt="My video project"
        className={getClassName(item.opened)}
        onClick={() => onClick(item.id)}
      />
    </GalleryStyles>
  );
};

export default Player;
