import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PlayerStyles = styled.div`
  @media only screen and (min-width: 768px) {
    /*The biggest grid elements */
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 16 / 9;
  /*padding-bottom: 52%;*/
  overflow: hidden;
  transition: 0.5s ease-out;
  cursor: pointer;
  /*padding: 1rem;*/
  .react-player__preview {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.1);
  }
`;

//I need to divide Gallery on home page from Player Elements, because it affects Project page
const Player = (props) => {
  const [clicked, setClicked] = useState(false);
  const { src, light = true } = props;

  return (
    <PlayerStyles
      className="player-wrapper"
      onClick={() => setClicked(!clicked)}
    >
      {/*<img src={gif} alt="" />*/}
      <ReactPlayer
        className="react-player"
        url={src}
        width="100%"
        height="100%"
        //  controls={true}
        //  playing={true}
        light={light}
        loop={true}
        //  volume={1}
        muted={true}
        embedOptions={true}
      />
    </PlayerStyles>
  );
};

export default Player;
