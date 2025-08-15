import React from "react";

const BokobokidsMission = () => {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="py-24 px-8 relative overflow-hidden">
        {/* Refined decorative elements */}
        <div className="absolute top-24 right-32 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-emerald-500 opacity-40"></div>
        <div className="absolute bottom-40 left-24 w-8 h-8 rounded-full border border-orange-400 opacity-30"></div>
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left content - cleaner typography */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-light leading-[1.1] text-gray-900 tracking-tight">
                  THE MISSION BEHIND{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 font-medium">
                    BOKOBOKIDS
                  </span>
                </h2>

                <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-light text-gray-800 leading-relaxed">
                  Building bridges through stories that matter
                </h3>

                <div className="space-y-6 text-gray-600 leading-relaxed max-w-lg">
                  <p className="text-lg">
                    We create meaningful connections between children and their
                    heritage through carefully crafted stories that celebrate
                    African wisdom, culture, and values.
                  </p>

                  <p className="text-lg">
                    Every story is a doorway to discovery, helping young minds
                    explore their identity while building confidence for the
                    world ahead.
                  </p>
                </div>
              </div>

              <button className="group bg-gradient-to-r from-red-500 to-pink-500 text-white px-12 py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">DISCOVER OUR STORIES</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Right side - more minimal approach */}
            <div className="relative h-[600px]">
              {/* Main quote card - cleaner design */}
              <div
                className="absolute top-8 right-0 w-[400px] bg-gray-50 p-10 border border-gray-100"
                style={{
                  borderRadius: "24px",
                  transform: "rotate(0.5deg)",
                }}
              >
                <blockquote className="text-xl font-light text-gray-800 mb-6 leading-relaxed italic">
                  &quot;If it takes a village to raise a child, it takes a
                  Bokobokids village to raise global citizens.&quot;
                </blockquote>
                <cite className="text-xs font-semibold text-orange-600 uppercase tracking-widest not-italic">
                  — Our Philosophy
                </cite>
              </div>

              {/* Stats card - more premium */}
              <div
                className="absolute bottom-16 left-0 w-[300px] bg-white p-8 border border-gray-100 shadow-xl"
                style={{
                  borderRadius: "20px",
                  transform: "rotate(-1deg)",
                }}
              >
                <div className="text-center space-y-3">
                  <div className="text-4xl font-light text-orange-600">
                    10,000+
                  </div>
                  <div className="w-8 h-0.5 bg-orange-400 mx-auto"></div>
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-widest">
                    Children Connected
                  </p>
                </div>
              </div>

              {/* Minimal connecting elements */}
              <div className="absolute top-32 left-20 w-12 h-12 rounded-full bg-emerald-500 opacity-10"></div>
              <div className="absolute bottom-32 right-16 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>

              {/* Subtle line art */}
              <div className="absolute top-40 left-32 w-[160px] h-[180px] pointer-events-none opacity-10">
                <svg width="160" height="180">
                  <path
                    d="M20,20 Q60,60 120,120 Q130,140 140,160"
                    stroke="#F59E0B"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="2,2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - More spacious and minimal */}
      <section className="py-32 px-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-20 left-40 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-amber-400 opacity-30"></div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
              What guides us
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mb-8"></div>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Four principles that shape every story we tell and every
              connection we make.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
            <div className="space-y-6 group">
              <h3 className="text-2xl font-light text-gray-900">
                Cultural pride
              </h3>
              <div className="w-8 h-0.5 bg-emerald-500 group-hover:w-12 transition-all duration-300"></div>
              <p className="text-gray-600 leading-relaxed font-light">
                Celebrating the richness of African heritage while making it
                accessible and relevant for today&apos;s children.
              </p>
            </div>

            <div className="space-y-6 group">
              <h3 className="text-2xl font-light text-gray-900">
                Global perspective
              </h3>
              <div className="w-8 h-0.5 bg-orange-500 group-hover:w-12 transition-all duration-300"></div>
              <p className="text-gray-600 leading-relaxed font-light">
                Preparing young minds to navigate the world with confidence,
                rooted in their cultural identity.
              </p>
            </div>

            <div className="space-y-6 group">
              <h3 className="text-2xl font-light text-gray-900">
                Community connection
              </h3>
              <div className="w-8 h-0.5 bg-pink-500 group-hover:w-12 transition-all duration-300"></div>
              <p className="text-gray-600 leading-relaxed font-light">
                Building bridges between families worldwide through shared
                stories and values.
              </p>
            </div>

            <div className="space-y-6 group">
              <h3 className="text-2xl font-light text-gray-900">
                Timeless wisdom
              </h3>
              <div className="w-8 h-0.5 bg-red-500 group-hover:w-12 transition-all duration-300"></div>
              <p className="text-gray-600 leading-relaxed font-light">
                Weaving ancient African knowledge into narratives that speak to
                modern experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section - Cleaner grid */}
      <section className="py-32 px-8 bg-white relative">
        <div className="absolute bottom-32 right-24 w-8 h-8 rounded-full border border-red-400 opacity-20"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-4xl font-light text-gray-900 tracking-tight">
                Stories that{" "}
                <span className="text-orange-600 font-normal">matter</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                Each narrative draws from authentic African traditions,
                carefully adapted to inspire and educate young readers.
              </p>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group">
                <div className="w-16 h-16 bg-orange-600 rounded-full mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-light text-xl">ST</span>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-6">
                  Sacred narratives
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Traditional tales that explore the connection between the
                  physical and spiritual worlds.
                </p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-emerald-600 rounded-full mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-light text-xl">CC</span>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-6">
                  Cultural crafts
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Stories celebrating the artistry and practical wisdom embedded
                  in traditional crafts.
                </p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-purple-600 rounded-full mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-light text-xl">MH</span>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-6">
                  Musical heritage
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Rhythms and melodies that carry African traditions across
                  continents and generations.
                </p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-red-600 rounded-full mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-light text-xl">LW</span>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-6">
                  Living wisdom
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Ancient knowledge systems that remain relevant for navigating
                  modern challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Feature - More sophisticated dark section */}
      <section className="py-32 px-8 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-24 right-32 w-4 h-4 bg-orange-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-emerald-500 rounded-full opacity-30"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-light tracking-tight">
                  The Winds of{" "}
                  <span className="text-orange-500 font-normal">Napata</span>
                </h2>
                <div className="w-12 h-0.5 bg-orange-500"></div>
                <p className="text-lg text-gray-300 font-light">
                  Dr. Kheftusa Akhiba Ankh
                </p>
              </div>

              <div className="space-y-8 text-gray-300 leading-relaxed font-light">
                <p className="text-xl">
                  A transformative journey that bridges ancient African kingdoms
                  with contemporary identity. Through Mark&apos;s story, young
                  readers explore themes of heritage, belonging, and
                  empowerment.
                </p>

                <p className="text-lg">
                  Particularly resonant for young people navigating questions of
                  identity in an interconnected world.
                </p>
              </div>

              <div className="flex gap-6 pt-4">
                <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-orange-700 transition-colors duration-200">
                  Order Now
                </button>
                <button className="border border-white text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-colors duration-200">
                  Read Sample
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                className="bg-gradient-to-br from-orange-600 to-red-600 h-[400px] flex items-center justify-center shadow-2xl relative overflow-hidden"
                style={{ borderRadius: "24px" }}
              >
                <div className="text-center relative z-10">
                  <div className="w-32 h-40 bg-white bg-opacity-10 mx-auto mb-8 flex items-center justify-center rounded-xl border border-white border-opacity-20">
                    <span className="text-4xl font-light text-white">W</span>
                  </div>
                  <p className="text-lg font-light tracking-wide">
                    Available Now
                  </p>
                </div>

                {/* Subtle overlay pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - More refined */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 mb-16">
            <h2 className="text-5xl font-light text-gray-900 tracking-tight">
              Start the journey
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mx-auto"></div>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
              Join families worldwide in celebrating African heritage through
              stories that inspire, educate, and connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="group bg-gradient-to-r from-red-500 to-pink-500 text-white px-12 py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">JOIN OUR COMMUNITY</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
            <button className="border border-gray-300 text-gray-700 px-12 py-4 rounded-full text-sm font-semibold tracking-wide hover:border-gray-500 hover:bg-gray-50 transition-all duration-200">
              EXPLORE STORIES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BokobokidsMission;
