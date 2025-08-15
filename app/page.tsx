import React from "react";

import Hero from "../components/landing/Hero";
import BokobokidsMission from "../components/landing/LandingContent";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BokobokidsMission />
    </div>
  );
};

export default page;
