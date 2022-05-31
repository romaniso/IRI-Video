import React from "react";
import { AiFillVideoCamera } from "react-icons/ai";
import DescriptionSection from "./DescriptionSection";
import styled from "styled-components";
const ServiceStyles = styled.div`
  max-width: 350px;
  padding: 2rem 3rem;
  border-top: 2px solid var(--highlight);
  svg {
    width: 4rem;
    color: var(--light);
  }

  .title {
    font-size: 2.6rem;
    color: var(--light);
    opacity: 0.8;
    text-transform: capitalize;
  }

  p {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 768px) {
    .title {
      font-size: 2.4rem;
    }
    svg {
      width: 3.6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export default function Service({
  title = "Title",
  icon = <AiFillVideoCamera />,
  des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum placeat incidunt delectus commodi laborum culpa at, nulla voluptate quos beatae magnam qui esse dicta dignissimos amet quisquam! Pariatur, hic?",
}) {
  return (
    <ServiceStyles className="service card">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <DescriptionSection>{des}</DescriptionSection>
    </ServiceStyles>
  );
}
