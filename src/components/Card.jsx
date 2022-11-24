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

  @media only screen and (max-width: 768px) {
    padding: 2rem 3rem;
    max-width: 450px;
  }
  @media only screen and (max-width: 425px) {
    max-width: 300px;
  }
`;

export default function Card({
  heading,
  subheading,
  description,
  btnText,
  btnLink,
}) {
  return (
    <CardStyles id="card" className="card">
      <TitleSection heading={heading} subheading={subheading} />
      <Button btnText={btnText} cardBtn={true} btnLink={btnLink} />
      <DescriptionSection>{description}</DescriptionSection>
    </CardStyles>
  );
}
