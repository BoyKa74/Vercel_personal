"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollY } = useScroll();
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 10]);
  
  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

    // Listen for theme changes
    const handleThemeChange = () => {
      const theme = localStorage.getItem('theme');
      setIsDarkMode(theme === 'dark');
    };

    // Check periodically for theme changes
    const interval = setInterval(handleThemeChange, 100);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      const sections = ["home", "about", "skills", "projects", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0.0)",
      backdropFilter: "blur(0px)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: {
      x: -20,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-gray-900/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.button
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-2xl font-bold bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 via-purple-500 to-indigo-600' 
                : 'from-blue-600 via-purple-600 to-indigo-700'
            } bg-clip-text text-transparent`}
          >
            MVAV
          </motion.button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href
                    ? isDarkMode 
                      ? 'text-blue-400' 
                      : 'text-blue-600'
                    : isDarkMode 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isDarkMode 
                ? 'text-gray-300 hover:text-blue-400' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={`md:hidden overflow-hidden border-t ${
              isDarkMode 
                ? 'bg-gray-900/95 border-white/10' 
                : 'bg-white/95 border-gray-200'
            } backdrop-blur-md`}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    x: isMenuOpen ? 0 : -20 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: isMenuOpen ? index * 0.05 : 0 
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.href
                      ? isDarkMode 
                        ? 'text-blue-400 bg-blue-400/10' 
                        : 'text-blue-600 bg-blue-600/10'
                      : isDarkMode 
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-white/5' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 