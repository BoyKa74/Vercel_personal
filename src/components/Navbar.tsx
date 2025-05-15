"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-indigo-600">
              Portfolio
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
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
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <MobileNavItem 
            href="#home" 
            isActive={activeSection === "home"}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </MobileNavItem>
          <MobileNavItem 
            href="#about" 
            isActive={activeSection === "about"}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </MobileNavItem>
          <MobileNavItem 
            href="#projects" 
            isActive={activeSection === "projects"}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </MobileNavItem>
          <MobileNavItem 
            href="#skills" 
            isActive={activeSection === "skills"}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </MobileNavItem>
          <MobileNavItem 
            href="#contact" 
            isActive={activeSection === "contact"}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </MobileNavItem>
        </div>
      </div>
    </nav>
  );
};

// Component cho menu item trên desktop với thanh gạch chân
const NavItem = ({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors group"
    >
      {children}
      <div className={`absolute bottom-0 left-0 h-0.5 w-full ${isActive ? 'bg-indigo-600' : 'bg-transparent group-hover:bg-indigo-200'} transition-colors`}></div>
    </Link>
  );
};

// Component cho menu item trên mobile
const MobileNavItem = ({ 
  href, 
  isActive, 
  onClick, 
  children 
}: { 
  href: string; 
  isActive: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => {
  return (
    <Link 
      href={href} 
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive 
          ? 'text-indigo-600 bg-indigo-50' 
          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
      } relative`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar; 