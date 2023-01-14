import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPlayCircle } from "react-icons/bs";
import "animate.css";

const ButtonStyles = styled.div`
  @keyframes spinBorder {
    to {
      transform: rotate(360deg);
    }
  }
  margin-top: 2rem;
  .btn {
    white-space: nowrap;
    font-size: 2.2rem;
    padding: 0.7em 2em;
    display: inline-block;
    color: var(--light);
    font-family: "Prata Regular";
    letter-spacing: 2.2px;
    border-radius: 8px;
    transition: 0.5s;
    box-shadow: 0px 0px 20px #ffffff3e;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;

    &__content {
      z-index: 20;
    }

    &::before {
      content: "";
      position: absolute;
      width: 110%;
      height: 390%;
      background: conic-gradient(
        from 90deg at 50% 50%,
        #ffffff,
        #fff1dc,
        #fdd69c,
        #ff9900,
        #ffdaa3,
        #fff1dc
      );
      animation: spinBorder 3s linear infinite;
    }
    &::after {
      content: "";
      position: absolute;
      background: #000000;
      width: 98%;
      height: 95%;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      &::before {
        background: rgba(255, 239, 205, 1) 16%;
      }
      &::after {
        background: linear-gradient(
          160deg,
          rgba(255, 239, 205, 1) 16%,
          rgba(143, 107, 28, 1) 68%
        );
      }
      color: var(--dark-bg);
      font-weight: bold;
    }
  }

  .btn--hero {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
    font-size: 2.2rem;
    color: var(--light);
    transition: all 0.3s;
    &__img {
      svg {
        width: 45px;
        transition: 0.5s;
      }

      &:hover {
        color: white;
      }

      &:hover svg {
        transform: scale(1.3);
      }
    }
    &__txt {
      text-transform: capitalize;
      text-decoration: underline;
      text-underline-position: under;

      font-family: "Prata Regular";
    }
  }
`;

export default function Button({
  btnLink = "/",
  btnText = "test",
  outline = false,
  heroBtn = false,
}) {
  return (
    <ButtonStyles>
      {heroBtn ? (
        <Link
          className="btn--hero  animate__animated animate__fadeInRight"
          to={btnLink}
        >
          <div className="btn--hero__img">
            <BsPlayCircle />
          </div>
          <span className="btn--hero__txt">See projects</span>
          {btnText}
        </Link>
      ) : (
        <Link className={outline ? "btn outline" : "btn"} to={btnLink}>
          <span className="btn__content">{btnText}</span>
        </Link>
      )}
    </ButtonStyles>
  );
}
