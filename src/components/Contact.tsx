"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
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
  
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "maivananhvu.dev@gmail.com",
      href: "mailto:maivananhvu.dev@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+84 86 542 734",
      href: "tel:+8486542734"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Da Nang, Vietnam",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-20 transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gray-800' 
          : 'bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900'
      } relative overflow-hidden`}
    >
      {/* Ocean effects for light mode */}
      {!isDarkMode && (
        <>
          {/* Deep ocean trenches effect */}
          <div className="absolute top-0 left-1/4 w-3 h-full bg-gradient-to-b from-indigo-300/15 to-transparent transform rotate-2" />
          <div className="absolute top-0 right-1/5 w-1 h-full bg-gradient-to-b from-blue-200/20 to-transparent transform -rotate-6" />
          
          {/* Deep sea creatures simulation */}
          <motion.div
            className="absolute top-1/3 left-1/12 w-4 h-4 bg-cyan-400/35 rounded-full"
            animate={{
              y: [0, -50, 0],
              x: [0, 25, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-2/3 right-1/12 w-2 h-2 bg-teal-300/40 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 3 }}
          />
          
          {/* Ocean floor elements */}
          <motion.div
            className="absolute bottom-0 left-1/12 w-8 h-16 bg-emerald-900/20 rounded-t-full"
            animate={{
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/6 w-6 h-24 bg-green-900/15 rounded-t-full"
            animate={{
              rotate: [0, -4, 4, 0],
              scaleY: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={sectionRef}
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
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-white/90'
            }`}
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? 'text-white' : 'text-white'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className={`flex items-center space-x-4 p-4 rounded-lg ${
                      isDarkMode 
                        ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                        : 'bg-white/10 border border-white/20 hover:bg-white/15'
                    } transition-all duration-300 ocean-current group`}
                  >
                    <div className={`${
                      isDarkMode ? 'text-blue-400' : 'text-yellow-200'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-white/70'
                      }`}>
                        {info.label}
                      </p>
                      <p className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-white'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-white'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300' 
                        : 'bg-white/10 border border-white/20 hover:bg-white/15 text-white'
                    } transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`p-8 rounded-xl ${
              isDarkMode 
                ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
            } ocean-current`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-white/90'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400' 
                        : 'bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-yellow-300'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300`}
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-white/90'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400' 
                        : 'bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-yellow-300'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-white/90'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400' 
                      : 'bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-yellow-300'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300`}
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-white/90'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg resize-none ${
                    isDarkMode 
                      ? 'bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400' 
                      : 'bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-yellow-300'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600'
                } text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    isDarkMode 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                      : 'bg-green-400/30 border border-green-300/50 text-white'
                  }`}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 