"use client"

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20
      }
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring" as const, stiffness: 400 }}
            >
              <Link href="/" className="text-2xl font-bold text-white">
                Mai Vủ
              </Link>
            </motion.div>
            <motion.p 
              className="mt-4 text-gray-400 max-w-md"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A passionate Frontend Developer dedicated to creating beautiful and functional web applications 
              with modern technologies and best practices.
            </motion.p>
            <motion.div 
              className="mt-6 flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.a 
                href="https://github.com/BoyKa74" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialIconVariants}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/mai-văn-anh-vủ-8793512bb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialIconVariants}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialIconVariants}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="mailto:maivananhvu.dev@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialIconVariants}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                { href: "/", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  >
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                <motion.svg 
                  className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                <span className="text-gray-400">maivananhvu.dev@gmail.com</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                <motion.svg 
                  className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </motion.svg>
                <span className="text-gray-400">Da Nang, Viet Nam</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p 
            className="text-gray-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" as const, stiffness: 400 }}
          >
            &copy; {currentYear} Mai Vủ. All rights reserved.
          </motion.p>
          <motion.p 
            className="text-gray-500 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Built with ❤️ using Next.js, TypeScript, Tailwind CSS & Framer Motion
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 