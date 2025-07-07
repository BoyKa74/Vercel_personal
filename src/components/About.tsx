"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Coffee } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  } as const;

  const experiences = [
    {
      icon: GraduationCap,
      title: 'Học Vấn',
      subtitle: 'Cử nhân Công nghệ Thông tin',
      description: 'Tốt nghiệp loại Giỏi, chuyên ngành Phát triển phần mềm',
      year: '2020-2024',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Briefcase,
      title: 'Kinh Nghiệm',
      subtitle: 'Frontend Developer',
      description: '2+ năm kinh nghiệm phát triển ứng dụng web hiện đại',
      year: '2022-Hiện tại',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Code,
      title: 'Dự Án',
      subtitle: '15+ Dự án hoàn thành',
      description: 'Từ website cá nhân đến ứng dụng enterprise lớn',
      year: 'Portfolio',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Coffee,
      title: 'Passion',
      subtitle: 'Đam mê công nghệ',
      description: 'Luôn học hỏi và cập nhật những xu hướng mới nhất',
      year: 'Mọi lúc',
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Về Tôi
            </span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Xin chào! Tôi là <span className="text-blue-400 font-semibold">Mai Vũ</span>, 
            một Frontend Developer đam mê tạo ra những trải nghiệm web tuyệt vời. 
            Với kinh nghiệm trong việc phát triển ứng dụng hiện đại, 
            tôi luôn hướng tới việc kết hợp thiết kế đẹp mắt với hiệu suất tối ưu.
          </motion.p>
        </motion.div>

        {/* Experience cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)"
              }}
              className="glass-effect rounded-2xl p-8 group cursor-pointer transform-gpu"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}
                >
                  <exp.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-400 font-medium">
                      {exp.year}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">
                    {exp.subtitle}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${exp.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
          >
            Một Chút Thống Kê
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Dự Án', color: 'from-blue-400 to-cyan-400' },
              { number: '2+', label: 'Năm KN', color: 'from-purple-400 to-pink-400' },
              { number: '10+', label: 'Công Nghệ', color: 'from-green-400 to-emerald-400' },
              { number: '100%', label: 'Đam Mê', color: 'from-orange-400 to-red-400' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="text-center group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 