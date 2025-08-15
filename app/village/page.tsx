"use client";

import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  Play,
  Users,
  BookOpen,
  Heart,
  Star,
  ArrowRight,
  ShoppingCart,
  Globe,
  Compass,
} from "lucide-react";

const BokobokidsLanding = () => {
  const [activeBook, setActiveBook] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const books = [
    {
      title: "The Winds of Napata",
      author: "Dr. Kheftusa Akhiba Ankh",
      excerpt:
        "A poignant tale that weaves African history, culture, and identity into an immersive narrative designed to inspire and empower...",
      description: "Through the lens of a young boy, Mark, and his journey of self-discovery between modern-day Manchester and his ancestral African roots, the book merges dreams, folklore, and historical insights.",
      theme: "Identity & Heritage",
      image: "/winds-of-napata-placeholder.jpg"
    },
    {
      title: "The Lady of the Sea",
      excerpt:
        "An inspiring, epic adventure. Your child will dive into a world of magic and mystery...",
      description: "Embark on a magical journey beneath the waves where ancient wisdom meets modern courage in this captivating tale of discovery.",
      theme: "Adventure & Magic",
      image: "/lady-of-sea-placeholder.jpg"
    },
    {
      title: "The Legend of the First Rainbow",
      excerpt: "Where folklore meets science! Ignite your child's curiosity with this captivating tale...",
      description: "A timeless legend passed down through generations that beautifully combines traditional storytelling with scientific wonder.",
      theme: "Science & Folklore",
      image: "/first-rainbow-placeholder.jpg"
    },
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Ancient Wisdom",
      description:
        "Discover timeless African wisdom and cultural heritage through carefully crafted narratives that inspire and educate.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Village",
      description:
        "Join a welcoming community of families empowering children with tools to promote inner wellbeing and cultural pride.",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Global Citizens",
      description:
        "Raise the next generation of global citizens with stories that bridge cultures and foster understanding of our shared humanity.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-40 bg-gray-50 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/70 to-gray-50"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-16 sm:top-24 right-8 sm:right-32 w-0 h-0 border-l-[8px] sm:border-l-[10px] border-l-transparent border-r-[8px] sm:border-r-[10px] border-r-transparent border-b-[12px] sm:border-b-[16px] border-b-amber-500 opacity-30 z-10"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-8 sm:left-24 w-4 sm:w-6 h-4 sm:h-6 rounded-full border border-emerald-500 opacity-40 z-10"></div>
        <div className="absolute top-32 sm:top-40 left-1/4 w-2 h-2 bg-orange-400 rounded-full opacity-50 z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-xs font-medium tracking-wide border border-white/20">
                <Globe className="w-3 h-3 mr-2" />
                DISCOVER THE WORLD OF AFRICAN ANCIENT WISDOM
              </div>

              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[0.9] text-gray-900 tracking-tight">
                  Bokobokids
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-normal block mt-2">
                    Village
                  </span>
                </h1>

                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                  If it takes a village to raise a child, it will take a Bokobokids village to raise the next generation of global citizens.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">GO SHOPPING</span>
                  <ShoppingCart className="inline-block ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>

                <button className="group flex items-center px-8 sm:px-12 py-3 sm:py-4 border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-semibold tracking-wide hover:bg-white hover:border-gray-400 transition-all duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  WATCH DEMO
                </button>
              </div>

              <blockquote className="text-sm text-gray-600 italic font-light leading-relaxed max-w-md bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                &quot;Joining the Bokobokids movement means joining a welcoming community of families who desire to empower children with indestructible tools to promote inner well being.&quot;
              </blockquote>
            </div>

            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
              {/* Main featured book card */}
              <div
                className="absolute top-8 sm:top-16 right-0 w-[300px] sm:w-[350px] lg:w-[400px] bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-xl border border-white/30"
                style={{
                  borderRadius: "28px",
                  transform: "rotate(1deg)",
                }}
              >
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mx-auto flex items-center justify-center">
                    <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900">
                      Ancient Wisdom Awaits
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-light">
                      Discover stories that bridge cultures and time
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 sm:top-8 right-12 sm:right-16 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-16 sm:bottom-24 left-0 w-4 sm:w-6 h-4 sm:h-6 bg-emerald-500 rounded-full opacity-50"></div>
              <div className="absolute bottom-24 sm:bottom-32 right-16 sm:right-24 w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
              Our Mission
            </h2>
            <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed">
              Empowering children with ancient African wisdom and timeless stories that foster cultural pride and global citizenship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="space-y-6 sm:space-y-8">
                  <div className="relative">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="absolute inset-0 bg-amber-200 rounded-full opacity-20 scale-125 group-hover:scale-150 transition-transform duration-300"></div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900">
                      {feature.title}
                    </h3>
                    <div className="w-6 sm:w-8 h-0.5 bg-amber-400 group-hover:w-10 sm:group-hover:w-12 transition-all duration-300"></div>
                    <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-6 sm:top-8 -right-4 sm:-right-8 z-10">
                    <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
              Our Growing Catalog
            </h2>
            <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-500 font-light">
              Discover stories that bridge ancient wisdom with modern relevance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-4 sm:space-y-6">
              {books.map((book, index) => (
                <div
                  key={index}
                  onClick={() => setActiveBook(index)}
                  className={`p-6 sm:p-8 cursor-pointer transition-all duration-300 border ${
                    activeBook === index
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-xl border-transparent"
                      : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ borderRadius: "20px" }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3
                        className={`text-xl sm:text-2xl font-light ${activeBook === index ? "text-white" : "text-gray-900"}`}
                      >
                        {book.title}
                      </h3>
                      {book.author && (
                        <span className={`text-sm font-medium ${activeBook === index ? "text-amber-200" : "text-amber-600"}`}>
                          {book.author}
                        </span>
                      )}
                    </div>
                    <div
                      className={`w-6 sm:w-8 h-0.5 ${activeBook === index ? "bg-amber-200" : "bg-amber-400"}`}
                    ></div>
                    <p
                      className={`leading-relaxed font-light text-sm sm:text-base ${activeBook === index ? "text-amber-100" : "text-gray-600"}`}
                    >
                      {book.excerpt}
                    </p>
                    <div
                      className={`text-xs sm:text-sm font-medium ${activeBook === index ? "text-amber-200" : "text-amber-600"}`}
                    >
                      Theme: {book.theme}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative lg:sticky lg:top-8">
              <div
                className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 sm:p-8 shadow-lg border border-gray-200"
                style={{ borderRadius: "24px" }}
              >
                <div
                  className="aspect-[4/3] bg-white flex items-center justify-center border border-gray-100 relative overflow-hidden"
                  style={{ borderRadius: "16px" }}
                >
                  {/* Placeholder book cover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50"></div>
                  <div className="text-center text-gray-400 relative z-10 p-4">
                    <BookOpen className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-60" />
                    <p className="text-base sm:text-lg font-light">
                      {books[activeBook].title}
                    </p>
                    <p className="text-xs sm:text-sm mt-2 font-light">
                      Book cover illustration
                    </p>
                  </div>
                </div>
                
                {/* Book details */}
                <div className="mt-6 space-y-4">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                    {books[activeBook].description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-full text-sm font-semibold tracking-wide hover:shadow-lg transition-all duration-300">
                    Buy Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">EXPLORE ALL BOOKS</span>
              <ArrowRight className="inline-block ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Book Spotlight - The Winds of Napata */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
                  &quot;The Winds of Napata&quot;
                  <span className="block text-xl sm:text-2xl text-amber-600 mt-2">
                    and Its Modern Relevance
                  </span>
                </h2>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              </div>

              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed font-light text-sm sm:text-base">
                <p>
                  Dr. Kheftusa Akhiba Ankh&apos;s <em>The Winds of Napata</em> is a poignant tale that weaves African history, culture, and identity into an immersive narrative designed to inspire and empower.
                </p>
                
                <p>
                  Through the lens of a young boy, Mark, and his journey of self-discovery between modern-day Manchester and his ancestral African roots, the book merges dreams, folklore, and historical insights to illuminate the legacy of ancient African civilizations.
                </p>

                <p>
                  This book is a compelling tool for young boys and men, particularly those grappling with identity and purpose in a world that often overlooks their potential. By rekindling a connection to history, <em>The Winds of Napata</em> offers a pathway for personal growth and cultural pride.
                </p>
              </div>

              <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">BUY BOOK</span>
                <ArrowRight className="inline-block ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="relative">
              <div
                className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 sm:p-8 shadow-lg border border-gray-200"
                style={{ borderRadius: "24px" }}
              >
                <div
                  className="aspect-[3/4] bg-white flex flex-col items-center justify-center border border-gray-100 relative overflow-hidden"
                  style={{ borderRadius: "16px" }}
                >
                  {/* Book cover placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10"></div>
                  <div className="text-center text-gray-500 relative z-10 p-6">
                    <div className="w-16 sm:w-20 h-20 sm:h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                    </div>
                    <p className="text-lg sm:text-xl font-light text-gray-700 mb-2">
                      The Winds of Napata
                    </p>
                    <p className="text-sm text-amber-600 font-medium mb-3">
                      Dr. Kheftusa Akhiba Ankh
                    </p>
                    <p className="text-xs text-gray-500">
                      A journey of identity and heritage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-16 sm:top-24 right-16 sm:right-32 w-3 sm:w-4 h-3 sm:h-4 bg-amber-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-16 sm:left-32 w-2 h-2 bg-orange-500 rounded-full opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
              Join the Bokobokids Movement
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-amber-400 mx-auto"></div>
            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Join a welcoming community of families who desire to empower children with indestructible tools to promote inner wellbeing and raise the next generation of global citizens.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-20">
            <div
              className="group p-6 sm:p-8 lg:p-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-light">Children</h3>
                  <div className="w-6 sm:w-8 h-0.5 bg-amber-400 group-hover:w-10 sm:group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                    Discover your heritage and develop inner strength through stories that celebrate African wisdom and culture.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group p-6 sm:p-8 lg:p-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-light">Parents</h3>
                  <div className="w-6 sm:w-8 h-0.5 bg-emerald-400 group-hover:w-10 sm:group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                    Empower your children with tools for inner wellbeing while connecting them to their cultural roots and global citizenship.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group p-6 sm:p-8 lg:p-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-light">Educators</h3>
                  <div className="w-6 sm:w-8 h-0.5 bg-purple-400 group-hover:w-10 sm:group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                    Integrate meaningful cultural education into your curriculum with authentic stories that inspire and educate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
              Start Your Cultural Journey Today
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
              Join thousands of families who are using Bokobokids Village to connect their children with ancient African wisdom and raise confident global citizens.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">EXPLORE OUR BOOKS</span>
              <ArrowRight className="inline-block ml-3 w-4 sm:w-5 h-4 sm:h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs text-gray-500 font-medium">
              <span>Ancient wisdom reimagined</span>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>Cultural pride fostered</span>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>Global citizens raised</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BokobokidsLanding;