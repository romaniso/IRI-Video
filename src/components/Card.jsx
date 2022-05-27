import React from "react";
import Button from "./Button";
import DescriptionSection from "./DescriptionSection";
import TitleSection from "./TitleSection";
import styled from "styled-components";

const CardStyles = styled.div`
  border-left: 2px solid var(--highlight);
  max-width: 600px; // ?
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 4rem;
  background: rgba(249, 249, 249, 0.042);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.223);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  @media only screen and (max-width: 768px) {
    padding: 2rem 3rem;
    max-width: 450px;
  }
`;

export default function Card({ heading, subheading, description, btnText }) {
  return (
    <CardStyles id="card">
      <TitleSection heading={heading} subheading={subheading} />
      <Button btnText={btnText} cardBtn={true} />
      <DescriptionSection>{description}</DescriptionSection>
    </CardStyles>
  );
}
