"use client";
import React from "react";
import SocialLinks from "@/components/social-links";
import ContactSection from "@/components/contact-section";
import ProjectsSection from "@/components/projects-section";
import Navigation from "@/components/navigation";
import Header from "@/components/header";
import InfiniteMenuSection from "@/components/hero-section";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30 min-h-screen text-gray-800 overflow-x-hidden">
      <Header />
      <Navigation />
      <InfiniteMenuSection />
      <ProjectsSection />
      <ContactSection />
      <SocialLinks />
    </div>
  );
}
