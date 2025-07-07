"use client"

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; message: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Map form field names to state properties
    const fieldMap: {[key: string]: string} = {
      'from_name': 'name',
      'from_email': 'email',
      'subject': 'subject',
      'message': 'message'
    };
    
    const stateField = fieldMap[name] || name;
    setFormData(prev => ({ ...prev, [stateField]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      // EmailJS initialization
      emailjs.init("qqW74j6MxUiZL8ljk");
      
      // Log form data for debugging
      console.log("Form values:", {
        from_name: formRef.current.from_name.value,
        from_email: formRef.current.from_email.value,
        subject: formRef.current.subject.value,
        message: formRef.current.message.value,
        to_name: formRef.current.to_name.value,
        reply_to: formRef.current.reply_to.value
      });
      
      // Send email using emailjs.sendForm
      const result = await emailjs.sendForm(
        'service_fishdev',     // Service ID
        'template_f42zaf8',    // Template ID
        formRef.current
      );
      
      console.log("Email sent successfully:", result.text);
      
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitResult({
        success: false,
        message: 'An error occurred while sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const floatingCardVariants = {
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
  
  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Have a question or want to work together? Feel free to contact me!
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              variants={floatingCardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "#4f46e5" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.svg 
                      className="w-5 h-5 text-indigo-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      whileHover={{ 
                        color: "#ffffff",
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </motion.svg>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">Email</h4>
                    <motion.a 
                      href="mailto:maivananhvu.dev@gmail.com" 
                      className="text-indigo-600 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      maivananhvu.dev@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "#4f46e5" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.svg 
                      className="w-5 h-5 text-indigo-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      whileHover={{ 
                        color: "#ffffff",
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </motion.svg>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">Location</h4>
                    <p className="text-gray-600">Da Nang, Viet Nam</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com/BoyKa74" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "#4f46e5" 
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/mai-văn-anh-vủ-8793512bb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "#4f46e5" 
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "#4f46e5" 
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              variants={floatingCardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resume / CV</h3>
              <p className="text-gray-600 mb-4">
                Download my resume to learn more about my experience and skills.
              </p>
              <motion.a 
                href="/your-resume.pdf" 
                download 
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg inline-flex items-center hover:bg-indigo-700 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                <motion.svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ y: 2 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </motion.svg>
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm"
              variants={floatingCardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
              
              {submitResult && (
                <motion.div 
                  className={`p-4 mb-6 rounded-lg ${submitResult.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitResult.message}
                </motion.div>
              )}
              
              <motion.form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Hidden fields for EmailJS */}
                <input type="hidden" name="to_name" value="Mai Vủ" />
                <input type="hidden" name="reply_to" value={formData.email} />
                
                <motion.div variants={itemVariants}>
                  <motion.input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)" 
                    }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)" 
                    }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)" 
                    }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-vertical"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)" 
                    }}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 text-white font-medium rounded-lg transition-all ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                    whileHover={!isSubmitting ? { 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)" 
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    transition={{ type: "spring" as const, stiffness: 400 }}
                  >
                    <motion.span
                      animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ 
                        duration: isSubmitting ? 1 : 0, 
                        repeat: isSubmitting ? Infinity : 0 
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 