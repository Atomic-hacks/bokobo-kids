"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Play, BookOpen, Heart } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const heroStories = [
    {
      url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
      title: "Ancient Kingdoms",
      subtitle: "Where great empires once flourished",
      story: "From the golden halls of Ghana to the wisdom of Timbuktu",
      color: "from-amber-900/80 to-orange-800/60",
    },
    {
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
      title: "Living Heritage",
      subtitle: "Traditions that breathe with life",
      story: "Every weave tells a story, every rhythm carries wisdom",
      color: "from-red-900/80 to-orange-700/60",
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80",
      title: "Wisdom Keepers",
      subtitle: "Guardians of ancestral knowledge",
      story: "In every elder's voice, echoes the wisdom of ages",
      color: "from-amber-800/80 to-yellow-700/60",
    },
  ];

  // Drum beat timing pattern - authentic African rhythm
  const drumBeatPattern = [800, 400, 800, 400, 1200, 600];
  const [beatIndex, setBeatIndex] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) return;

    const currentBeat = drumBeatPattern[beatIndex % drumBeatPattern.length];
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStories.length);
      setBeatIndex((prev) => prev + 1);
    }, currentBeat * 8); // Slower for storytelling pace

    return () => clearTimeout(timer);
  }, [currentSlide, beatIndex, isAutoPlay]);

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % heroStories.length);
  };

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrentSlide(
      (prev) => (prev - 1 + heroStories.length) % heroStories.length
    );
  };

  // Weaving pattern animation variants
  const weavingVariants: Variants = {
    initial: { opacity: 0, x: -100, rotate: -5 },
    enter: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      rotate: 5,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative h-screen overflow-hidden bg-stone-900">
      {/* Background Image Slider with Weaving Transition */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <AnimatePresence mode="wait">
          {heroStories.map(
            (story, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${story.url})` }}
                  variants={weavingVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                />
              )
          )}
        </AnimatePresence>

        {/* Dynamic Gradient Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${heroStories[currentSlide].color}`}
          key={`gradient-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* African Textile Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M0 40L40 0h40v40L40 80H0V40zm40 0L20 20v40l20-20zm0 0L60 20v40L40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Mudcloth Pattern Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-60" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative h-full flex items-center"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - Story */}
            <div className="lg:col-span-7 text-white space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                {/* Chapter Indicator */}
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  key={`chapter-${currentSlide}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-200 text-sm font-medium tracking-wide">
                    Chapter {String(currentSlide + 1).padStart(2, "0")}
                  </span>
                  <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                </motion.div>

                {/* Main Title with Storybook Animation */}
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold leading-tight mb-4"
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.7,
                    type: "spring",
                    damping: 20,
                  }}
                >
                  <span className="bg-gradient-to-r from-amber-200 via-orange-200 to-amber-100 bg-clip-text text-transparent">
                    {heroStories[currentSlide].title}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-2xl text-orange-100 font-light mb-4"
                  key={`subtitle-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  {heroStories[currentSlide].subtitle}
                </motion.p>

                {/* Story Description */}
                <motion.p
                  className="text-lg text-white/90 leading-relaxed max-w-2xl italic"
                  key={`story-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  &quot;{heroStories[currentSlide].story}&quot;
                </motion.p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
              >
                <motion.button
                  className="group bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(245, 158, 11, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Begin Your Journey</span>
                  <Play className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  className="group border-2 border-amber-400/60 text-amber-100 px-8 py-4 rounded-full font-semibold backdrop-blur-sm hover:bg-amber-400/20 hover:border-amber-400 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5 group-hover:fill-current transition-all duration-300" />
                  <span>Stories of Heart</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="bg-stone-800/60 backdrop-blur-sm text-amber-200 p-4 rounded-full hover:bg-stone-700/80 hover:text-amber-100 transition-all duration-300 border border-amber-500/30 mb-4"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="bg-stone-800/60 backdrop-blur-sm text-amber-200 p-4 rounded-full hover:bg-stone-700/80 hover:text-amber-100 transition-all duration-300 border border-amber-500/30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Story Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {heroStories.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrentSlide(index);
            }}
            className="group relative"
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-500 border-2 ${
                index === currentSlide
                  ? "bg-amber-500 border-amber-400 scale-125"
                  : "bg-stone-800/60 border-amber-500/40 hover:border-amber-400/80 hover:bg-stone-700/60"
              }`}
            />
            {index === currentSlide && (
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-stone-800/90 backdrop-blur-sm text-amber-100 text-xs px-2 py-1 rounded whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {heroStories[index].title}
              </motion.div>
            )}
          </button>
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="absolute bottom-12 left-8 z-20">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-300 ${
            isAutoPlay
              ? "bg-amber-600/20 text-amber-200 border-amber-500/30 hover:bg-amber-600/30"
              : "bg-stone-800/60 text-stone-300 border-stone-600/30 hover:bg-stone-700/60"
          }`}
        >
          {isAutoPlay ? "Pause Stories" : "Play Stories"}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 right-8 text-amber-200/60 flex flex-col items-center space-y-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="text-xs tracking-wider font-medium rotate-90 origin-center whitespace-nowrap">
          EXPLORE WISDOM
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-amber-400/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
