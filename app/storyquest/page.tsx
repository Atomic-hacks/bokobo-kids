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
  Menu,
  X,
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
      image: "/api/placeholder/400/300",
    },
    {
      title: "Makena's Art Gift",
      excerpt:
        "Makena lived on the Serengeti Plains. Every morning, she woke up and said 'Sannu'...",
      lesson: "When you share what you love, your gift grows bigger",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Amara's Journey",
      excerpt: "Amara lived in a small village on the Zanzibar Coast...",
      lesson: "Seeing the world makes you love home even more",
      image: "/api/placeholder/400/300",
    },
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Share Thoughts",
      description:
        "Children express what they're feeling or thinking in just 1-2 sentences.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Generate Story",
      description:
        "BokoboBot creates a personalized African story addressing their specific emotions.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Learn & Reflect",
      description:
        "Each story contains valuable lessons that help children process their feelings constructively.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-x-hidden">
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #B45309 0px, transparent 2px, transparent 20px, #B45309 22px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />A magical journey of
                social-emotional learning
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                Empower Children Through
                <span className="text-orange-600 block">
                  Personalized Stories
                </span>
              </h1>

              <p className="text-xl text-amber-700 leading-relaxed">
                BokoboBot StoryQuest transforms children's thoughts and feelings
                into meaningful tales with valuable life lessons, helping them
                navigate emotions and develop social skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Create Your Story
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group flex items-center px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              <div className="text-sm text-amber-600 italic">
                "If it takes a village to raise a child, it will take a
                Bokobokids village to raise the next generation of global
                citizens."
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-amber-300  p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-white  shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <BookOpen className="w-24 h-24 text-orange-500 mx-auto" />
                    <h3 className="text-2xl font-bold text-amber-900">
                      Your Story Awaits
                    </h3>
                    <p className="text-amber-700">
                      Share your thoughts and watch magic happen
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400 rounded-full animate-pulse opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Three simple steps to transform your child's emotions into
              meaningful stories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full mx-auto flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-orange-200 rounded-full -z-10 group-hover:scale-125 transition-transform duration-300 opacity-30"></div>
                </div>

                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-amber-700 leading-relaxed">
                  {feature.description}
                </p>

                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section id="stories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-amber-700">
              Discover the magic of personalized African storytelling
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {stories.map((story, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`p-6  cursor-pointer transition-all duration-300 ${
                    activeStory === index
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-2xl transform scale-105"
                      : "bg-white hover:bg-orange-50 border border-orange-200"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-3 ${activeStory === index ? "text-white" : "text-amber-900"}`}
                  >
                    {story.title}
                  </h3>
                  <p
                    className={`leading-relaxed mb-4 ${activeStory === index ? "text-orange-100" : "text-amber-700"}`}
                  >
                    {story.excerpt}
                  </p>
                  <div
                    className={`text-sm font-medium italic ${activeStory === index ? "text-orange-200" : "text-orange-600"}`}
                  >
                    Lesson: {story.lesson}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-200 to-amber-300  p-4">
                <div className="w-full h-full bg-gray-200  flex items-center justify-center overflow-hidden">
                  <div className="text-center text-gray-500">
                    <BookOpen className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">
                      {stories[activeStory].title}
                    </p>
                    <p className="text-sm mt-2">
                      Story illustration would appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Read Full Stories
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section
        id="for-you"
        className="py-20 bg-gradient-to-r from-amber-900 to-orange-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-orange-200">
              Supporting emotional development across different communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm  hover:bg-white/20 transition-all duration-300">
              <Heart className="w-16 h-16 mx-auto mb-6 text-orange-300" />
              <h3 className="text-2xl font-bold mb-4">Children</h3>
              <p className="text-orange-100 leading-relaxed">
                Develop emotional intelligence and social skills through
                engaging stories that resonate with their experiences.
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm  hover:bg-white/20 transition-all duration-300">
              <Users className="w-16 h-16 mx-auto mb-6 text-orange-300" />
              <h3 className="text-2xl font-bold mb-4">Educators</h3>
              <p className="text-orange-100 leading-relaxed">
                Incorporate meaningful social-emotional learning into your
                curriculum with personalized story experiences.
              </p>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm  hover:bg-white/20 transition-all duration-300">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-orange-300" />
              <h3 className="text-2xl font-bold mb-4">Parents</h3>
              <p className="text-orange-100 leading-relaxed">
                Support your child's emotional development at home with stories
                that address their specific feelings and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Start Your Child's Emotional Learning Journey Today
          </h2>
          <p className="text-xl text-amber-700 mb-8 leading-relaxed">
            Join thousands of children, parents, and educators who are using
            BokoboBot StoryQuest to foster emotional intelligence through the
            magic of personalized storytelling.
          </p>

          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-orange-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Create Your Own Story
            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>

          <p className="text-sm text-amber-600 mt-6">
            Free to try • No credit card required • Stories in minutes
          </p>
        </div>
      </section>
    </div>
  );
};

export default StoryQuestLanding;
