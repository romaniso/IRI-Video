import React from "react";
import styled from "styled-components";
import TitleSection from "./TitleSection";

import data from "../assets/data/galleryRefs";
import Player from "./Player";

const GallerySectionStyles = styled.div`
  padding: 15rem 0;
  background: #13070ce5;
  text-align: center;
  overflow: hidden;
  .gallery__content {
    margin-top: 5rem;
    padding-top: 5rem;
    border-top: 2px solid #aa915b75;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-auto-flow: dense;
    /*flex-wrap: wrap;*/
    /*align-items: center;*/
  }
`;

export default function GallerySection() {
  //  const videoWidth = 500;
  //  const videoHeight = 281;
  // const imageRatio = videoWidth / videoHeight;
  return (
    <GallerySectionStyles>
      <TitleSection heading="My Works" subheading="what I do" />
      <div className="gallery">
        <div className="containerr">
          <div className="gallery__content">
            {data.map((item) => (
              <Player src={item.source.src} gif={item.gif} />
            ))}
          </div>
        </div>
      </div>
    </GallerySectionStyles>
  );
}
