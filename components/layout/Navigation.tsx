"use client";
import React, { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavProps {
  className?: string;
}

const Nav: React.FC<NavProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { label: "HOME", href: "/" },
    { label: "STORYQUEST", href: "/storyquest" },
    { label: "LIBRARY", href: "/library" },
    { label: "BOKOBOKIDS VILLAGE", href: "/village" },
    { label: "GAMES", href: "/games" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACTS", href: "/contact" },
  ];

  const handleMobileMenuClick = (href: string): void => {
    setMobileMenuOpen(false);
    // Navigate to href here if using routing
  };

  const handleToggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignUpClick = (): void => {
    // Handle sign up logic here
    console.log('Sign up clicked');
  };

  const handleMobileSignUpClick = (): void => {
    setMobileMenuOpen(false);
    handleSignUpClick();
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-amber-100"
            : "bg-transparent"
        } ${className || ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 transition-transform duration-300 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">B</span>
              </div>
              <div>
                <h1
                  className={`font-bold text-lg sm:text-xl ${
                    scrolled ? "text-gray-900" : "text-white"
                  } transition-colors duration-300`}
                >
                  Bokobokids
                </h1>
                <p
                  className={`text-xs sm:text-sm ${
                    scrolled ? "text-gray-600" : "text-white/80"
                  } transition-colors duration-300`}
                >
                  Village
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map(({ label, href }: NavItem, index: number) => (
                <a
                  key={label}
                  href={href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-amber-600 relative group ${
                    scrolled ? "text-gray-700" : "text-white"
                  } transform hover:-translate-y-1`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                  }}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Sign Up Button */}
            <button
              className="hidden sm:block bg-gradient-to-r from-amber-600 to-red-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 text-xs sm:text-sm transform hover:scale-105 hover:shadow-amber-500/25"
              onClick={handleSignUpClick}
              type="button"
            >
              SIGN UP
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 mobile-menu-container relative z-60"
              onClick={handleToggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-2 left-0 w-6 h-0.5 transition-all duration-300 ${
                    scrolled ? "bg-gray-700" : "bg-white"
                  } ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-3.5 left-0 w-6 h-0.5 transition-all duration-300 ${
                    scrolled ? "bg-gray-700" : "bg-white"
                  } ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 transition-all duration-300 ${
                    scrolled ? "bg-gray-700" : "bg-white"
                  } ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        role="button"
        tabIndex={-1}
        aria-label="Close mobile menu"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-500 ease-in-out mobile-menu-container ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h2 className="font-bold text-lg text-gray-900">Bokobokids</h2>
                <p className="text-sm text-gray-600">Village</p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 py-6">
            <div className="space-y-1 px-6">
              {navItems.map(({ label, href }: NavItem, index: number) => (
                <a
                  key={label}
                  href={href}
                  className="block py-4 px-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-300 font-medium text-sm border-b border-gray-100 last:border-b-0 transform hover:translate-x-2"
                  onClick={() => handleMobileMenuClick(href)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: mobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{label}</span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Sign Up Button */}
          <div className="p-6 border-t border-gray-200">
            <button
              className="w-full bg-gradient-to-r from-amber-600 to-red-600 text-white py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 text-sm transform hover:scale-105"
              onClick={handleMobileSignUpClick}
              type="button"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Nav;