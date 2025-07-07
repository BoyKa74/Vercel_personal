'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function GlobalSpaceship() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Client-side mounting
  useEffect(() => {
    setIsMounted(true);
    
    // Check theme - default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    localStorage.setItem('theme', savedTheme);
    setIsDarkMode(savedTheme === 'dark');
    setIsVisible(savedTheme === 'dark'); // Only show spaceship in dark mode
  }, []);

  // Listen for theme changes
  useEffect(() => {
    if (!isMounted) return;

    const themeInterval = setInterval(() => {
      const theme = localStorage.getItem('theme') || 'dark';
      const isDark = theme === 'dark';
      setIsDarkMode(isDark);
      setIsVisible(isDark); // Show spaceship only in dark mode
    }, 100);

    return () => clearInterval(themeInterval);
  }, [isMounted]);

  // Track active section
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
              // Move spaceship to new section
              moveToSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted, activeSection]);

  // Move spaceship to different positions based on section
  const moveToSection = (section: string) => {
    const positions = {
      home: { x: 75, y: 25 },
      about: { x: 25, y: 35 },
      skills: { x: 80, y: 60 },
      projects: { x: 20, y: 70 },
      contact: { x: 70, y: 45 }
    };
    
    const newPos = positions[section as keyof typeof positions] || positions.home;
    setTargetPosition(newPos);
    console.log(`🚀 Spaceship flying to ${section} section: ${newPos.x}%, ${newPos.y}%`);
  };

  // Random movement within section area
  useEffect(() => {
    if (!isVisible) return;

    const randomMove = () => {
      const sectionPositions = {
        home: { baseX: 75, baseY: 25, rangeX: 15, rangeY: 15 },
        about: { baseX: 25, baseY: 35, rangeX: 15, rangeY: 15 },
        skills: { baseX: 80, baseY: 60, rangeX: 15, rangeY: 15 },
        projects: { baseX: 20, baseY: 70, rangeX: 15, rangeY: 15 },
        contact: { baseX: 70, baseY: 45, rangeX: 15, rangeY: 15 }
      };

      const sectionData = sectionPositions[activeSection as keyof typeof sectionPositions];
      if (sectionData) {
        const newX = sectionData.baseX + (Math.random() - 0.5) * sectionData.rangeX;
        const newY = sectionData.baseY + (Math.random() - 0.5) * sectionData.rangeY;
        
        setTargetPosition({
          x: Math.max(5, Math.min(95, newX)),
          y: Math.max(10, Math.min(90, newY))
        });
      }
    };

    const interval = setInterval(randomMove, 3000); // Faster for spaceship
    return () => clearInterval(interval);
  }, [activeSection, isVisible]);

  // Smooth movement animation
  useEffect(() => {
    if (!isVisible) return;

    const moveToTarget = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.05, // Faster movement for spaceship
        y: prev.y + (targetPosition.y - prev.y) * 0.05,
      }));
    };

    const interval = setInterval(moveToTarget, 30);
    return () => clearInterval(interval);
  }, [targetPosition, isVisible]);

  // Handle spaceship click - Enhanced effects
  const handleSpaceshipClick = () => {
    if (!isVisible) return;
    
    // Create enhanced star burst effect
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const star = document.createElement('div');
        star.className = 'fixed w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-50';
        star.style.left = `${position.x}%`;
        star.style.top = `${position.y}%`;
        star.style.transform = 'translate(-50%, -50%)';
        
        // Enhanced animation
        star.style.animation = `
          starBurst 1.5s ease-out forwards,
          starFade 1.5s ease-out forwards
        `;
        
        // Random direction
        const angle = (i / 12) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        const endX = position.x + Math.cos(angle) * distance * 0.3;
        const endY = position.y + Math.sin(angle) * distance * 0.3;
        
        star.style.setProperty('--end-x', `${endX}%`);
        star.style.setProperty('--end-y', `${endY}%`);
        
        document.body.appendChild(star);
        
        setTimeout(() => star.remove(), 1500);
      }, i * 50);
    }

    // Create glow effect
    const glowElement = document.createElement('div');
    glowElement.className = 'fixed w-20 h-20 bg-blue-400/30 rounded-full pointer-events-none z-40 animate-ping';
    glowElement.style.left = `${position.x}%`;
    glowElement.style.top = `${position.y}%`;
    glowElement.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(glowElement);
    
    setTimeout(() => glowElement.remove(), 1000);

    // Move to random position in current section
    moveToSection(activeSection);
  };

  if (!isMounted || !isVisible) return null;

  return (
    <>
      {/* Section indicator - Positioned ABOVE spaceship with more distance */}
      <motion.div
        className="fixed z-50 pointer-events-none"
        style={{
          left: `${position.x}%`,
          top: `${Math.max(5, position.y - 12)}%`, // 12% above the spaceship, min 5% from top
          transform: 'translate(-50%, -100%)',
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-gray-800/95 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium border border-blue-400/40 shadow-xl">
          🚀 {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </div>
      </motion.div>

      {/* Spaceship - Enhanced design */}
      <motion.div
        className="global-spaceship fixed z-40 cursor-pointer pointer-events-auto"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleSpaceshipClick}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {/* Spaceship SVG with enhanced space styling */}
        <div className="w-16 h-16 text-blue-400 filter drop-shadow-2xl">
          <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="2">
            {/* Spaceship body with gradient */}
            <defs>
              <linearGradient id="spaceshipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <radialGradient id="engineGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main spaceship body with glow */}
            <path d="M50 5 L75 35 L95 30 L60 50 L95 70 L75 65 L50 95 L25 65 L5 70 L40 50 L5 30 L25 35 Z" 
                  fill="url(#spaceshipGradient)" opacity="0.9" filter="url(#glow)"/>
            
            {/* Engine core with enhanced glow */}
            <circle cx="50" cy="50" r="8" fill="url(#engineGlow)" />
            
            {/* Wing details */}
            <path d="M25 35 L35 45 L25 55" stroke="white" strokeWidth="1" fill="none" opacity="0.8"/>
            <path d="M75 35 L65 45 L75 55" stroke="white" strokeWidth="1" fill="none" opacity="0.8"/>
            
            {/* Cockpit */}
            <ellipse cx="50" cy="35" rx="8" ry="6" fill="white" opacity="0.4"/>
            
            {/* Enhanced engine trail */}
            <path d="M40 85 Q50 95 60 85" stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.8"/>
            <path d="M42 90 Q50 98 58 90" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.6"/>
          </svg>
        </div>

        {/* Enhanced engine trail effect */}
        <motion.div
          className="absolute top-full left-1/2 w-2 h-12 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent rounded-full transform -translate-x-1/2"
          animate={{
            opacity: [0.5, 1, 0.5],
            scaleY: [0.8, 1.4, 0.8],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating stars around spaceship - Enhanced */}
        {[...Array(6)].map((_, i) => {
          const positions = [
            { x: -8, y: -8 },
            { x: 12, y: -6 },
            { x: 16, y: 8 },
            { x: -6, y: 12 },
            { x: -12, y: 2 },
            { x: 8, y: -12 }
          ];
          
          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                left: `${positions[i].x}px`,
                top: `${positions[i].y}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          );
        })}
      </motion.div>

      {/* Add CSS for enhanced star burst animation */}
      <style jsx global>{`
        @keyframes starBurst {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(var(--end-x) - 50%), calc(var(--end-y) - 50%)) scale(0.3);
            opacity: 0;
          }
        }
        
        @keyframes starFade {
          0% { opacity: 1; }
          70% { opacity: 0.8; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
} 