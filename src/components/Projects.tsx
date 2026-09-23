"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ExternalLink, Github, Users, Globe, Smartphone, BrainCircuit, Boxes, Sparkles, Lock } from 'lucide-react';
import { projects, type Audience, type Platform } from '@/lib/projects';

type TabId = 'featured' | Platform | 'private';

const platformTabs: { id: TabId; name: string; short: string; icon: ReactNode }[] = [
  { id: 'featured', name: 'Featured', short: 'Featured', icon: <Sparkles className="w-5 h-5" /> },
  { id: 'web', name: 'Web', short: 'Web', icon: <Globe className="w-5 h-5" /> },
  { id: 'mobile', name: 'Mobile App', short: 'Mobile', icon: <Smartphone className="w-5 h-5" /> },
  { id: 'ai', name: 'AI', short: 'AI', icon: <BrainCircuit className="w-5 h-5" /> },
  { id: 'other', name: 'Other', short: 'Other', icon: <Boxes className="w-5 h-5" /> },
  { id: 'private', name: 'Private', short: 'Private', icon: <Lock className="w-5 h-5" /> }
];

const audienceFilters: { id: Audience; name: string }[] = [
  { id: 'client', name: 'Client' },
  { id: 'enterprise', name: 'Enterprise' },
  { id: 'personal', name: 'Personal' },
  { id: 'academic', name: 'Academic' },
  { id: 'learning', name: 'Learning' }
];

const platformEmoji: Record<Platform, string> = {
  web: '🌐',
  mobile: '📱',
  ai: '🧠',
  other: '🧰'
};

const getTabProjects = (tab: TabId) =>
  tab === 'featured'
    ? projects.filter((project) => project.featured)
    : tab === 'private'
      ? projects.filter((project) => project.isPrivate)
      : projects.filter((project) => project.platform === tab);

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<TabId>('featured');
  const [activeFilter, setActiveFilter] = useState<'all' | Audience>('all');
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

  const tabProjects = getTabProjects(activeTab);

  const tabCount = (tab: TabId) => getTabProjects(tab).length;

  const filterCount = (filter: 'all' | Audience) =>
    filter === 'all'
      ? tabProjects.length
      : tabProjects.filter((project) => project.audience === filter).length;

  const availableFilters = audienceFilters.filter((filter) => filterCount(filter.id) > 0);

  const visibleProjects =
    activeFilter === 'all'
      ? tabProjects
      : tabProjects.filter((project) => project.audience === activeFilter);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    const filterStillExists = getTabProjects(tab).some(
      (project) => project.audience === activeFilter
    );
    if (activeFilter !== 'all' && !filterStillExists) {
      setActiveFilter('all');
    }
  };

  const getAudienceColor = (audience: Audience) => {
    switch (audience) {
      case 'client':
        return isDarkMode ? 'text-emerald-400 bg-emerald-400/20' : 'text-emerald-100 bg-emerald-900/40';
      case 'enterprise':
        return isDarkMode ? 'text-sky-400 bg-sky-400/20' : 'text-sky-100 bg-sky-900/40';
      case 'personal':
        return isDarkMode ? 'text-violet-400 bg-violet-400/20' : 'text-violet-100 bg-violet-900/40';
      case 'academic':
        return isDarkMode ? 'text-amber-400 bg-amber-400/20' : 'text-amber-100 bg-amber-900/40';
      case 'learning':
        return isDarkMode ? 'text-rose-400 bg-rose-400/20' : 'text-rose-100 bg-rose-900/40';
      default:
        return isDarkMode ? 'text-gray-400 bg-gray-400/20' : 'text-gray-100 bg-gray-900/40';
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
            {projects.length} projects across web, mobile and AI — live products, client work,
            enterprise platforms, academic research and personal experiments.
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

        {/* Platform Tabs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className={`flex flex-wrap justify-center gap-2 p-2 rounded-xl ${
            isDarkMode
              ? 'bg-white/5 backdrop-blur-sm border border-white/10'
              : 'bg-white/15 backdrop-blur-sm border border-white/20'
          }`}>
            {platformTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-lg transition-all duration-300 ${
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
                <span className="font-medium sm:hidden">{tab.short}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  activeTab === tab.id
                    ? isDarkMode
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-900/20 text-blue-900'
                    : isDarkMode
                      ? 'bg-white/10 text-gray-300'
                      : 'bg-white/20 text-white/90'
                }`}>
                  {tabCount(tab.id)}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Audience Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[{ id: 'all' as const, name: 'All' }, ...availableFilters].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 shadow-lg'
                  : isDarkMode
                    ? 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                    : 'bg-white/15 text-white/80 hover:text-white hover:bg-white/25 border border-white/20'
              } no-spaceship z-30`}
            >
              {filter.name}
              <span className="ml-2 opacity-70">{filterCount(filter.id)}</span>
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={`${activeTab}-${activeFilter}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.github || project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
              className={`group rounded-xl overflow-hidden flex flex-col ${
                isDarkMode
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                  : 'bg-white/15 backdrop-blur-sm border border-white/20'
              } hover:scale-[1.03] transition-all duration-300 ocean-current`}
            >
              {/* Project Header */}
              <div className={`relative h-20 flex items-center justify-between px-5 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20'
                  : 'bg-gradient-to-br from-cyan-300/30 to-blue-400/30'
              }`}>
                <span className="text-3xl opacity-70">{platformEmoji[project.platform]}</span>
                <div className="flex items-center space-x-2">
                  {project.team && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
                      isDarkMode ? 'text-blue-300 bg-blue-300/20' : 'text-blue-100 bg-blue-900/40'
                    }`}>
                      <Users className="w-3 h-3" />
                      <span>Team</span>
                    </span>
                  )}
                  {project.isPrivate && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
                      isDarkMode ? 'text-orange-300 bg-orange-300/20' : 'text-orange-100 bg-orange-900/40'
                    }`}>
                      <Lock className="w-3 h-3" />
                      <span>Private</span>
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAudienceColor(project.audience)}`}>
                    {project.audience.charAt(0).toUpperCase() + project.audience.slice(1)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className={`text-lg font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-white'
                }`}>
                  {project.name}
                </h3>

                <p className={`text-sm mb-4 line-clamp-3 flex-1 ${
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
                  {project.demo && (
                    <motion.a
                      href={project.demo}
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
                      <span className="text-sm font-medium">Live</span>
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg ${
                        project.demo
                          ? isDarkMode
                            ? 'border border-white/20 text-gray-300 hover:bg-white/10'
                            : 'border border-white/30 text-white hover:bg-white/20'
                          : isDarkMode
                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                            : 'bg-yellow-400 hover:bg-yellow-500 text-blue-900'
                      } transition-all duration-300 no-spaceship z-30`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}
                </div>

                {/* Private note */}
                {project.isPrivate && (
                  <p className={`mt-3 text-xs italic leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-white/70'
                  }`}>
                    Private project — due to client and project confidentiality the source code
                    cannot be shared publicly. Contact me if you would like a walkthrough.
                  </p>
                )}
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
