import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const GalleryStyles = styled.div`
  @media only screen and (min-width: 768px) {
    /* The biggest grid elements*/
    &:nth-child(5),
    &:nth-child(22) {
      grid-column: span 3;
      grid-row: span 3;
    }
    /* Big grid elements */
    &:nth-child(19),
    &:nth-child(6),
    &:nth-child(9),
    &:nth-child(3),
    &:nth-child(18),
    &:nth-child(5),
    &:nth-child(17),
    &:nth-child(25),
    &:nth-child(30),
    &:nth-child(20) {
      grid-column: span 2;
      grid-row: span 2;
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
