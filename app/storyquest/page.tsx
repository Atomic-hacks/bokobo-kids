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
} from "lucide-react";

const StoryQuestLanding = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stories = [
    {
      title: "Mandla's Ocean Lesson",
      excerpt:
        "Jambo! greeted Mandla to an African Grey Parrot on the Zanzibar Coast...",
      lesson: "True wealth comes after understanding and patience",
    },
    {
      title: "Makena's Art Gift",
      excerpt:
        "Makena lived on the Serengeti Plains. Every morning, she woke up and said 'Sannu'...",
      lesson: "When you share what you love, your gift grows bigger",
    },
    {
      title: "Amara's Journey",
      excerpt: "Amara lived in a small village on the Zanzibar Coast...",
      lesson: "Seeing the world makes you love home even more",
    },
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Share Thoughts",
      description:
        "Children express what they're feeling or thinking in just 1-2 sentences.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Generate Story",
      description:
        "BokoboBot creates a personalized African story addressing their specific emotions.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Learn & Reflect",
      description:
        "Each story contains valuable lessons that help children process their feelings constructively.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 bg-gray-50 overflow-hidden">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/20924.png')",
            }}
          ></div>
          {/* Gradient overlay - fades from transparent at top to solid at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/70 to-gray-50"></div>
          {/* Additional subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gray-50/20"></div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute top-24 right-32 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-orange-500 opacity-30 z-10"></div>
        <div className="absolute bottom-32 left-24 w-6 h-6 rounded-full border border-emerald-500 opacity-40 z-10"></div>
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-50 z-10"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-xs font-medium tracking-wide border border-white/20">
                <Users className="w-3 h-3 mr-2" />A MAGICAL JOURNEY OF
                SOCIAL-EMOTIONAL LEARNING
              </div>

              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-light leading-[0.9] text-gray-900 tracking-tight">
                  Empower Children Through
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-normal block mt-2">
                    Personalized Stories
                  </span>
                </h1>

                <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                  BokoboBot StoryQuest transforms children&apos;s thoughts and
                  feelings into meaningful tales with valuable life lessons,
                  helping them navigate emotions and develop social skills.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">CREATE YOUR STORY</span>
                  <ArrowRight className="inline-block ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>

                <button className="group flex items-center px-12 py-4 border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-semibold tracking-wide hover:bg-white hover:border-gray-400 transition-all duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  WATCH DEMO
                </button>
              </div>

              <blockquote className="text-sm text-gray-600 italic font-light leading-relaxed max-w-md bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                &quot;If it takes a village to raise a child, it will take a
                Bokobokids village to raise the next generation of global
                citizens.&quot;
              </blockquote>
            </div>

            <div className="relative h-[600px]">
              {/* Main story card */}
              <div
                className="absolute top-16 right-0 w-[400px] bg-white/95 backdrop-blur-sm p-10 shadow-xl border border-white/30"
                style={{
                  borderRadius: "28px",
                  transform: "rotate(1deg)",
                }}
              >
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-gray-900">
                      Your Story Awaits
                    </h3>
                    <p className="text-gray-600 font-light">
                      Share your thoughts and watch magic happen
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements - more subtle */}
              <div className="absolute top-8 right-16 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-24 left-0 w-6 h-6 bg-emerald-500 rounded-full opacity-50"></div>
              <div className="absolute bottom-32 right-24 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
              How It Works
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mb-8"></div>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Three simple steps to transform your child&apos;s emotions into
              meaningful stories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="space-y-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="absolute inset-0 bg-orange-200 rounded-full opacity-20 scale-125 group-hover:scale-150 transition-transform duration-300"></div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-gray-900">
                      {feature.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-orange-400 group-hover:w-12 transition-all duration-300"></div>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-8 z-10">
                    <ChevronRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
              Featured Stories
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mb-8"></div>
            <p className="text-xl text-gray-500 font-light">
              Discover the magic of personalized African storytelling
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-6">
              {stories.map((story, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`p-8 cursor-pointer transition-all duration-300 border ${
                    activeStory === index
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl border-transparent"
                      : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ borderRadius: "20px" }}
                >
                  <div className="space-y-4">
                    <h3
                      className={`text-2xl font-light ${activeStory === index ? "text-white" : "text-gray-900"}`}
                    >
                      {story.title}
                    </h3>
                    <div
                      className={`w-8 h-0.5 ${activeStory === index ? "bg-orange-200" : "bg-orange-400"}`}
                    ></div>
                    <p
                      className={`leading-relaxed font-light ${activeStory === index ? "text-orange-100" : "text-gray-600"}`}
                    >
                      {story.excerpt}
                    </p>
                    <div
                      className={`text-sm font-medium italic ${activeStory === index ? "text-orange-200" : "text-orange-600"}`}
                    >
                      Lesson: {story.lesson}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative lg:sticky lg:top-8">
              <div
                className="bg-gradient-to-br from-orange-100 to-red-100 p-8 shadow-lg border border-gray-200"
                style={{ borderRadius: "24px" }}
              >
                <div
                  className="aspect-[4/3] bg-white flex items-center justify-center border border-gray-100"
                  style={{ borderRadius: "16px" }}
                >
                  <div className="text-center text-gray-400">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-60" />
                    <p className="text-lg font-light">
                      {stories[activeStory].title}
                    </p>
                    <p className="text-sm mt-2 font-light">
                      Story illustration would appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">READ FULL STORIES</span>
              <ArrowRight className="inline-block ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-24 right-32 w-4 h-4 bg-orange-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-emerald-500 rounded-full opacity-30"></div>

        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl font-light mb-8 tracking-tight">
              Perfect For
            </h2>
            <div className="w-12 h-0.5 bg-orange-400 mb-8"></div>
            <p className="text-xl text-gray-300 font-light">
              Supporting emotional development across different communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div
              className="group p-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Children</h3>
                  <div className="w-8 h-0.5 bg-orange-400 group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Develop emotional intelligence and social skills through
                    engaging stories that resonate with their experiences.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group p-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Educators</h3>
                  <div className="w-8 h-0.5 bg-emerald-400 group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Incorporate meaningful social-emotional learning into your
                    curriculum with personalized story experiences.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group p-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              style={{ borderRadius: "20px" }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Parents</h3>
                  <div className="w-8 h-0.5 bg-pink-400 group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Support your child&apos;s emotional development at home with
                    stories that address their specific feelings and concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-8 mb-16">
            <h2 className="text-5xl font-light text-gray-900 tracking-tight">
              Start Your Child&apos;s Emotional Learning Journey Today
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
              Join thousands of children, parents, and educators who are using
              BokoboBot StoryQuest to foster emotional intelligence through the
              magic of personalized storytelling.
            </p>
          </div>

          <div className="space-y-8">
            <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-6 rounded-full text-lg font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">CREATE YOUR OWN STORY</span>
              <ArrowRight className="inline-block ml-3 w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            <div className="flex items-center justify-center space-x-8 text-xs text-gray-500 font-medium">
              <span>Free to try</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>No credit card required</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>Stories in minutes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryQuestLanding;
