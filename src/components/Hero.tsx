"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sun, Moon } from 'lucide-react';

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
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
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

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden px-4 hero-container transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100'
    }`}>
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

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDarkMode ? (
          // Dark mode: Space theme
          <>
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
              animate={{
                y: [0, 20, 0],
                x: [0, -15, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"
              animate={{
                y: [0, -15, 0],
                x: [0, 20, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </>
        ) : (
          // Light mode: Ocean theme
          <>
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-60 right-16 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl"
              animate={{
                y: [0, 30, 0],
                x: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-32 left-1/3 w-28 h-28 bg-teal-200/25 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 25, 0],
              }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            {/* Ocean waves effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-200/20 to-transparent"
              animate={{
                x: [-20, 20, -20],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </>
        )}
      </div>

      {/* Interactive creature - only render client side */}
      {isMounted && (
        isDarkMode ? (
          <Spaceship onClick={handleCreatureLand} />
        ) : (
          <Fish onClick={handleCreatureLand} />
        )
      )}

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left no-spaceship"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className={`bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-400 via-purple-500 to-indigo-600' 
                  : 'from-blue-600 via-purple-600 to-indigo-700'
              } bg-clip-text text-transparent`}>
                Mai Vũ
              </span>
            </motion.h1>

            {/* Typing effect subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-xl md:text-2xl h-8 mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}
              >
                |
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`text-lg md:text-xl leading-relaxed mb-8 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I create modern and interactive web experiences, 
              combining beautiful design with optimal performance. 
              Let's build something amazing together!
            </motion.p>

            {/* Action buttons - Higher z-index */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 relative z-30"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View Portfolio
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm ${
                  isDarkMode 
                    ? 'border-blue-400/50 text-blue-400 hover:bg-blue-400/10'
                    : 'border-blue-600/50 text-blue-600 hover:bg-blue-600/10'
                }`}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social links - Higher z-index */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-6 relative z-30"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 backdrop-blur-sm border rounded-full transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-gray-300 hover:text-blue-400 hover:border-blue-400/50'
                      : 'bg-white/50 border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600/50'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center no-spaceship"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Main avatar container */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Rotating rings */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 ${
                    isDarkMode ? 'border-blue-400/30' : 'border-blue-500/40'
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className={`absolute inset-4 rounded-full border ${
                    isDarkMode ? 'border-purple-400/20' : 'border-purple-500/30'
                  }`}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Avatar with gradient border */}
                <motion.div
                  className={`absolute inset-8 rounded-full p-2 shadow-2xl ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600'
                      : 'bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/avatar-placeholder.jpg.jpg"
                    alt="Mai Vũ"
                    className={`w-full h-full rounded-full object-cover border-4 ${
                      isDarkMode ? 'border-white/20' : 'border-white/40'
                    }`}
                  />
                </motion.div>

                {/* Simple floating orbs without Math calculations */}
                {isMounted && (
                  <>
                    {[
                      { top: '20%', left: '90%', color: isDarkMode ? 'bg-blue-400/60' : 'bg-blue-500/50', delay: 0 },
                      { top: '80%', left: '85%', color: isDarkMode ? 'bg-purple-400/60' : 'bg-purple-500/50', delay: 0.3 },
                      { top: '50%', left: '5%', color: isDarkMode ? 'bg-indigo-400/60' : 'bg-indigo-500/50', delay: 0.6 },
                      { top: '10%', left: '15%', color: isDarkMode ? 'bg-cyan-400/60' : 'bg-cyan-500/50', delay: 0.9 },
                      { top: '70%', left: '20%', color: isDarkMode ? 'bg-pink-400/60' : 'bg-pink-500/50', delay: 1.2 },
                      { top: '30%', left: '80%', color: isDarkMode ? 'bg-green-400/60' : 'bg-green-500/50', delay: 1.5 },
                    ].map((orb, index) => (
                      <motion.div
                        key={index}
                        className={`absolute w-3 h-3 ${orb.color} rounded-full blur-sm`}
                        style={{ top: orb.top, left: orb.left }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: orb.delay,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 no-spaceship"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`flex flex-col items-center ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 