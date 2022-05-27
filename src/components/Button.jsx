import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPlay } from "react-icons/bs";

const ButtonStyles = styled.div`
  margin-top: 2rem;
  .btn {
    white-space: nowrap;
    font-size: 2.2rem;
    padding: 0.7em 2em;
    display: inline-block;
    /* border-radius: 12px; */
    color: var(--light);
    transition: all 0.3s;
    font-family: "Prata Regular";
    border: 2px solid var(--gray-1);
    /* text-transform: uppercase; */
    background-color: var(--highlight);
    transition: 0.5s;

    &:hover {
      background: radial-gradient(
          ellipse farthest-corner at right bottom,
          #fedb37 0%,
          #fdb931 8%,
          #9f7928 30%,
          #8a6e2f 40%,
          transparent 80%
        ),
        radial-gradient(
          ellipse farthest-corner at left top,
          #ffffff 0%,
          #ffffac 8%,
          #d1b464 25%,
          #5d4a1f 62.5%,
          #5d4a1f 100%
        );
    }
  }

  .btn--card {
    white-space: nowrap;
    font-size: 2.2rem;
    display: inline-block;
    color: var(--light);
    transition: all 0.3s;
    font-family: "Prata Regular";
    transition: 0.5s;
    position: relative;

    svg {
      position: absolute;
      width: 60px;
      left: 8rem;
      transition: 0.5s;
    }

    &:hover {
      color: white;
    }

    &:hover svg {
      transform: scale(1.3);
    }
  }
`;

export default function Button({
  btnLink = "/",
  btnText = "test",
  outline = false,
  cardBtn = false,
}) {
  return (
    <ButtonStyles>
      {cardBtn ? (
        <Link className="btn--card" to={btnLink}>
          <BsPlay />
          {btnText}
        </Link>
      ) : (
        <Link className={outline ? "btn outline" : "btn"} to={btnLink}>
          {btnText}
        </Link>
      )}
    </ButtonStyles>
  );
}
