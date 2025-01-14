import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('../assets/hero-banner.jpg')" }}>
      {/* Dark overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 text-center text-white p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center h-full">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Revolutionizing Talent Acquisition
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl mb-6 max-w-lg mx-auto">
          Connecting companies with skilled professionals through dynamic, challenge-based hackathons. Join the movement.
        </p>

     
      </div>
    </div>
  );
};

export default HeroSection;
