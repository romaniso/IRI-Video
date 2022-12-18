import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPlayCircle } from "react-icons/bs";
import "animate.css";

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
      background: var(--dark-bg);
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
          {/*{btnText}*/}
        </Link>
      ) : (
        <Link className={outline ? "btn outline" : "btn"} to={btnLink}>
          {btnText}
        </Link>
      )}
    </ButtonStyles>
  );
}
