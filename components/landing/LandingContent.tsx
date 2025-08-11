"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  Users,
  Globe,
  ArrowRight,
  Book,
  Star,
  Play,
} from "lucide-react";

const LandingContent = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-amber-50 to-orange-50"
    >
      {/* Movement Section */}
      <MovementSection />

      {/* Values Grid */}
      <ValuesSection />

      {/* Cultural Heritage */}
      <CulturalHeritageSection />

      {/* Book Feature */}
      <BookFeatureSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Movement Section with Earthy Tones
const MovementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-600 to-red-600 blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-600 to-orange-600 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {/* African-inspired decorative element */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.h2
            className="text-6xl lg:text-7xl font-bold mb-12 leading-tight"
            style={{
              color: "#8B4513",
              fontFamily: "serif",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Join the{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
              Bokobokids
            </span>{" "}
            Movement
          </motion.h2>

          <motion.p
            className="text-2xl text-amber-800 mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Joining the Bokobokids movement means joining a welcoming community
            of families who desire to empower children with indestructible tools
            to promote inner well being through African wisdom.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-orange-100 via-amber-50 to-yellow-100 p-12  border-2 border-orange-200 shadow-2xl mb-16 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* African pattern background */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D97706'%3E%3Cpath d='M50 50m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0M25 25l50 50M75 25l-50 50'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "100px 100px",
              }}
            />

            <div className="relative z-10">
              <blockquote className="text-3xl lg:text-4xl font-medium text-amber-900 italic leading-relaxed mb-6">
                "If it takes a village to raise a child, it will take a
                Bokobokids village to raise the next generation of global
                citizens."
              </blockquote>
              <cite className="text-orange-700 font-bold text-lg">
                — Bokobokids Village Philosophy
              </cite>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Values Section with Cultural Colors
const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: Heart,
      title: "Inner Well-being",
      description:
        "Empowering children with indestructible tools to promote mental and emotional health through ancient African wisdom and practices.",
      color: "from-red-700 to-orange-600",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      borderColor: "border-red-200",
    },
    {
      icon: Users,
      title: "Ubuntu Community",
      description:
        "Join families worldwide embracing the Ubuntu philosophy - 'I am because we are' - fostering collective growth and support.",
      color: "from-amber-700 to-orange-700",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
    },
    {
      icon: Globe,
      title: "Global Citizens",
      description:
        "Preparing children to navigate the world with confidence, rooted in African values while embracing global perspectives.",
      color: "from-orange-700 to-red-700",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
    },
    {
      icon: Book,
      title: "Ancient Wisdom",
      description:
        "Connecting modern children to timeless African knowledge, proverbs, and values that have guided humanity for millennia.",
      color: "from-yellow-700 to-amber-700",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-yellow-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-5xl font-bold text-amber-900 mb-6"
            style={{ fontFamily: "serif" }}
          >
            Our Core Values
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className={`${value.bgColor}  p-10 shadow-xl border-2 ${value.borderColor} hover:shadow-2xl transition-all duration-500 relative overflow-hidden group`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Decorative pattern */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D97706'%3E%3Ccircle cx='30' cy='30' r='15'/%3E%3Ccircle cx='15' cy='15' r='7'/%3E%3Ccircle cx='45' cy='15' r='7'/%3E%3Ccircle cx='15' cy='45' r='7'/%3E%3Ccircle cx='45' cy='45' r='7'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />

              <div
                className={`w-20 h-20  bg-gradient-to-br ${value.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="w-10 h-10 text-white" />
              </div>

              <h3
                className="text-2xl font-bold text-amber-900 mb-6"
                style={{ fontFamily: "serif" }}
              >
                {value.title}
              </h3>

              <p className="text-amber-800 leading-relaxed text-lg">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Cultural Heritage Section with Museum Feel
const CulturalHeritageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const artifacts = [
    {
      icon: "🎭",
      title: "Sacred Masks & Sculptures",
      description:
        "Each mask tells a story, representing spirits, ancestors, and the deep connection between the physical and spiritual worlds in African culture.",
      bgGradient: "from-orange-600 to-red-700",
    },
    {
      icon: "🏺",
      title: "Traditional Pottery & Crafts",
      description:
        "Handcrafted vessels and tools that showcase the artistic mastery and practical wisdom of African artisans throughout history.",
      bgGradient: "from-amber-600 to-orange-700",
    },
    {
      icon: "🎵",
      title: "Musical Heritage",
      description:
        "Drums, flutes, and stringed instruments that carry the rhythms and melodies of African traditions, connecting hearts across continents.",
      bgGradient: "from-red-600 to-orange-700",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-orange-50 via-red-50 to-orange-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D97706' fill-opacity='0.1'%3E%3Cpath d='M100 0L150 50L100 100L50 50z M0 100L50 150L100 100L50 50z M100 100L150 150L200 100L150 50z M100 200L150 150L100 100L50 150z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-6xl font-bold text-amber-900 mb-8"
            style={{ fontFamily: "serif" }}
          >
            Cultural Heritage Museum
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full mb-8" />
          <p className="text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed font-light">
            Explore the rich tapestry of African cultural artifacts that tell
            the stories of our ancestors and inspire the next generation of
            global citizens.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={artifact.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="bg-white  p-10 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 relative overflow-hidden">
                {/* Decorative corner element */}
                <div
                  className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${artifact.bgGradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                <div className="text-8xl mb-8 text-center group-hover:scale-110 transition-transform duration-300">
                  {artifact.icon}
                </div>

                <h3
                  className="text-2xl font-bold text-amber-900 mb-6 text-center"
                  style={{ fontFamily: "serif" }}
                >
                  {artifact.title}
                </h3>

                <p className="text-amber-800 leading-relaxed text-center text-lg">
                  {artifact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600  p-12 text-white text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white'%3E%3Cpath d='M40 0L60 20L40 40L20 20z M0 40L20 60L40 40L20 20z M40 40L60 60L80 40L60 20z M40 80L60 60L40 40L20 60z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10">
            <h3
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "serif" }}
            >
              Living Heritage
            </h3>
            <p className="text-xl opacity-90 max-w-5xl mx-auto leading-relaxed">
              These artifacts are not merely historical objects but living
              symbols of a rich cultural heritage that continues to inspire and
              educate children about their roots and the wisdom of their
              ancestors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Book Feature Section with Earthy Design
const BookFeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-orange-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Book Display */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <div className="relative group">
              {/* Shadow book */}
              <div className="w-full h-[500px] bg-gradient-to-br from-orange-600 via-red-600 to-amber-700  shadow-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500"></div>

              {/* Main book */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100  shadow-xl border-2 border-orange-200 p-12 flex items-center justify-center group-hover:-translate-y-2 transition-all duration-500">
                <div className="text-center">
                  <div className="text-8xl mb-6">📚</div>
                  <h3
                    className="text-3xl font-bold text-amber-900 mb-2"
                    style={{ fontFamily: "serif" }}
                  >
                    The Winds of
                  </h3>
                  <h3
                    className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4"
                    style={{ fontFamily: "serif" }}
                  >
                    NAPATA
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full mb-4" />
                  <p className="text-amber-700 text-lg font-medium">
                    Dr. Kheftusa Akhiba Ankh
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gold-400 to-amber-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          {/* Book Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-6" />
              <h2
                className="text-5xl font-bold text-amber-900 mb-8 leading-tight"
                style={{ fontFamily: "serif" }}
              >
                "The Winds of Napata" And Its Modern Relevance
              </h2>
            </div>

            <div className="space-y-6 text-amber-800 leading-relaxed mb-10 text-lg">
              <p>
                Dr. Kheftusa Akhiba Ankh's <em>The Winds of Napata</em> is a
                poignant tale that weaves African history, culture, and identity
                into an immersive narrative designed to inspire and empower.
              </p>

              <p>
                Through the lens of a young boy, Mark, and his journey between
                modern-day Manchester and his ancestral African roots, the book
                merges dreams, folklore, and historical insights.
              </p>

              <p>
                Set against the backdrop of historical kingdoms like Napata and
                Mali, the story rekindles pride in African heritage while
                addressing modern societal challenges.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8  border-2 border-amber-200 mb-10 relative overflow-hidden">
              {/* Decorative pattern */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D97706'%3E%3Ccircle cx='20' cy='20' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-amber-800 font-medium text-lg">
                    <strong>Special Focus:</strong> Particularly relevant for
                    young men facing societal challenges, with over 7 million
                    men in the U.S. experiencing unemployment and
                    marginalization.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center justify-center hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy the Book
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="border-2 border-amber-600 text-amber-700 px-10 py-5 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Preview
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CTA Section with African Night Sky Theme
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-amber-900 via-red-900 to-orange-900 relative overflow-hidden"
    >
      {/* Starry night pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3Ccircle cx='90' cy='50' r='1'/%3E%3Ccircle cx='10' cy='70' r='2'/%3E%3Ccircle cx='60' cy='80' r='1'/%3E%3Ccircle cx='30' cy='90' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-10">
        <div
          className="w-full h-full border-4 border-white rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>
      <div className="absolute bottom-20 right-20 w-24 h-24 opacity-10">
        <div className="w-full h-full bg-white transform rotate-45 animate-pulse" />
      </div>
      <div className="absolute top-1/2 left-10 w-16 h-16 opacity-10">
        <div className="w-full h-full border-2 border-white transform rotate-45 animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative element */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <h2
            className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: "serif" }}
          >
            Ready to Begin the Journey?
          </h2>

          <p className="text-2xl text-amber-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Start your family's journey into African wisdom and cultural
            empowerment. Together, we'll build a stronger future for our
            children through the power of ancestral knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <motion.button
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-6 rounded-full font-semibold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 25px 50px rgba(245, 158, 11, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="border-2 border-amber-400 text-amber-200 px-12 py-6 rounded-full font-semibold text-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                y: -5,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Resources
            </motion.button>
          </div>

          {/* Community stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { number: "10,000+", label: "Families Connected" },
              { number: "50+", label: "Cultural Stories" },
              { number: "25", label: "Countries Reached" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-4xl font-bold text-amber-400 mb-2"
                  style={{ fontFamily: "serif" }}
                >
                  {stat.number}
                </div>
                <div className="text-amber-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>
    </section>
  );
};

export default LandingContent;
