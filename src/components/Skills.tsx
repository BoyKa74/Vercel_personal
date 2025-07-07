"use client"

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  const skillCategories = [
    {
      title: "🧠 Languages",
      skills: [
        { name: "JavaScript", icon: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
        { name: "TypeScript", icon: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
        { name: "Java", icon: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" },
        { name: "C++", icon: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" },
        { name: "Python", icon: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
        { name: "Dart", icon: "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" },
        { name: "HTML", icon: "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
        { name: "CSS", icon: "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
        { name: "SQL", icon: "https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=sqlite&logoColor=white" }
      ]
    },
    {
      title: "🎨 Frontend Frameworks",
      skills: [
        { name: "Next.js", icon: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" },
        { name: "React", icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
        { name: "Tailwind CSS", icon: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        { name: "Flutter", icon: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" }
      ]
    },
    {
      title: "⚙️ Backend Frameworks", 
      skills: [
        { name: "Node.js", icon: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
        { name: "Express.js", icon: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
        { name: "Spring MVC", icon: "https://img.shields.io/badge/Spring%20MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white" },
        { name: "Spring Boot", icon: "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" },
        { name: "Django", icon: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" }
      ]
    },
    {
      title: "🗃️ Databases",
      skills: [
        { name: "Supabase", icon: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" },
        { name: "MySQL", icon: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
        { name: "PostgreSQL", icon: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
        { name: "MongoDB", icon: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
        { name: "H2", icon: "https://img.shields.io/badge/H2-263238?style=for-the-badge&logo=h2&logoColor=white" },
        { name: "SQL Server", icon: "https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" }
      ]
    },
    {
      title: "🔧 Tools & Platforms",
      skills: [
        { name: "Git", icon: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
        { name: "Docker", icon: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "Postman", icon: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
        { name: "IntelliJ IDEA", icon: "https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white" },
        { name: "VS Code", icon: "https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
        { name: "Visual Studio", icon: "https://img.shields.io/badge/Visual%20Studio-5C2D91?style=for-the-badge&logo=visual-studio&logoColor=white" },
        { name: "Cursor", icon: "https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=cursor&logoColor=white" },
        { name: "Firebase", icon: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
        { name: "GraphQL", icon: "https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
        { name: "Android SDK", icon: "https://img.shields.io/badge/Android%20SDK-3DDC84?style=for-the-badge&logo=android&logoColor=white" }
      ]
    },
    {
      title: "🧪 Testing",
      skills: [
        { name: "Selenium", icon: "https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" },
        { name: "Appium", icon: "https://img.shields.io/badge/Appium-00A1F1?style=for-the-badge&logo=appium&logoColor=white" }
      ]
    },
    {
      title: "🤖 AI Tools",
      skills: [
        { name: "ChatGPT", icon: "https://img.shields.io/badge/ChatGPT-00A67E?style=for-the-badge&logo=openai&logoColor=white" },
        { name: "GitHub Copilot", icon: "https://img.shields.io/badge/Copilot-000000?style=for-the-badge&logo=github&logoColor=white" },
        { name: "Gemini", icon: "https://img.shields.io/badge/Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" },
        { name: "Grok", icon: "https://img.shields.io/badge/Grok-FFAD1F?style=for-the-badge&logo=x&logoColor=black" },
        { name: "DeepSheet", icon: "https://img.shields.io/badge/DeepSheet-FF4081?style=for-the-badge&logo=google-sheets&logoColor=white" }
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  } as const;

  return (
    <section 
      id="skills" 
      className={`py-20 transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gray-900' 
          : 'bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700'
      } relative overflow-hidden`}
    >
      {/* Ocean effects for light mode */}
      {!isDarkMode && (
        <>
          {/* Underwater light beams */}
          <div className="absolute top-0 left-1/3 w-2 h-full bg-gradient-to-b from-yellow-200/25 to-transparent transform rotate-6" />
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-yellow-100/30 to-transparent transform -rotate-12" />
          
          {/* Floating sea elements */}
          <motion.div
            className="absolute top-1/6 left-1/5 w-4 h-4 bg-white/25 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-2/3 right-1/6 w-3 h-3 bg-cyan-200/40 rounded-full"
            animate={{
              y: [0, -25, 0],
              x: [0, -15, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
          />
          
          {/* Seaweed movement */}
          <motion.div
            className="absolute bottom-0 left-1/6 w-6 h-24 bg-green-800/30 rounded-t-full"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-8 h-32 bg-green-900/25 rounded-t-full"
            animate={{
              rotate: [0, -8, 8, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
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
            🛠 Technologies & Tools
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-white/90'
            }`}
          >
            Full-stack development expertise with modern technologies and frameworks
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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`p-8 rounded-xl ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                  : 'bg-white/15 backdrop-blur-sm border border-white/20'
              } hover:scale-[1.02] transition-all duration-300 ocean-current`}
            >
              <h3 className={`text-2xl font-bold mb-8 text-center ${
                isDarkMode ? 'text-blue-400' : 'text-yellow-200'
              }`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="h-8 transition-all duration-300 group-hover:drop-shadow-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 