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
  @media only screen and (max-width: 920px) {
    width: 100%;
  }
  .btn {
    white-space: nowrap;
    font-size: 2.2rem;
    padding: 0.7em 2em;
    display: inline-block;
    color: var(--light);
    font-family: "Prata Regular";
    letter-spacing: 2.2px;
    outline: none;
    border: none;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    transition: 0.5s;
    box-shadow: 0px 0px 20px #ffffff3e;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;

    &--form {
      /*min-width: 400px;*/
      height: 50px;
      @media only screen and (max-width: 920px) {
        width: 100%;
      }
      .btn__content {
        font-size: 16px;
      }
    }

    &__content,
    input {
      z-index: 20;
    }

    &::before {
      content: "";
      position: absolute;
      width: 110%;
      height: 400%;
      border-radius: 8px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      background: conic-gradient(
        from 90deg at 50% 50%,
        #ffffffcd,
        #fff1dcf3,
        #fdd69cf6,
        #ff9900,
        #ffdaa3f3,
        #fff1dce4
      );
      animation: spinBorder 2s linear infinite;
    }
    &::after {
      content: "";
      position: absolute;
      background: #000000;
      width: 98%;
      height: 95%;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.btn--form::before {
      @media only screen and (max-width: 920px) {
        width: 100%;
        height: 2000%;
      }
    }
    &.btn--form::after {
      @media only screen and (max-width: 920px) {
        width: 99%;
        /*height: 2000%;*/
      }
    }
    &:hover {
      &::before {
        background: rgba(255, 239, 205, 1) 16%;
      }
      &::after {
        background: var(--highlight-gradient);
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
  formMessage = false,
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
      ) : formMessage ? (
        //  <input className="btn btn--form" type="submit" value={btnText} />
        <button className="btn btn--form" type="submit">
          <span className="btn__content">{btnText}</span>
        </button>
      ) : (
        <Link className={outline ? "btn outline" : "btn"} to={btnLink}>
          <span className="btn__content">{btnText}</span>
        </Link>
      )}
    </ButtonStyles>
  );
}
