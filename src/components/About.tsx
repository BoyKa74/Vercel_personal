"use client"

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Briefcase, Code, Coffee } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Theme detection
  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme');
      setIsDarkMode(theme === 'dark');
    };
    
    checkTheme();
    const interval = setInterval(checkTheme, 100);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  } as const;

  const experiences = [
    {
      icon: GraduationCap,
      title: 'Education',
      subtitle: 'Bachelor of Information Technology',
      description: 'Graduated with excellent grades, specialized in Software Development',
      year: '2020-2024',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      subtitle: 'Full Stack Developer',
      description: '2+ years of experience developing modern web applications',
      year: '2022-Present',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Code,
      title: 'Projects',
      subtitle: '20+ Completed Projects',
      description: 'From personal websites to large-scale enterprise applications',
      year: 'Portfolio',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Coffee,
      title: 'Passion',
      subtitle: 'Technology Enthusiast',
      description: 'Always learning and staying updated with the latest trends',
      year: 'Always',
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-20 transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gray-900' 
          : 'bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500'
      } relative overflow-hidden`}
    >
      {/* Ocean effects for light mode */}
      {!isDarkMode && (
        <>
          {/* Underwater light beams */}
          <div className="absolute top-0 left-1/6 w-1 h-full bg-gradient-to-b from-yellow-200/20 to-transparent transform rotate-12" />
          <div className="absolute top-0 left-2/3 w-2 h-full bg-gradient-to-b from-yellow-100/30 to-transparent transform -rotate-8" />
          
          {/* Floating particles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-2/3 right-1/4 w-2 h-2 bg-white/40 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-white'
            }`}
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`h-1 mx-auto rounded-full ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'bg-gradient-to-r from-yellow-200 to-yellow-400'
            }`}
            style={{ maxWidth: '100px' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.p 
              className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-white/90'
              }`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Hello! I'm Mai Vủ, a passionate Full Stack Developer with a love for creating 
              beautiful and functional web experiences. I specialize in modern web technologies 
              and enjoy bringing creative designs to life through code.
            </motion.p>
            
            <motion.p 
              className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-white/90'
              }`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              My journey in web development started with a curiosity about how websites work, 
              and it has evolved into a passion for crafting user-centered digital solutions. 
              I believe that great design and functionality should go hand in hand.
            </motion.p>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="space-y-4"
            >
              <h3 className={`text-xl font-semibold ${
                isDarkMode ? 'text-blue-400' : 'text-yellow-200'
              }`}>
                What I Love:
              </h3>
              <ul className={`space-y-2 ${
                isDarkMode ? 'text-gray-300' : 'text-white/90'
              }`}>
                <motion.li 
                  className="flex items-center space-x-3"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  <span className={`w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-blue-400' : 'bg-yellow-200'
                  }`}></span>
                  <span>Creating responsive and interactive user interfaces</span>
                </motion.li>
                <motion.li 
                  className="flex items-center space-x-3"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  <span className={`w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-blue-400' : 'bg-yellow-200'
                  }`}></span>
                  <span>Learning new technologies and best practices</span>
                </motion.li>
                <motion.li 
                  className="flex items-center space-x-3"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  <span className={`w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-blue-400' : 'bg-yellow-200'
                  }`}></span>
                  <span>Collaborating with teams to solve complex problems</span>
                </motion.li>
                <motion.li 
                  className="flex items-center space-x-3"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 2.0 }}
                >
                  <span className={`w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-blue-400' : 'bg-yellow-200'
                  }`}></span>
                  <span>Optimizing performance and user experience</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image & Stats */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* Profile Image Container */}
            <motion.div 
              className="relative mx-auto w-80 h-80 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative rings */}
              <motion.div
                className={`absolute inset-0 rounded-full border-2 ${
                  isDarkMode ? 'border-blue-400/20' : 'border-yellow-200/30'
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className={`absolute inset-4 rounded-full border ${
                  isDarkMode ? 'border-purple-400/20' : 'border-yellow-300/20'
                }`}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile Image */}
              <div className={`absolute inset-8 rounded-full p-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600' 
                  : 'bg-gradient-to-br from-yellow-200 via-orange-300 to-pink-400'
              }`}>
                <img
                  src="/avatar-placeholder.jpg.jpg"
                  alt="Mai Vủ"
                  className="w-full h-full rounded-full object-cover border-4 border-white/20"
                />
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div 
                className={`p-4 rounded-xl text-center ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-blue-400' : 'text-yellow-200'
                }`}>2+</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-white/90'
                }`}>Years Experience</p>
              </motion.div>
              
              <motion.div 
                className={`p-4 rounded-xl text-center ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-purple-400' : 'text-orange-200'
                }`}>20+</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-white/90'
                }`}>Projects Completed</p>
              </motion.div>
              
              <motion.div 
                className={`p-4 rounded-xl text-center ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-indigo-400' : 'text-pink-200'
                }`}>15+</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-white/90'
                }`}>Technologies</p>
              </motion.div>
              
              <motion.div 
                className={`p-4 rounded-xl text-center ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-cyan-400' : 'text-yellow-300'
                }`}>100%</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-white/90'
                }`}>Commitment</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 