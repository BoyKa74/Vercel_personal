"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
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

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.p 
              className="text-gray-600 text-lg"
              variants={itemVariants}
            >
              Hello! I&apos;m <motion.span 
                className="font-medium text-indigo-600"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Mai Vủ
              </motion.span>, a passionate Frontend Developer 
              with a strong eye for creating engaging UI effects and animations, and creating intuitive, dynamic user experiences.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 text-lg"
              variants={itemVariants}
            >
              With a background in Computer Science and a love for clean, efficient code, I enjoy bringing ideas to life in the browser.
              I&apos;m constantly learning new technologies and techniques to stay at the forefront of web development.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 text-lg"
              variants={itemVariants}
            >
              When I&apos;m not coding, you can find me exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </motion.p>
            
            <motion.div className="pt-4" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
              <div className="space-y-4">
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-medium text-indigo-600">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-700">Your University Name</p>
                  <p className="text-gray-500 text-sm">2018 - 2022</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-medium text-indigo-600">Web Development Bootcamp</h4>
                  <p className="text-gray-700">Coding Academy</p>
                  <p className="text-gray-500 text-sm">2022</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Experience</h3>
            <div className="space-y-6">
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  y: -5 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Frontend Developer</h4>
                    <p className="text-indigo-600">Company Name</p>
                    <p className="text-gray-500 text-sm">2022 - Present</p>
                    <div className="mt-2 text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Developed responsive web applications using React and Next.js</li>
                        <li>Implemented UI components with Tailwind CSS</li>
                        <li>Collaborated with backend developers to integrate RESTful APIs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  y: -5 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Web Development Intern</h4>
                    <p className="text-indigo-600">Internship Company</p>
                    <p className="text-gray-500 text-sm">Summer 2021</p>
                    <div className="mt-2 text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Assisted in building website features using JavaScript and CSS</li>
                        <li>Participated in UI/UX design meetings and implemented design mockups</li>
                        <li>Optimized website performance through code refactoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 