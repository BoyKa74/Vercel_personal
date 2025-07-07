"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sun, Moon, Download } from 'lucide-react';

// Fish component for day theme
function Fish({ onClick }: { onClick: (x: number, y: number) => void }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [isGlowing, setIsGlowing] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  // Random movement
  useEffect(() => {
    const moveRandomly = () => {
      const newX = Math.random() * 70 + 15; // 15% to 85% (avoid edges)
      const newY = Math.random() * 50 + 25; // 25% to 75% (avoid edges)
      setTargetPosition({ x: newX, y: newY });
      console.log(`🐠 Fish swimming to: ${newX.toFixed(1)}%, ${newY.toFixed(1)}%`);
    };

    moveRandomly();
    const interval = setInterval(moveRandomly, 4000); // Slower for fish
    return () => clearInterval(interval);
  }, []);

  // Smooth movement to target
  useEffect(() => {
    const moveToTarget = () => {
      setPosition(prev => {
        const newPos = {
          x: prev.x + (targetPosition.x - prev.x) * 0.03, // Slower movement for fish
          y: prev.y + (targetPosition.y - prev.y) * 0.03,
        };
        return newPos;
      });
    };

    const interval = setInterval(moveToTarget, 50); // Smoother movement
    return () => clearInterval(interval);
  }, [targetPosition]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('🐠 Fish clicked!');
    
    setIsGlowing(true);
    setShowDebug(true);
    
    // Immediately move to a new random position when clicked
    const newX = Math.random() * 70 + 15;
    const newY = Math.random() * 50 + 25;
    setTargetPosition({ x: newX, y: newY });
    
    console.log(`🌊 Fish swimming to: ${newX.toFixed(1)}%, ${newY.toFixed(1)}%`);
    
    onClick(newX, newY);
    
    setTimeout(() => {
      setIsGlowing(false);
      setShowDebug(false);
    }, 2000);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('.no-spaceship')) {
      console.log('🚫 Click blocked - interactive element detected');
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const boundedX = Math.max(15, Math.min(85, x));
    const boundedY = Math.max(25, Math.min(75, y));
    
    setTargetPosition({ x: boundedX, y: boundedY });
    setIsGlowing(true);
    setShowDebug(true);
    
    console.log(`🌊 Background clicked! Fish swimming to: ${boundedX.toFixed(1)}%, ${boundedY.toFixed(1)}%`);
    
    onClick(boundedX, boundedY);
    
    setTimeout(() => {
      setIsGlowing(false);
      setShowDebug(false);
    }, 2000);
  };

  return (
    <>
      {/* Invisible click area covering the entire hero section - Lower z-index */}
      <div
        className="absolute inset-0 z-5"
        onClick={handleBackgroundClick}
        style={{ cursor: 'crosshair' }}
      />
      
      {/* Fish */}
      <motion.div
        className={`absolute z-20 cursor-pointer ${
          isGlowing ? 'filter drop-shadow-[0_0_30px_#3b82f6]' : ''
        }`}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleClick}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Fish SVG */}
        <div className={`w-12 h-12 ${isGlowing ? 'text-blue-500' : 'text-blue-600'} transition-all duration-500`}>
          <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="1">
            {/* Fish body */}
            <ellipse cx="45" cy="50" rx="25" ry="15" fill="currentColor" opacity="0.8"/>
            {/* Fish tail */}
            <path d="M15 50 L5 35 L10 50 L5 65 Z" fill="currentColor" opacity="0.7"/>
            {/* Fish eye */}
            <circle cx="55" cy="45" r="3" fill="white"/>
            <circle cx="56" cy="44" r="1.5" fill="black"/>
            {/* Fish fins */}
            <path d="M35 35 L25 30 L35 40" fill="currentColor" opacity="0.6"/>
            <path d="M35 65 L25 70 L35 60" fill="currentColor" opacity="0.6"/>
            {/* Bubbles */}
            <circle cx="75" cy="35" r="2" fill="currentColor" opacity="0.3"/>
            <circle cx="80" cy="30" r="1.5" fill="currentColor" opacity="0.4"/>
            <circle cx="85" cy="25" r="1" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
        
        {/* Glowing ring when active */}
        {isGlowing && (
          <motion.div
            className="absolute inset-0 border-2 border-blue-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        )}
        
        {/* Debug info */}
        {showDebug && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -30 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
          >
            🐠 Swimming!
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

// Spaceship component for night theme
function Spaceship({ onClick }: { onClick: (x: number, y: number) => void }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [isGlowing, setIsGlowing] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  // Random movement
  useEffect(() => {
    const moveRandomly = () => {
      const newX = Math.random() * 70 + 15; // 15% to 85% (avoid edges)
      const newY = Math.random() * 50 + 25; // 25% to 75% (avoid edges)
      setTargetPosition({ x: newX, y: newY });
      console.log(`🚀 Spaceship moving to: ${newX.toFixed(1)}%, ${newY.toFixed(1)}%`);
    };

    // Start with an immediate move
    moveRandomly();
    const interval = setInterval(moveRandomly, 3000);
    return () => clearInterval(interval);
  }, []);

  // Smooth movement to target
  useEffect(() => {
    const moveToTarget = () => {
      setPosition(prev => {
        const newPos = {
          x: prev.x + (targetPosition.x - prev.x) * 0.05, // Faster movement
          y: prev.y + (targetPosition.y - prev.y) * 0.05,
        };
        return newPos;
      });
    };

    const interval = setInterval(moveToTarget, 30); // Smoother movement
    return () => clearInterval(interval);
  }, [targetPosition]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('🚀 Spaceship clicked!');
    
    setIsGlowing(true);
    setShowDebug(true);
    
    // Immediately move to a new random position when clicked
    const newX = Math.random() * 70 + 15;
    const newY = Math.random() * 50 + 25;
    setTargetPosition({ x: newX, y: newY });
    
    console.log(`🎯 Spaceship flying to: ${newX.toFixed(1)}%, ${newY.toFixed(1)}%`);
    
    onClick(newX, newY);
    
    setTimeout(() => {
      setIsGlowing(false);
      setShowDebug(false);
    }, 2000);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Check if click is on a button or interactive element
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('.no-spaceship')) {
      console.log('🚫 Click blocked - interactive element detected');
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Ensure click is within bounds
    const boundedX = Math.max(15, Math.min(85, x));
    const boundedY = Math.max(25, Math.min(75, y));
    
    setTargetPosition({ x: boundedX, y: boundedY });
    setIsGlowing(true);
    setShowDebug(true);
    
    console.log(`🎯 Background clicked! Flying to: ${boundedX.toFixed(1)}%, ${boundedY.toFixed(1)}%`);
    
    onClick(boundedX, boundedY);
    
    setTimeout(() => {
      setIsGlowing(false);
      setShowDebug(false);
    }, 2000);
  };

  return (
    <>
      {/* Invisible click area covering the entire hero section - Lower z-index */}
      <div
        className="absolute inset-0 z-5"
        onClick={handleBackgroundClick}
        style={{ cursor: 'crosshair' }}
      />
      
      {/* Spaceship */}
      <motion.div
        className={`absolute z-20 cursor-pointer ${
          isGlowing ? 'filter drop-shadow-[0_0_30px_#60a5fa]' : ''
        }`}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)', // Center the spaceship
        }}
        onClick={handleClick}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {/* Spaceship SVG - Larger and more visible */}
        <div className={`w-12 h-12 ${isGlowing ? 'text-blue-300' : 'text-blue-400'} transition-all duration-500`}>
          <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="2">
            <path d="M50 5 L75 35 L95 30 L60 50 L95 70 L75 65 L50 95 L25 65 L5 70 L40 50 L5 30 L25 35 Z"/>
            <circle cx="50" cy="50" r="8" fill="white" opacity="0.8" />
          </svg>
        </div>
        
        {/* Glowing ring when active */}
        {isGlowing && (
          <motion.div
            className="absolute inset-0 border-2 border-blue-400 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        )}
        
        {/* Debug info */}
        {showDebug && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -30 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
          >
            🚀 Flying!
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const fullText = 'Passionate Frontend Developer';
  
  // Mouse position for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  // Client-side only rendering
  useEffect(() => {
    setIsMounted(true);
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      // Update document class for global theming
      document.documentElement.classList.toggle('dark', isDarkMode);
      document.documentElement.classList.toggle('light', !isDarkMode);
    }
  }, [isDarkMode, isMounted]);
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn", 
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:maivananhvu.dev@gmail.com",
      label: "Email",
      color: "hover:text-green-400"
    }
  ];

  const handleCreatureLand = (x: number, y: number) => {
    const creatureType = isDarkMode ? 'Spaceship' : 'Fish';
    console.log(`✨ ${creatureType} landed at: ${x.toFixed(1)}%, ${y.toFixed(1)}%`);
    
    // Create multiple sparkle effects
    const effectColor = isDarkMode ? 'bg-blue-400' : 'bg-blue-500';
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = `absolute w-3 h-3 ${effectColor} rounded-full animate-ping pointer-events-none z-40`;
        sparkle.style.left = `${x + (Math.random() - 0.5) * 5}%`;
        sparkle.style.top = `${y + (Math.random() - 0.5) * 5}%`;
        sparkle.style.transform = 'translate(-50%, -50%)';
        document.querySelector('.hero-container')?.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
      }, i * 200);
    }
  };

  // Navigation functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  if (!isMounted) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gray-900' 
          : 'bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600'
      } relative overflow-hidden`}
      onMouseMove={handleMouseMove}
    >
      {/* Theme Toggle Button - High z-index to stay on top */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed top-20 right-4 z-50 p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800/80 border-white/10 text-yellow-400 hover:bg-gray-700/80' 
            : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white/90'
        }`}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      {/* Dark mode effects - Shooting stars/meteors */}
      {isDarkMode && (
        <>
          {/* Shooting stars/meteors */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-20 bg-gradient-to-b from-white via-blue-300 to-transparent opacity-70"
              style={{
                left: `${20 + i * 20}%`,
                top: '-10%',
                transform: 'rotate(45deg)',
                filter: 'blur(0.5px)',
              }}
              animate={{
                y: ['0vh', '120vh'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 2 + Math.random() * 3,
                ease: 'linear',
              }}
            />
          ))}
          
          {/* Additional meteors with different angles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`meteor-${i}`}
              className="absolute w-0.5 h-16 bg-gradient-to-b from-purple-300 via-blue-400 to-transparent opacity-60"
              style={{
                left: `${10 + i * 30}%`,
                top: '-5%',
                transform: 'rotate(60deg)',
                filter: 'blur(0.3px)',
              }}
              animate={{
                y: ['0vh', '110vh'],
                x: ['0vw', '20vw'],
                opacity: [0, 0.8, 0.8, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 1.5,
                repeat: Infinity,
                delay: i * 3 + Math.random() * 4,
                ease: 'linear',
              }}
            />
          ))}
        </>
      )}

      {/* Ocean effects for light mode */}
      {!isDarkMode && (
        <>
          {/* Sunlight rays from top */}
          <div className="absolute top-0 left-1/4 w-3 h-1/2 bg-gradient-to-b from-yellow-200/40 to-transparent transform rotate-12" />
          <div className="absolute top-0 left-1/2 w-2 h-1/3 bg-gradient-to-b from-yellow-100/50 to-transparent transform -rotate-6" />
          <div className="absolute top-0 right-1/3 w-4 h-2/3 bg-gradient-to-b from-yellow-200/30 to-transparent transform rotate-8" />
          
          {/* Surface waves effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cyan-200/30 to-transparent"
            animate={{
              background: [
                'linear-gradient(to bottom, rgba(165, 243, 252, 0.3) 0%, transparent 100%)',
                'linear-gradient(to bottom, rgba(125, 211, 252, 0.4) 0%, transparent 100%)',
                'linear-gradient(to bottom, rgba(165, 243, 252, 0.3) 0%, transparent 100%)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Floating sea particles */}
          <motion.div
            className="absolute top-1/4 left-1/6 w-3 h-3 bg-white/40 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-1/5 w-2 h-2 bg-cyan-100/50 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-2/3 left-1/8 w-4 h-4 bg-blue-200/30 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-lg mb-4 ${
                isDarkMode ? 'text-blue-400' : 'text-yellow-200'
              } font-medium`}
            >
              Hello, I'm
            </motion.div>

            {/* Name with enhanced styling */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`text-5xl md:text-7xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-white'
              }`}
            >
              <span className={`inline-block ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-yellow-200 via-orange-300 to-yellow-400 bg-clip-text text-transparent'
              }`}>
                Mai Vủ
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className={`text-2xl md:text-3xl font-semibold mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-white/90'
              }`}
            >
              Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className={`text-lg leading-relaxed mb-8 max-w-xl ${
                isDarkMode ? 'text-gray-400' : 'text-white/80'
              }`}
            >
              Passionate about creating exceptional digital experiences with modern technologies. 
              Specializing in React, Node.js, and building scalable web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600'
                } text-white transition-all duration-300 shadow-lg no-spaceship z-30`}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View My Work</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 ${
                  isDarkMode 
                    ? 'border border-white/20 text-white hover:bg-white/10' 
                    : 'border border-white/40 text-white hover:bg-white/20'
                } transition-all duration-300 no-spaceship z-30`}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Mai_Vu_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex space-x-6 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10' 
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  } transition-all duration-300 ${social.color} no-spaceship z-30`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2"
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
              }}
              className="relative"
            >
              {/* Rotating rings with better theme styling */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-0 w-80 h-80 rounded-full border-2 ${
                  isDarkMode 
                    ? 'border-blue-400/30' 
                    : 'border-yellow-200/40'
                } border-dashed`}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-4 w-72 h-72 rounded-full border ${
                  isDarkMode 
                    ? 'border-purple-400/20' 
                    : 'border-orange-300/30'
                } border-dotted`}
              />

              {/* Floating orbs with enhanced effects */}
              {[...Array(6)].map((_, i) => {
                const positions = [
                  { top: '10%', left: '20%' },
                  { top: '30%', right: '15%' },
                  { bottom: '25%', left: '10%' },
                  { bottom: '15%', right: '25%' },
                  { top: '60%', left: '5%' },
                  { top: '20%', right: '35%' }
                ];
                
                return (
                  <motion.div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full ${
                      isDarkMode 
                        ? 'bg-blue-400/60' 
                        : i % 2 === 0 ? 'bg-white/60' : 'bg-yellow-200/60'
                    } shadow-lg`}
                    style={positions[i]}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                );
              })}

              {/* Avatar with real image like About page */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mx-auto w-64 h-64"
              >
                {/* Profile Image Container với gradient border */}
                <div className={`absolute inset-0 rounded-full p-1 ${
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
                
                {/* Overlay effect */}
                <div className={`absolute inset-0 rounded-full ${
                  isDarkMode 
                    ? 'bg-gradient-to-t from-blue-900/20 to-transparent' 
                    : 'bg-gradient-to-t from-blue-800/20 to-transparent'
                }`} />
              </motion.div>

              {/* Enhanced glow effect */}
              <div className={`absolute inset-8 w-64 h-64 mx-auto rounded-full ${
                isDarkMode 
                  ? 'bg-blue-500/10' 
                  : 'bg-cyan-300/20'
              } blur-xl -z-10`} />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className={`text-sm mb-2 ${
            isDarkMode ? 'text-gray-400' : 'text-white/70'
          }`}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`${
              isDarkMode ? 'text-blue-400' : 'text-white'
            } cursor-pointer no-spaceship z-30`}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 