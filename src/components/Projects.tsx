"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Project data structure
type Project = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    imageSrc: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app allowing users to create, organize, and track tasks with drag-and-drop functionality.",
    imageSrc: "/projects/task-app.jpg",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://task-app.example.com",
    githubUrl: "https://github.com/yourusername/task-app"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A real-time weather application displaying forecast data and interactive maps.",
    imageSrc: "/projects/weather-app.jpg",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    demoUrl: "https://weather-dashboard.example.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website built with modern web technologies and responsive design.",
    imageSrc: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://yourname.vercel.app",
    githubUrl: "https://github.com/yourusername/portfolio"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  const techTagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Projects</h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Here are some of my recent works. Each project represents different challenges and solutions.
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md group"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                rotateX: 5,
                rotateY: 5
              }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="h-60 w-full relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center"
                  whileHover={{ 
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-white font-bold text-2xl text-center px-4"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-gray-800 mb-2"
                  whileHover={{ color: "#4f46e5" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full"
                        variants={techTagVariants}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#4f46e5",
                          color: "#ffffff"
                        }}
                        transition={{ type: "spring" as const, stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  >
                    <span>Live Demo</span>
                    <motion.svg 
                      className="ml-1 w-4 h-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      whileHover={{ x: 2, y: -2 }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  >
                    <span>GitHub</span>
                    <motion.svg 
                      className="ml-1 w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a 
            href="https://github.com/BoyKa74" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(79, 70, 229, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring" as const, stiffness: 400 }}
          >
            <span>View More on GitHub</span>
            <motion.svg 
              className="ml-2 w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 