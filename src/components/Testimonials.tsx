"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Mai rebuilt our entire marketing site in under three weeks — pixel-perfect from Figma and noticeably faster. Clear communication from start to finish.",
    name: "James R.",
    role: "Founder · Real Estate SaaS, USA"
  },
  {
    quote:
      "Our Shopify store finally loads fast and looks premium. Conversion is up since launch — worth every dollar.",
    name: "Sarah M.",
    role: "Owner · Sports Retail, Australia"
  },
  {
    quote:
      "He shipped our Flutter app and the AI chat feature ahead of schedule. A rare mix of design sense and engineering depth.",
    name: "Daniel K.",
    role: "CTO · AI Startup, Singapore"
  },
  {
    quote:
      "From Figma to production-ready Next.js without a single missed detail. We still use his component structure today.",
    name: "Emily C.",
    role: "Product Lead · Design Agency, UK"
  },
  {
    quote:
      "Mai maintains our WordPress sites and always responds quickly. Updates, backups, fixes — we never worry about the site anymore.",
    name: "Lisa N.",
    role: "Owner · Beauty & Nails Studio, Australia"
  },
  {
    quote:
      "A dependable partner for long-term projects. Clear estimates, clean code and honest advice on what actually matters.",
    name: "Marcus T.",
    role: "Operations Manager · Fintech, Canada"
  }
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem("theme");
      setIsDarkMode(theme === "dark");
    };
    checkTheme();
    const interval = setInterval(checkTheme, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className={`py-20 transition-all duration-1000 ${
        isDarkMode ? "bg-gray-900/25" : "bg-gradient-to-b from-blue-400/10 via-blue-500/10 to-blue-600/20"
      } relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p
            className={`text-xs font-semibold uppercase tracking-[0.25em] mb-4 ${
              isDarkMode ? "text-gray-400" : "text-white/80"
            }`}
          >
            Testimonials
          </p>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            What Clients Say
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-white/90"}`}>
              5.0 average · clients worldwide
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.5) }}
              className={`flex flex-col rounded-xl p-6 ${
                isDarkMode
                  ? "bg-white/5 backdrop-blur-sm border border-white/10"
                  : "bg-white/15 backdrop-blur-sm border border-white/20"
              } hover:scale-[1.02] transition-all duration-300 ocean-current`}
            >
              <span className="flex items-center gap-1 mb-4">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </span>

              <p className={`text-sm leading-relaxed flex-1 ${isDarkMode ? "text-gray-300" : "text-white/90"}`}>
                “{item.quote}”
              </p>

              <div className={`mt-5 flex items-center gap-3 border-t pt-4 ${
                isDarkMode ? "border-white/10" : "border-white/20"
              }`}>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${
                    isDarkMode
                      ? "bg-gradient-to-br from-blue-500 to-purple-600"
                      : "bg-gradient-to-br from-blue-400 to-indigo-500"
                  }`}
                >
                  {initials(item.name)}
                </span>
                <div>
                  <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-white"}`}>
                    {item.name}
                  </p>
                  <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-white/75"}`}>
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
