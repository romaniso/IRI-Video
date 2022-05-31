import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PlayerStyles = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.5s ease-out;
  padding: 1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

const Player = (props) => {
  const [clicked, setClicked] = useState(false);
  const { src, light = true } = props;

  return (
    <PlayerStyles
      className="player-wrapper"
      onClick={() => setClicked(!clicked)}
    >
      <ReactPlayer
        className="react-player"
        url={src}
        width="100%"
        height="100%"
        controls={true}
        light={light}
      />
    </PlayerStyles>
  );
};

export default Player;
