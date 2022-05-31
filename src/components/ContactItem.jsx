import React from "react";
import { MdPlace } from "react-icons/md";
import DescriptionSection from "../components/DescriptionSection";
import styled from "styled-components";

const ContactItemStyles = styled.div`
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  border-right: 2px solid var(--highlight);

  @media only screen and (max-width: 768px) {
    margin: 0 2.5rem;
    max-width: 450px;
  }
  .icon {
    color: var(--light);
    background-color: var(--highlight);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    svg {
      width: 3.5rem;
    }
  }
`;

export default function ContactItem({
  icon = <MdPlace></MdPlace>,
  text = "this is an info",
}) {
  return (
    <ContactItemStyles className="wrapper card">
      <div className="icon">{icon}</div>
      <div className="info">
        <DescriptionSection>{text}</DescriptionSection>
      </div>
    </ContactItemStyles>
  );
}
