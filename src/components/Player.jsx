import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PlayerStyles = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 1rem;
  transition: 0.5s ease-out;

  &:hover {
    transform: scale(1.05);
    filter: blur(0);
  }
`;

const Player = (props) => {
  const [clicked, setClicked] = useState(false);
  const { src } = props;

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
        light={true}
      />
    </PlayerStyles>
  );
};

export default Player;
