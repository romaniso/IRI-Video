import React from "react";
import styled from "styled-components";
import TitleSection from "./TitleSection";

import data from "../assets/data/galleryRefs";
import Player from "./Player";

const GallerySectionStyles = styled.div`
  padding-top: 15rem;
  background: var(--dark-bg);
  text-align: center;

  .gallery__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default function GallerySection() {
  return (
    <GallerySectionStyles>
      <TitleSection heading="My Works" subheading="what I do" />
      <div className="gallery__content">
        {data.map((item) => (
          <div
            key={item.id}
            className="gallery__item"
            style={{ width: 500, height: 281 }}
          >
            <Player src={item.source.src} />
          </div>
        ))}
      </div>
    </GallerySectionStyles>
  );
}
