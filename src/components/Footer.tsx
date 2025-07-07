"use client"

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
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

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:maivu.dev@email.com",
      label: "Email",
      color: "hover:text-green-400"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer 
      className={`transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gray-950 border-t border-gray-800' 
          : 'bg-gradient-to-b from-blue-800 via-blue-900 to-indigo-900 border-t border-blue-700/50'
      } relative overflow-hidden`}
    >
      {/* Ocean floor effects for light mode */}
      {!isDarkMode && (
        <>
          {/* Deep ocean floor gradient */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-950/40 to-transparent" />
          
          {/* Ocean floor particles */}
          <motion.div
            className="absolute bottom-4 left-1/5 w-2 h-2 bg-teal-400/30 rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-8 right-1/4 w-1 h-1 bg-cyan-300/40 rounded-full"
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          
          {/* Deep sea coral */}
          <motion.div
            className="absolute bottom-0 left-1/8 w-3 h-12 bg-purple-900/20 rounded-t-full"
            animate={{
              rotate: [0, 1, -1, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/10 w-4 h-16 bg-indigo-900/15 rounded-t-full"
            animate={{
              rotate: [0, -2, 2, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent'
            }`}>
              Mai Vũ
            </h3>
            <p className={`mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-white/80'
            }`}>
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  className={`p-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10' 
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  } transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-white'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                    className={`${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-white/80 hover:text-yellow-200'
                    } transition-colors duration-300`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-white'
            }`}>
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-white/80'
              }`}>
                📧 maivu.dev@email.com
              </p>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-white/80'
              }`}>
                📍 Ho Chi Minh City, Vietnam
              </p>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-white/80'
              }`}>
                🌐 Available for remote work
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={`h-px ${
            isDarkMode 
              ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
          } mb-8`}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className={`text-sm mb-4 md:mb-0 ${
            isDarkMode ? 'text-gray-500' : 'text-white/60'
          }`}>
            © {new Date().getFullYear()} Mai Vũ. All rights reserved.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-2 text-sm ${
              isDarkMode ? 'text-gray-500' : 'text-white/60'
            }`}
          >
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
              className={`${
                isDarkMode ? 'text-red-400' : 'text-red-300'
              }`}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
            <span>and lots of ☕</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className={`absolute bottom-0 left-0 w-full h-1 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50' 
            : 'bg-gradient-to-r from-yellow-400/50 via-orange-400/50 to-yellow-400/50'
        }`}
        animate={{
          background: isDarkMode 
            ? [
                'linear-gradient(to right, rgba(59, 130, 246, 0.5) 0%, rgba(168, 85, 247, 0.5) 50%, rgba(59, 130, 246, 0.5) 100%)',
                'linear-gradient(to right, rgba(168, 85, 247, 0.5) 0%, rgba(59, 130, 246, 0.5) 50%, rgba(168, 85, 247, 0.5) 100%)',
                'linear-gradient(to right, rgba(59, 130, 246, 0.5) 0%, rgba(168, 85, 247, 0.5) 50%, rgba(59, 130, 246, 0.5) 100%)'
              ]
            : [
                'linear-gradient(to right, rgba(251, 191, 36, 0.5) 0%, rgba(251, 146, 60, 0.5) 50%, rgba(251, 191, 36, 0.5) 100%)',
                'linear-gradient(to right, rgba(251, 146, 60, 0.5) 0%, rgba(251, 191, 36, 0.5) 50%, rgba(251, 146, 60, 0.5) 100%)',
                'linear-gradient(to right, rgba(251, 191, 36, 0.5) 0%, rgba(251, 146, 60, 0.5) 50%, rgba(251, 191, 36, 0.5) 100%)'
              ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </footer>
  );
} 