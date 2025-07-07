"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, Star, Users, GraduationCap, Coffee } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);
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

  const projectTabs = [
    {
      id: 0,
      name: 'Client Projects',
      icon: <Star className="w-5 h-5" />,
      description: 'Professional projects for clients'
    },
    {
      id: 1,
      name: 'Academic Projects',
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'University and team projects'
    },
    {
      id: 2,
      name: 'Personal Projects',
      icon: <Coffee className="w-5 h-5" />,
      description: 'Fun projects and experiments'
    }
  ];

  const clientProjects = [
    {
      title: "E-Commerce Platform",
      description: "Complete online shopping solution with payment integration, admin dashboard, and real-time inventory management.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#",
      image: "/projects/ecommerce.jpg",
      status: "Completed"
    },
    {
      title: "Business Dashboard",
      description: "Analytics dashboard for business insights with data visualization and reporting features.",
      tech: ["React", "Express.js", "MongoDB", "Chart.js"],
      link: "#",
      github: "#",
      image: "/projects/dashboard.jpg",
      status: "Completed"
    },
    {
      title: "Restaurant Management",
      description: "Full restaurant management system with order tracking, inventory, and staff management.",
      tech: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      link: "#",
      github: "#",
      image: "/projects/restaurant.jpg",
      status: "Completed"
    }
  ];

  const academicProjects = [
    {
      title: "Library Management System",
      description: "University project for managing library resources, student records, and book borrowing system.",
      tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      link: "#",
      github: "#",
      image: "/projects/library.jpg",
      status: "Completed",
      teamSize: "4 members"
    },
    {
      title: "Student Portal",
      description: "Web application for students to view grades, course schedules, and university announcements.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      github: "#",
      image: "/projects/student-portal.jpg",
      status: "Completed",
      teamSize: "3 members"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot for answering university-related questions using NLP and machine learning.",
      tech: ["Python", "Django", "TensorFlow", "PostgreSQL"],
      link: "#",
      github: "#",
      image: "/projects/chatbot.jpg",
      status: "Completed",
      teamSize: "5 members"
    }
  ];

  const personalProjects = [
    {
      title: "Weather App",
      description: "Beautiful weather application with forecasts, maps, and location-based services.",
      tech: ["React Native", "OpenWeather API", "Redux"],
      link: "#",
      github: "#",
      image: "/projects/weather.jpg",
      status: "In Progress"
    },
    {
      title: "Music Player",
      description: "Modern music player with playlist management, lyrics display, and social features.",
      tech: ["Electron", "React", "Node.js", "SQLite"],
      link: "#",
      github: "#",
      image: "/projects/music.jpg",
      status: "Experimental"
    },
    {
      title: "Game Collection",
      description: "Collection of mini-games built with different technologies for learning and fun.",
      tech: ["JavaScript", "Canvas", "WebGL", "Three.js"],
      link: "#",
      github: "#",
      image: "/projects/games.jpg",
      status: "Ongoing"
    },
    {
      title: "Photography Portfolio",
      description: "Portfolio website template for photographers with gallery and booking features.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#",
      image: "/projects/photography.jpg",
      status: "Draft"
    }
  ];

  const getProjects = () => {
    switch (activeTab) {
      case 0: return clientProjects;
      case 1: return academicProjects;
      case 2: return personalProjects;
      default: return clientProjects;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return isDarkMode ? 'text-green-400 bg-green-400/20' : 'text-green-300 bg-green-300/30';
      case 'In Progress':
        return isDarkMode ? 'text-blue-400 bg-blue-400/20' : 'text-blue-300 bg-blue-300/30';
      case 'Experimental':
        return isDarkMode ? 'text-purple-400 bg-purple-400/20' : 'text-purple-300 bg-purple-300/30';
      case 'Ongoing':
        return isDarkMode ? 'text-yellow-400 bg-yellow-400/20' : 'text-yellow-300 bg-yellow-300/30';
      case 'Draft':
        return isDarkMode ? 'text-gray-400 bg-gray-400/20' : 'text-gray-300 bg-gray-300/30';
      default:
        return isDarkMode ? 'text-green-400 bg-green-400/20' : 'text-green-300 bg-green-300/30';
    }
  };

  return (
    <section 
      id="projects" 
      className={`py-20 transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gray-800' 
          : 'bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800'
      } relative overflow-hidden`}
    >
      {/* Ocean effects for light mode */}
      {!isDarkMode && (
        <>
          {/* Deep water light filtering */}
          <div className="absolute top-0 left-1/5 w-2 h-full bg-gradient-to-b from-cyan-200/20 to-transparent transform rotate-3" />
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-200/25 to-transparent transform -rotate-8" />
          
          {/* Ocean depth particles */}
          <motion.div
            className="absolute top-1/4 left-1/8 w-3 h-3 bg-white/30 rounded-full"
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 right-1/10 w-2 h-2 bg-cyan-300/40 rounded-full"
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
          
          {/* Deep sea coral simulation */}
          <motion.div
            className="absolute bottom-0 left-1/4 w-10 h-20 bg-pink-900/15 rounded-t-full"
            animate={{
              rotate: [0, 3, -3, 0],
              scaleY: [1, 1.05, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/8 w-8 h-16 bg-orange-900/20 rounded-t-full"
            animate={{
              rotate: [0, -4, 4, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
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
            My Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-white/90'
            }`}
          >
            A showcase of my work across different domains - from client solutions to academic achievements and personal experiments.
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`h-1 mx-auto rounded-full ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'bg-gradient-to-r from-yellow-200 to-orange-300'
            }`}
            style={{ maxWidth: '100px' }}
          />
        </motion.div>

        {/* Project Tabs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className={`flex space-x-2 p-2 rounded-xl ${
            isDarkMode 
              ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
              : 'bg-white/15 backdrop-blur-sm border border-white/20'
          }`}>
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? isDarkMode
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-yellow-400 text-blue-900 shadow-lg'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/20'
                } no-spaceship z-30`}
              >
                {tab.icon}
                <span className="font-medium hidden sm:block">{tab.name}</span>
                <span className="font-medium sm:hidden">{tab.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getProjects().map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group rounded-xl overflow-hidden ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                  : 'bg-white/15 backdrop-blur-sm border border-white/20'
              } hover:scale-105 transition-all duration-300 ocean-current`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20' 
                    : 'bg-gradient-to-br from-cyan-300/30 to-blue-400/30'
                } flex items-center justify-center`}>
                  <div className={`text-6xl opacity-30 ${
                    isDarkMode ? 'text-white' : 'text-white'
                  }`}>
                    {activeTab === 0 ? '💼' : activeTab === 1 ? '🎓' : '🚀'}
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Team Size for Academic Projects */}
                {activeTab === 1 && 'teamSize' in project && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
                      isDarkMode ? 'text-blue-300 bg-blue-300/20' : 'text-blue-200 bg-blue-200/30'
                    }`}>
                      <Users className="w-3 h-3" />
                      <span>{'teamSize' in project ? (project as {teamSize: string}).teamSize : ''}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-white'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-white/90'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs ${
                        isDarkMode 
                          ? 'bg-white/10 text-gray-300' 
                          : 'bg-white/20 text-white/90'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg ${
                      isDarkMode 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-yellow-400 hover:bg-yellow-500 text-blue-900'
                    } transition-colors duration-300 no-spaceship z-30`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center p-2 rounded-lg ${
                      isDarkMode 
                        ? 'border border-white/20 text-gray-300 hover:bg-white/10' 
                        : 'border border-white/30 text-white hover:bg-white/20'
                    } transition-all duration-300 no-spaceship z-30`}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-white/90'
          }`}>
            Interested in working together?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 rounded-lg font-medium ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600'
            } text-white transition-all duration-300 shadow-lg no-spaceship z-30`}
          >
            Let's Talk About Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 