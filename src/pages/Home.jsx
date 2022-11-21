import React from "react";
import AboutSection from "../components/AboutSection";
import ContactBanner from "../components/ContactBanner";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <GallerySection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}
