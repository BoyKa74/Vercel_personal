'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function GlobalFish() {
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
    setIsVisible(savedTheme === 'light'); // Only show fish in light mode
  }, []);

  // Listen for theme changes
  useEffect(() => {
    if (!isMounted) return;

    const themeInterval = setInterval(() => {
      const theme = localStorage.getItem('theme') || 'dark';
      const isDark = theme === 'dark';
      setIsDarkMode(isDark);
      setIsVisible(!isDark); // Show fish only in light mode
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
              // Move fish to new section
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

  // Move fish to different positions based on section
  const moveToSection = (section: string) => {
    const positions = {
      home: { x: 20, y: 30 },
      about: { x: 80, y: 40 },
      skills: { x: 15, y: 60 },
      projects: { x: 75, y: 25 },
      contact: { x: 30, y: 70 }
    };
    
    const newPos = positions[section as keyof typeof positions] || positions.home;
    setTargetPosition(newPos);
    console.log(`🐠 Fish swimming to ${section} section: ${newPos.x}%, ${newPos.y}%`);
  };

  // Random movement within section area
  useEffect(() => {
    if (!isVisible) return;

    const randomMove = () => {
      const sectionPositions = {
        home: { baseX: 20, baseY: 30, rangeX: 15, rangeY: 15 },
        about: { baseX: 80, baseY: 40, rangeX: 15, rangeY: 15 },
        skills: { baseX: 15, baseY: 60, rangeX: 15, rangeY: 15 },
        projects: { baseX: 75, baseY: 25, rangeX: 15, rangeY: 15 },
        contact: { baseX: 30, baseY: 70, rangeX: 15, rangeY: 15 }
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

    const interval = setInterval(randomMove, 4000);
    return () => clearInterval(interval);
  }, [activeSection, isVisible]);

  // Smooth movement animation
  useEffect(() => {
    if (!isVisible) return;

    const moveToTarget = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.02,
        y: prev.y + (targetPosition.y - prev.y) * 0.02,
      }));
    };

    const interval = setInterval(moveToTarget, 50);
    return () => clearInterval(interval);
  }, [targetPosition, isVisible]);

  // Handle fish click
  const handleFishClick = () => {
    if (!isVisible) return;
    
    // Create enhanced bubble effect
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const bubble = document.createElement('div');
        bubble.className = 'fixed w-4 h-4 bg-white/60 rounded-full pointer-events-none z-50';
        bubble.style.left = `${position.x}%`;
        bubble.style.top = `${position.y}%`;
        bubble.style.transform = 'translate(-50%, -50%)';
        
        // Enhanced bubble animation
        bubble.style.animation = `
          bubbleFloat 2s ease-out forwards,
          bubbleFade 2s ease-out forwards
        `;
        
        // Random direction (mostly upward)
        const angle = (Math.PI / 6) + (Math.random() - 0.5) * (Math.PI / 3); // 30-150 degrees
        const distance = 40 + Math.random() * 30;
        const endX = position.x + Math.cos(angle) * distance * 0.2;
        const endY = position.y - Math.sin(angle) * distance * 0.3;
        
        bubble.style.setProperty('--end-x', `${endX}%`);
        bubble.style.setProperty('--end-y', `${endY}%`);
        
        document.body.appendChild(bubble);
        
        setTimeout(() => bubble.remove(), 2000);
      }, i * 80);
    }

    // Move to random position in current section
    moveToSection(activeSection);
  };

  if (!isMounted || !isVisible) return null;

  return (
    <>
      {/* Section indicator - Positioned above fish with better spacing */}
      <motion.div
        className="fixed z-50 pointer-events-none"
        style={{
          left: `${position.x}%`,
          top: `${Math.max(3, position.y - 10)}%`, // 10% above the fish, min 3% from top
          transform: 'translate(-50%, -100%)',
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-gradient-to-r from-orange-500/95 to-pink-500/95 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium border border-orange-300/60 shadow-xl">
          🐠 {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} | Full Stack Developer
        </div>
      </motion.div>

      {/* Fish - Enhanced with beautiful colors */}
      <motion.div
        className="global-fish fixed z-40 cursor-pointer pointer-events-auto"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleFishClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Fish SVG with beautiful ocean colors */}
        <div className="w-16 h-16 text-orange-500 filter drop-shadow-2xl">
          <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="1">
            {/* Fish body with beautiful gradient */}
            <defs>
              <linearGradient id="fishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="30%" stopColor="#ea580c" />
                <stop offset="60%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#be185d" />
              </linearGradient>
              <linearGradient id="fishBelly" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="50%" stopColor="#fdba74" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
              <radialGradient id="fishEye" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </radialGradient>
              <filter id="fishGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main fish body with beautiful gradient */}
            <ellipse cx="45" cy="50" rx="30" ry="20" fill="url(#fishGradient)" opacity="0.95" filter="url(#fishGlow)"/>
            
            {/* Fish belly highlight */}
            <ellipse cx="45" cy="58" rx="25" ry="12" fill="url(#fishBelly)" opacity="0.7"/>
            
            {/* Fish tail with gradient */}
            <path d="M10 50 L2 35 L8 50 L2 65 Z" fill="url(#fishGradient)" opacity="0.9"/>
            
            {/* Dorsal fin */}
            <path d="M35 28 L25 18 L50 32" fill="url(#fishGradient)" opacity="0.8"/>
            
            {/* Ventral fin */}
            <path d="M35 72 L25 82 L50 68" fill="url(#fishGradient)" opacity="0.8"/>
            
            {/* Side fin */}
            <path d="M55 58 L45 68 L60 65" fill="url(#fishGradient)" opacity="0.75"/>
            
            {/* Fish eye with beautiful detail */}
            <circle cx="60" cy="44" r="6" fill="url(#fishEye)"/>
            <circle cx="61" cy="42" r="2" fill="white"/>
            <circle cx="62" cy="41" r="1" fill="white" opacity="0.8"/>
            
            {/* Fish scales pattern with different colors */}
            <path d="M28 40 Q35 35 42 40 Q35 45 28 40" fill="#fed7aa" opacity="0.4"/>
            <path d="M35 50 Q42 45 49 50 Q42 55 35 50" fill="#fdba74" opacity="0.4"/>
            <path d="M42 35 Q49 30 56 35 Q49 40 42 35" fill="#fbbf24" opacity="0.3"/>
            <path d="M30 55 Q37 50 44 55 Q37 60 30 55" fill="#f59e0b" opacity="0.3"/>
            
            {/* Decorative stripes */}
            <path d="M25 45 Q35 40 45 45" stroke="#be185d" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M25 55 Q35 50 45 55" stroke="#be185d" strokeWidth="1" fill="none" opacity="0.6"/>
            
            {/* Enhanced bubbles trail */}
            <circle cx="78" cy="35" r="2.5" fill="white" opacity="0.7"/>
            <circle cx="84" cy="30" r="2" fill="#fed7aa" opacity="0.8"/>
            <circle cx="90" cy="25" r="1.5" fill="white" opacity="0.9"/>
            <circle cx="95" cy="22" r="1" fill="#fdba74" opacity="0.7"/>
          </svg>
        </div>

        {/* Enhanced swimming trail effect */}
        <motion.div
          className="absolute -left-10 top-1/2 w-12 h-2 bg-gradient-to-r from-transparent via-orange-400/40 to-pink-400/30 rounded-full transform -translate-y-1/2"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.4, 0.8],
            scaleY: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Swimming particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-300/60 rounded-full"
            style={{
              left: `${-15 - i * 3}px`,
              top: `${8 + (i % 2) * 16}px`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Add CSS for enhanced bubble animation */}
      <style jsx global>{`
        @keyframes bubbleFloat {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(calc(var(--end-x) - 50%), calc(var(--end-y) - 50%)) scale(0.3);
            opacity: 0;
          }
        }
        
        @keyframes bubbleFade {
          0% { opacity: 0.8; }
          50% { opacity: 0.9; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
} 