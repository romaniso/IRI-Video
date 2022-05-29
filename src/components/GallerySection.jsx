import React from "react";
import styled from "styled-components";
import TitleSection from "./TitleSection";
import data from "../assets/data/galleryRefs";
import MediaElement from "./MediaElement";

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
  const arr = [];
  data.map((item) => arr.push(item.source));
  console.log(arr);
  const sources = arr,
    config = {},
    tracks = {};

  return (
    <GallerySectionStyles>
      <TitleSection />
      <div className="gallery__content">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="gallery__item"
            // style={{ width: 500, height: 281 }}
          >
            <MediaElement
              id={item.id}
              index={index}
              mediaType="video"
              preload="none"
              controls
              width="500"
              height="281"
              poster=""
              sources={JSON.stringify(sources)}
              options={JSON.stringify(config)}
              tracks={JSON.stringify(tracks)}
            />
          </div>
        ))}
      </div>
    </GallerySectionStyles>
  );
}
