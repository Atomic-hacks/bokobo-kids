import React from "react";

const AfricanStoriesHero = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Left triangle - responsive positioning */}
      <div className="absolute top-16 left-4 sm:top-32 sm:left-16">
        <div className="w-0 h-0 border-l-[15px] sm:border-l-[20px] border-l-transparent border-r-[15px] sm:border-r-[20px] border-r-transparent border-b-[25px] sm:border-b-[35px] border-b-emerald-500"></div>
      </div>

      {/* Bottom left circle - responsive positioning */}
      <div
        className="absolute bottom-16 left-4 sm:bottom-20 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-coral-500"
        style={{ borderColor: "#FF6B6B" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 w-full items-center py-16 lg:py-0">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-black leading-[0.9] tracking-tight text-gray-900">
              AFRICAN STORIES FOR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                CHILDREN
              </span>
              !
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              stories that matter - Explore tales rooted in African heritage,
              wisdom and culture that inspire young minds.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
                EXPLORE STORIES
              </button>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full order-1 lg:order-2 mx-auto max-w-md sm:max-w-lg lg:max-w-none">
            {/* Mobile: Single column layout, Tablet+: 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-8 h-full">
              {/* Top Left Image */}
              <div className="relative transform -translate-y-2 sm:-translate-y-4">
                <div className="w-full h-[180px] sm:h-[230px] lg:h-[280px] rounded-tl-3xl rounded-br-3xl sm:rounded-tl-full sm:rounded-br-full overflow-hidden shadow-lg sm:shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                    alt="Children exploring nature"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top Right Image */}
              <div className="relative">
                <div className="w-full h-[180px] sm:h-[230px] lg:h-[280px] rounded-tl-3xl rounded-br-3xl sm:rounded-tl-full sm:rounded-br-full overflow-hidden shadow-lg sm:shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                    alt="Child with magnifying glass"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Left Image */}
              <div className="relative">
                <div className="w-full h-[180px] sm:h-[230px] lg:h-[280px] rounded-tl-3xl rounded-br-3xl sm:rounded-tl-full sm:rounded-br-full overflow-hidden shadow-lg sm:shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                    alt="Children reading together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Right Image */}
              <div className="relative transform -translate-y-2 sm:-translate-y-4">
                <div className="w-full h-[180px] sm:h-[230px] lg:h-[280px] rounded-tl-3xl rounded-br-3xl sm:rounded-tl-full sm:rounded-br-full overflow-hidden shadow-lg sm:shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                    alt="African children learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements - hidden on mobile for cleaner look */}
            {/* Top triangle decoration */}
            <div className="hidden sm:block absolute -top-4 right-4 lg:right-8 z-10">
              <div className="w-0 h-0 border-l-[12px] lg:border-l-[15px] border-l-transparent border-r-[12px] lg:border-r-[15px] border-r-transparent border-b-[20px] lg:border-b-[25px] border-b-orange-400 opacity-70"></div>
            </div>

            {/* Bottom circle decoration */}
            <div className="hidden sm:block absolute bottom-12 lg:bottom-16 left-4 lg:left-8 w-8 h-8 lg:w-12 lg:h-12 rounded-full border-2 lg:border-3 border-red-400 opacity-60"></div>

            {/* Floating dots */}
            <div className="hidden md:block absolute top-16 lg:top-20 right-2 lg:right-4 w-2 lg:w-3 h-2 lg:h-3 bg-amber-400 rounded-full opacity-80"></div>
            <div className="hidden md:block absolute bottom-24 lg:bottom-32 right-12 lg:right-20 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-emerald-500 rounded-full opacity-70"></div>
            <div className="hidden md:block absolute top-1/2 left-2 lg:left-4 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-pink-400 rounded-full opacity-60"></div>

            {/* Subtle connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-6 lg:w-8 h-6 lg:h-8 border-2 border-dashed border-orange-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More floating badge - responsive positioning and sizing */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-[35%] bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-gray-100">
        <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
          LEARN MORE
        </span>
      </div>
    </div>
  );
};

export default AfricanStoriesHero;
