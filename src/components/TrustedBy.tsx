"use client";

import { useEffect, useState } from "react";

const clients = [
  "PaperWorking",
  "Lumionix",
  "NP Sports",
  "SCENTOY",
  "Gluva Health",
  "Pickett Umizaj",
  "Ahavah Care at Home",
  "NairaFix",
  "HT Nails",
  "Soho Nails",
  "Roadmaps.gg",
  "ShinesBudget",
  "Vlux",
  "100nout.by",
  "AlgoBattle",
  "Perfectice",
  "QiQo Folios",
  "BeenaPort"
];

export default function TrustedBy() {
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
      aria-label="Clients"
      className={`relative z-10 border-y py-8 transition-all duration-1000 ${
        isDarkMode
          ? "border-white/10 bg-black/30 backdrop-blur-sm"
          : "border-white/25 bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-xs font-semibold uppercase tracking-[0.25em] mb-6 ${
            isDarkMode ? "text-gray-400" : "text-white/80"
          }`}
        >
          Trusted by teams &amp; brands — 250+ projects delivered
        </p>

        <div className="marquee relative overflow-hidden">
          {/* edge fades */}
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 ${
              isDarkMode
                ? "bg-gradient-to-r from-[#0a0f1c] to-transparent"
                : "bg-gradient-to-r from-[#0b3f78] to-transparent"
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 ${
              isDarkMode
                ? "bg-gradient-to-l from-[#0a0f1c] to-transparent"
                : "bg-gradient-to-l from-[#0b3f78] to-transparent"
            }`}
          />

          <div className="marquee-track items-center gap-10 pr-10">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={`${client}-${index}`}
                className={`whitespace-nowrap text-sm font-semibold tracking-wide transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
