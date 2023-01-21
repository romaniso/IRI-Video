import React from "react";
import styled from "styled-components";

const TitleSectionStyles = styled.div`
  /* text-align: center; */
  p {
    opacity: 0.8;
    font-family: "Prata Regular";
    font-weight: 400;
    font-size: 2.4rem;
    color: var(--highlight);
  }

  h2 {
    font-family: "Prata Regular";
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: var(--light);
    text-shadow: 0px 0px 20px #ffffff3e;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 3.4rem;
    }
  }
  @media only screen and (max-width: 425px) {
    p {
      font-size: 2rem;
    }

    h2 {
      font-size: 2.4rem;
    }
  }
`;

export default function TitleSection({ heading, subheading }) {
  return (
    <TitleSectionStyles className="headingSection">
      <h2>{heading}</h2>
      {subheading ? <p>{subheading}</p> : null}
    </TitleSectionStyles>
  );
}
