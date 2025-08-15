'use client'
import React from 'react';

const quickLinks = [
  "About Us",
  "Our Mission", 
  "Cultural Programs",
  "Educational Resources",
  "Community Events",
  "Parent Resources",
];

const programs = [
  "Storytelling Circles",
  "Cultural Workshops", 
  "Youth Mentorship",
  "Family Engagement",
  "Educational Content",
  "Book Discussions",
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-12 right-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[18px] border-b-emerald-500 opacity-30"></div>
      <div className="absolute bottom-24 left-16 w-8 h-8 rounded-full border-2 border-pink-400 opacity-40"></div>
      <div className="absolute top-32 left-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative">
              {/* Small decorative triangle */}
              <div className="absolute -top-2 -left-3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[9px] border-b-emerald-500 opacity-60"></div>
              
              <h3 className="text-2xl font-black text-gray-900 tracking-tight relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  BOKOBOKIDS
                </span>
                {/* Small dot decoration */}
                <div className="absolute -bottom-1 -right-2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70"></div>
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm max-w-sm">
              Nurturing young minds through culturally rich storytelling and educational experiences that celebrate African heritage and global perspectives.
            </p>
            
            {/* Social indicators with subtle style */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-xs text-gray-500 font-medium tracking-wide">CONNECT</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-xs text-gray-500 font-medium tracking-wide">EXPLORE</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <div className="relative mb-8">
              <h4 className="text-sm font-bold text-gray-900 tracking-wide mb-1">QUICK LINKS</h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
            </div>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Programs */}
          <div className="lg:col-span-3">
            <div className="relative mb-8">
              <h4 className="text-sm font-bold text-gray-900 tracking-wide mb-1">PROGRAMS</h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-pink-500"></div>
            </div>
            <ul className="space-y-4">
              {programs.map((program) => (
                <li key={program}>
                  <a href="#" className="text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 font-medium">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter/Contact */}
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <h4 className="text-sm font-bold text-gray-900 tracking-wide mb-1">STAY UPDATED</h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xs text-gray-500 leading-relaxed">
                Get the latest stories and cultural insights delivered to your inbox.
              </p>
              
              <div className="relative">
                <button className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-3 rounded-full text-xs font-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">JOIN OUR COMMUNITY</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                {/* Floating accent */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative separator */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-50 px-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full opacity-60"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full opacity-40"></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <p className="text-xs text-gray-500 font-medium">
              © 2025 BOKOBOKIDS. Crafted with care for young minds.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <a href="#" className="hover:text-gray-600 transition-colors duration-200">Privacy</a>
              <div className="w-px h-3 bg-gray-300"></div>
              <a href="#" className="hover:text-gray-600 transition-colors duration-200">Terms</a>
              <div className="w-px h-3 bg-gray-300"></div>
              <a href="#" className="hover:text-gray-600 transition-colors duration-200">Accessibility</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-xs text-gray-400">
            <span className="font-medium tracking-wide">Made in Nigeria</span>
            <div className="w-4 h-3 bg-gradient-to-b from-green-500 via-white to-green-500 rounded-sm border border-gray-200 opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Subtle connecting line art */}
      <div className="absolute bottom-0 right-0 w-64 h-32 pointer-events-none opacity-20">
        <svg width="256" height="128" className="absolute bottom-0 right-0">
          <path 
            d="M200,100 Q230,50 256,20" 
            stroke="#F59E0B" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="3,3"
          />
          <circle cx="240" cy="40" r="2" fill="#EC4899" opacity="0.6"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;