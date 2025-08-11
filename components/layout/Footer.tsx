"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

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

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Get updates on cultural events, new resources, and community
                stories delivered to your inbox.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                    required
                  />
                  {isSubscribed && (
                    <motion.div
                      className="absolute inset-0 bg-green-600 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <span className="text-white font-semibold">
                        ✓ Subscribed!
                      </span>
                    </motion.div>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubscribed}
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-red-600  flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-white">Bokobokids</h1>
                <p className="text-gray-400 text-sm">Village</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering the next generation with African ancient wisdom and
              cultural heritage. Building global citizens rooted in their
              identity and values.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-amber-500" />
                <span>info@bokobokids.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-amber-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Global Community</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={program}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {program}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Global Community</h3>
            <div className="space-y-6">
              {[
                { number: "10k+", label: "Families Connected" },
                { number: "50+", label: "Cultural Stories" },
                { number: "25+", label: "Countries Reached" },
                { number: "100%", label: "Love & Wisdom" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600/20 to-red-600/20 2025 flex items-center justify-center border border-amber-600/30">
                    <span className="text-amber-500 font-bold text-sm">
                      {stat.number}
                    </span>
                  </div>
                  <span className="text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span>© 2025 Bokobokids Village. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </motion.div>
              <span>for global citizens.</span>
            </motion.div>

            <motion.div
              className="flex space-x-8 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {link}
                  </motion.a>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;
