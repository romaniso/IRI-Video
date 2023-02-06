import React, { useState, useEffect } from "react";
import AboutSection from "../components/AboutSection";
import ContactBanner from "../components/ContactBanner";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ClipLoader from "react-spinners/ClipLoader";

import styled from "styled-components";

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  &.hidden {
    display: none;
  }
`;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const override = {
    position: "relative",
    zIndex: 300,
    borderColor: "eab676",
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="page">
      <Cover className={loading ? "cover" : "cover hidden"}>
        <ClipLoader
          color="#eab676"
          loading={loading}
          size={150}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Cover>

      <>
        <HeroSection />
        <GallerySection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactBanner />
      </>
    </div>
  );
}
