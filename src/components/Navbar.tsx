"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      const sections = ["home", "about", "projects", "skills", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Kiểm tra nếu phần tử nằm trong tầm nhìn
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <motion.nav 
      className="sticky top-0 z-50"
      variants={navbarVariants}
      animate={scrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="font-bold text-xl text-indigo-600">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Portfolio
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop menu */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="ml-10 flex items-center space-x-4">
              <NavItem href="#home" isActive={activeSection === "home"}>
                Home
              </NavItem>
              <NavItem href="#about" isActive={activeSection === "about"}>
                About
              </NavItem>
              <NavItem href="#projects" isActive={activeSection === "projects"}>
                Projects
              </NavItem>
              <NavItem href="#skills" isActive={activeSection === "skills"}>
                Skills
              </NavItem>
              <NavItem href="#contact" isActive={activeSection === "contact"}>
                Contact
              </NavItem>
            </div>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <motion.svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {!isMenuOpen ? (
                    <motion.path
                      key="menu"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{ pathLength: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.path
                      key="close"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{ pathLength: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
              <MobileNavItem 
                href="#home" 
                isActive={activeSection === "home"}
                onClick={() => setIsMenuOpen(false)}
                variants={mobileItemVariants}
              >
                Home
              </MobileNavItem>
              <MobileNavItem 
                href="#about" 
                isActive={activeSection === "about"}
                onClick={() => setIsMenuOpen(false)}
                variants={mobileItemVariants}
              >
                About
              </MobileNavItem>
              <MobileNavItem 
                href="#projects" 
                isActive={activeSection === "projects"}
                onClick={() => setIsMenuOpen(false)}
                variants={mobileItemVariants}
              >
                Projects
              </MobileNavItem>
              <MobileNavItem 
                href="#skills" 
                isActive={activeSection === "skills"}
                onClick={() => setIsMenuOpen(false)}
                variants={mobileItemVariants}
              >
                Skills
              </MobileNavItem>
              <MobileNavItem 
                href="#contact" 
                isActive={activeSection === "contact"}
                onClick={() => setIsMenuOpen(false)}
                variants={mobileItemVariants}
              >
                Contact
              </MobileNavItem>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Component cho menu item trên desktop với thanh gạch chân
const NavItem = ({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors group"
    >
      <motion.span
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {children}
      </motion.span>
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-indigo-600"
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Link>
  );
};

// Component cho menu item trên mobile
const MobileNavItem = ({ 
  href, 
  isActive, 
  onClick, 
  children,
  variants 
}: { 
  href: string; 
  isActive: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
  variants: any;
}) => {
  return (
    <motion.div variants={variants}>
      <Link 
        href={href} 
        className={`block px-3 py-2 rounded-md text-base font-medium ${
          isActive 
            ? 'text-indigo-600 bg-indigo-50' 
            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
        } relative`}
        onClick={onClick}
      >
        <motion.span
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {children}
        </motion.span>
        {isActive && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600"
            layoutId="activeIndicator"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

export default Navbar; 