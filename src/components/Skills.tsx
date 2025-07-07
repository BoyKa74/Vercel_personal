"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "🧠 Languages",
      skills: [
        { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
        { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
        { name: "Java", badge: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" },
        { name: "C++", badge: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" },
        { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
        { name: "Dart", badge: "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" },
        { name: "HTML", badge: "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
        { name: "CSS", badge: "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
        { name: "SQL", badge: "https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=sqlite&logoColor=white" }
      ]
    },
    {
      title: "🎨 Frontend Frameworks",
      skills: [
        { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" },
        { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
        { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        { name: "Flutter", badge: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" }
      ]
    },
    {
      title: "⚙️ Backend Frameworks",
      skills: [
        { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
        { name: "Express.js", badge: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
        { name: "Spring MVC", badge: "https://img.shields.io/badge/Spring%20MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white" },
        { name: "Spring Boot", badge: "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" },
        { name: "Django", badge: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" }
      ]
    },
    {
      title: "🗃️ Databases",
      skills: [
        { name: "Supabase", badge: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" },
        { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
        { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
        { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
        { name: "H2", badge: "https://img.shields.io/badge/H2-263238?style=for-the-badge&logo=h2&logoColor=white" },
        { name: "SQL Server", badge: "https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" }
      ]
    },
    {
      title: "🔧 Tools & Platforms",
      skills: [
        { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
        { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
        { name: "IntelliJ IDEA", badge: "https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white" },
        { name: "VS Code", badge: "https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
        { name: "Visual Studio", badge: "https://img.shields.io/badge/Visual%20Studio-5C2D91?style=for-the-badge&logo=visual-studio&logoColor=white" },
        { name: "Cursor", badge: "https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=data:image/svg+xml;base64,...&logoColor=white" },
        { name: "Firebase", badge: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
        { name: "GraphQL", badge: "https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
        { name: "Android SDK", badge: "https://img.shields.io/badge/Android%20SDK-3DDC84?style=for-the-badge&logo=android&logoColor=white" }
      ]
    },
    {
      title: "🧪 Testing",
      skills: [
        { name: "Selenium", badge: "https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" },
        { name: "Appium", badge: "https://img.shields.io/badge/Appium-00A1F1?style=for-the-badge&logo=appium&logoColor=white" }
      ]
    },
    {
      title: "🤖 AI Tools",
      skills: [
        { name: "ChatGPT", badge: "https://img.shields.io/badge/ChatGPT-00A67E?style=for-the-badge&logo=openai&logoColor=white" },
        { name: "GitHub Copilot", badge: "https://img.shields.io/badge/Copilot-000000?style=for-the-badge&logo=github&logoColor=white" },
        { name: "Gemini", badge: "https://img.shields.io/badge/Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" },
        { name: "Grok", badge: "https://img.shields.io/badge/Grok-FFAD1F?style=for-the-badge&logo=x&logoColor=black" },
        { name: "DeepSheet", badge: "https://img.shields.io/badge/DeepSheet-FF4081?style=for-the-badge&logo=google-sheets&logoColor=white" }
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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-10 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-10 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
              🛠 Technologies & Tools
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life. 
            Always learning and adapting to new technologies in this ever-evolving field.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-8"
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-6 text-center"
                whileHover={{ scale: 1.02 }}
              >
                {category.title}
              </motion.h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.05),
                      duration: 0.4 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="cursor-pointer"
                  >
                    <img
                      src={skill.badge}
                      alt={skill.name}
                      className="h-8 md:h-10 rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Divider line except for last category */}
              {categoryIndex < skillCategories.length - 1 && (
                <motion.div
                  className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.div
            className="glass-effect rounded-2xl p-8 inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Always Learning
            </h3>
            <p className="text-gray-300 max-w-md">
              Technology evolves rapidly, and so do I. Currently exploring new frameworks, 
              cloud technologies, and AI integration to stay at the cutting edge.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 