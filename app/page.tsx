import React from "react";

import Hero from "../components/landing/Hero";
import LandingContent from "../components/landing/LandingContent";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LandingContent />
    </div>
  );
};

export default page;
