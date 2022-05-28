import React from "react";
import styled from "styled-components";
const DescriptionSectionStyles = styled.div`
  max-width: 800px;
  /* margin: 0 auto; */
  margin-top: 2rem;
  font-size: 1.8rem;
  line-height: 1.2em;
  p {
    color: var(--highlight);
    opacity: 0.8;
    letter-spacing: 1.5px;
    line-height: 4rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

export default function DescriptionSection({ children: text }) {
  return (
    <DescriptionSectionStyles>
      <p>{text}</p>
    </DescriptionSectionStyles>
  );
}
