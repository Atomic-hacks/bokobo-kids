'use client'
import React, { useState, useRef, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "STORYQUEST", href: "/storyquest" },
  { 
    label: "LIBRARY", 
    href: "/library",
    dropdown: [
      { label: "READ", href: "/library/read" },
      { label: "LISTEN", href: "/library/listen" }
    ]
  },
  { label: "BOKOBOKIDS VILLAGE", href: "/village" },
  { label: "GAMES", href: "/games" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACTS", href: "/contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <nav className="bg-white relative z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo with decorative elements */}
            <div className="flex items-center relative">
              {/* Small decorative triangle */}
              <div className="absolute -top-2 -left-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-emerald-500 opacity-60 transition-all duration-300 ease-out hover:opacity-80 hover:scale-110"></div>
              
              <h1 className="text-3xl font-black text-gray-900 tracking-tight relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  BOKOBOKIDS
                </span>
                {/* Small dot decoration */}
                <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-pink-400 rounded-full opacity-70 transition-all duration-300 ease-out hover:opacity-90 hover:scale-125"></div>
              </h1>
            </div>

            {/* Desktop Navigation - Asymmetrical Layout */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-2">
                {navItems.slice(0, 3).map((item, index) => (
                  <div key={item.label} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`px-2 py-2 text-sm font-bold text-gray-700 hover:text-orange-600 transition-all duration-200 ease-out tracking-wide flex items-center gap-1 ${
                            index === 1 ? 'bg-gray-50 rounded-full' : ''
                          } ${activeDropdown === item.label ? 'text-orange-600' : ''}`}
                        >
                          {item.label}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ease-out ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 ease-out ${
                          activeDropdown === item.label 
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2'
                        }`}>
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-150 ease-out"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className={`px-4 py-2 text-sm font-bold text-gray-700 hover:text-orange-600 transition-all duration-200 ease-out tracking-wide ${
                          index === 1 ? 'bg-gray-50 rounded-full' : ''
                        }`}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
                
                {/* Decorative separator */}
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mx-6 transition-all duration-300 ease-out hover:scale-110"></div>
                
                {navItems.slice(3).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-2 py-2 text-sm font-bold text-gray-700 hover:text-orange-600 transition-all duration-200 ease-out tracking-wide"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA with decoration */}
            <div className="hidden lg:flex items-center relative">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-out relative overflow-hidden transform hover:scale-105">
                <span className="relative z-10">EXPLORE STORIES</span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 ease-out"></div>
              </button>
              {/* Floating dot */}
              <div className="absolute -top-1 -right-2 w-3 h-3 bg-emerald-400 rounded-full opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"></div>
            </div>

            {/* Unique Hamburger Menu */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-12 h-12 flex flex-col items-center justify-center space-y-1 group"
              >
                {/* Custom hamburger with African pattern inspiration */}
                <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-4 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                
                {/* Decorative circle that appears on hover */}
                <div className="absolute inset-0 border-2 border-emerald-500 rounded-full opacity-0 group-hover:opacity-30 scale-50 group-hover:scale-100 transition-all duration-300 ease-out"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-95 transition-opacity duration-500 ease-out"></div>
        
        {/* Decorative elements */}
        <div className={`absolute top-20 right-16 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-amber-500 opacity-20 transition-all duration-700 ease-out ${isMenuOpen ? 'rotate-0 scale-100' : 'rotate-45 scale-75'}`}></div>
        <div className={`absolute bottom-32 left-12 w-20 h-20 rounded-full border-4 border-emerald-500 opacity-20 transition-all duration-600 ease-out ${isMenuOpen ? 'scale-100' : 'scale-50'}`}></div>
        <div className={`absolute top-1/3 left-8 w-6 h-6 bg-pink-400 rounded-full opacity-30 transition-all duration-800 ease-out ${isMenuOpen ? 'translate-y-0' : 'translate-y-4'}`}></div>
        <div className={`absolute bottom-1/4 right-20 w-4 h-4 bg-orange-400 rounded-full opacity-40 transition-all duration-700 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-4'}`}></div>
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-8">
          {/* Logo */}
          <div className={`mb-16 transition-all duration-600 ease-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 tracking-tight">
              BOKOBOKIDS
            </h2>
          </div>
          
          {/* Menu Items with Staggered Animation */}
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`block text-2xl font-bold text-white hover:text-orange-400 transition-all duration-300 ease-out transform flex items-center gap-2 ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms'
                      }}
                    >
                      {item.label}
                      <svg 
                        className={`w-6 h-6 transition-transform duration-200 ease-out ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={`overflow-hidden transition-all duration-300 ease-out ${
                      activeDropdown === item.label ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pl-8 space-y-3">
                        {item.dropdown?.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-lg font-semibold text-orange-300 hover:text-orange-400 transition-all duration-200 ease-out"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block text-2xl font-bold text-white hover:text-orange-400 transition-all duration-300 ease-out transform ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className={`mt-16 transform transition-all duration-500 ease-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: isMenuOpen ? '600ms' : '0ms' }}>
            <button 
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-out transform hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              EXPLORE STORIES
            </button>
          </div>
          
          {/* Connecting Line Art */}
          <div className={`absolute top-1/4 left-1/4 w-32 h-32 pointer-events-none transition-all duration-1000 ease-out ${isMenuOpen ? 'rotate-0 opacity-20' : 'rotate-180 opacity-0'}`}>
            <svg width="128" height="128">
              <path 
                d="M20,20 Q60,40 100,80 Q80,100 40,120" 
                stroke="#F59E0B" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;