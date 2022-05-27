import React from "react";
import TitleSection from "./TitleSection";
import styled from "styled-components";
import DescriptionSection from "./DescriptionSection";

const AboutSectionStyles = styled.div`
  background-color: var(--dark-bg);
  .headingSection {
    padding-top: 10rem;
    text-align: center;
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <TitleSection
        heading="About me"
        subheading="I will capture your wonderful story"
      />
      <DescriptionSection>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        voluptatem, magni maiores repudiandae eius accusamus facilis? Labore
        architecto autem blanditiis quibusdam fugit omnis itaque reiciendis,
        sunt aperiam et! Tempore, blanditiis.
      </DescriptionSection>
    </AboutSectionStyles>
  );
}
