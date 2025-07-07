"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

// Project data structure
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  stats: { stars: number; forks: number };
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Nền tảng thương mại điện tử hiện đại với React, Next.js và Stripe payment integration. Giao diện responsive và trải nghiệm người dùng tối ưu.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true,
    stats: { stars: 142, forks: 28 }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Ứng dụng quản lý công việc với tính năng drag & drop, real-time collaboration và notification system.",
    image: "/projects/taskapp.jpg",
    technologies: ["Vue.js", "Firebase", "Vuetify", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: false,
    stats: { stars: 89, forks: 15 }
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Website portfolio cá nhân với animations mượt mà, dark mode và SEO optimization. Built with modern tech stack.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true,
    stats: { stars: 67, forks: 12 }
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Dashboard thời tiết với charts interactives, geolocation và forecast 7 ngày. UI/UX hiện đại và responsive.",
    image: "/projects/weather.jpg",
    technologies: ["React", "D3.js", "OpenWeather API", "SCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: false,
    stats: { stars: 34, forks: 8 }
  },
  {
    id: 5,
    title: "Learning Platform",
    description: "Nền tảng học online với video streaming, quiz system và progress tracking. Hỗ trợ multiple course formats.",
    image: "/projects/learning.jpg",
    technologies: ["Angular", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: true,
    stats: { stars: 156, forks: 42 }
  },
  {
    id: 6,
    title: "Social Media App",
    description: "Ứng dụng mạng xã hội mini với realtime chat, photo sharing và social features. PWA support.",
    image: "/projects/social.jpg",
    technologies: ["React Native", "Express.js", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    featured: false,
    stats: { stars: 98, forks: 23 }
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  } as const;

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Dự Án Của Tôi
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Khám phá các dự án tôi đã thực hiện, từ ứng dụng web đơn giản đến những platform phức tạp. 
            Mỗi dự án đều thể hiện kỹ năng và đam mê của tôi với công nghệ.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass-effect rounded-2xl overflow-hidden transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="text-6xl text-gray-600">{project.id}</div>
                  </div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                    >
                      ⭐ Featured
                    </motion.div>
                  )}
                  
                  {/* Overlay with links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star size={16} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={16} />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(99, 102, 241, 0.2)',
                          color: '#60a5fa'
                        }}
                        className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 font-medium transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Github size={24} />
            <span>Xem Thêm Trên GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 