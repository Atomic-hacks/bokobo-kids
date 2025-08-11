"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "STORYQUEST", href: "/storyquest" },
    { label: "LIBRARY", href: "/library" },
    { label: "BOKOBOKIDS VILLAGE", href: "/village" },
    { label: "GAMES", href: "/games" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACTS", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-amber-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-red-600  flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1
                className={`font-bold text-xl ${scrolled ? "text-gray-900" : "text-white"} transition-colors duration-300`}
              >
                Bokobokids
              </h1>
              <p
                className={`text-sm ${scrolled ? "text-gray-600" : "text-white/80"} transition-colors duration-300`}
              >
                Village
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(({ label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                className={`text-sm font-medium transition-all duration-300 hover:text-amber-600 relative group ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-red-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Sign Up Button */}
          <motion.button
            className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 text-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            SIGN UP
          </motion.button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-0.5 bg-current mb-1"></div>
            <div className="w-6 h-0.5 bg-current mb-1"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
