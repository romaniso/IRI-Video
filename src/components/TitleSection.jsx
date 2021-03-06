import React from "react";
import styled from "styled-components";

const TitleSectionStyles = styled.div`
  /* text-align: center; */
  p {
    opacity: 0.8;
    font-family: "Parisienne Regular";
    font-size: 3.2rem;
    color: var(--light);
  }

  h2 {
    font-family: "Prata Regular";
    font-size: 4rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    color: var(--highlight);
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 3.4rem;
    }
  }
`;

export default function TitleSection({
  heading = "This is a heading",
  subheading = "This is a subheading",
}) {
  return (
    <TitleSectionStyles className="headingSection">
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </TitleSectionStyles>
  );
}
