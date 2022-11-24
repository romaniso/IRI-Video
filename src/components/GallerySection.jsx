import React from "react";
import styled from "styled-components";
import TitleSection from "./TitleSection";

import data from "../assets/data/galleryRefs";
import Player from "./Player";

const GallerySectionStyles = styled.div`
  padding: 15rem 0;
  background: #13070ce5;
  text-align: center;

  .gallery__content {
    border-top: 2px solid #aa915b75;
    margin-top: 5rem;
    padding-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default function GallerySection() {
  const videoWidth = 500;
  const videoHeight = 281;
  // const imageRatio = videoWidth / videoHeight;
  return (
    <GallerySectionStyles>
      <TitleSection heading="My Works" subheading="what I do" />
      <div className="gallery__content">
        {data.map((item) => (
          <div
            key={item.id}
            className="gallery__item"
            style={{ width: videoWidth, height: videoHeight }}
          >
            <Player src={item.source.src} />
          </div>
        ))}
      </div>
    </GallerySectionStyles>
  );
}
