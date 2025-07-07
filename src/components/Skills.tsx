"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type SkillCategory = {
  name: string;
  skills: Skill[];
};

type Skill = {
  name: string;
  level: number; // 1-5 (beginner to expert)
  icon?: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", level: 5 },
      { name: "CSS3/SCSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "React", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Material UI", level: 4 },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "API Development", level: 4 },
      { name: "GraphQL", level: 3 },
    ]
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 5 },
      { name: "Figma", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Webpack", level: 3 },
      { name: "Jest", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Docker", level: 2 },
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 5 },
      { name: "Communication", level: 4 },
      { name: "Teamwork", level: 5 },
      { name: "Time Management", level: 4 },
      { name: "Adaptability", level: 5 },
    ]
  }
];

const SkillBar = ({ name, level }: Skill) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, margin: "-50px" });

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <motion.span 
          className="text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {level === 1 && "Beginner"}
          {level === 2 && "Elementary"}
          {level === 3 && "Intermediate"}
          {level === 4 && "Advanced"}
          {level === 5 && "Expert"}
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2" ref={barRef}>
        <motion.div
          className="bg-indigo-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level * 20}%` } : { width: 0 }}
          transition={{ 
            delay: 0.2, 
            duration: 1.2, 
            ease: "easeOut" 
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  const learningItemVariants = {
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
    <section id="skills" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Skills</h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Here are the technologies and tools I work with regularly.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -5
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <motion.h3 
                className="text-xl font-semibold text-indigo-600 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                {category.name}
              </motion.h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Currently Learning</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {["AWS", "Three.js", "React Native", "Python"].map((item, index) => (
              <motion.div 
                key={index}
                className="px-6 py-3 bg-indigo-100 text-indigo-800 rounded-full font-medium cursor-pointer"
                variants={learningItemVariants}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#3730a3",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 