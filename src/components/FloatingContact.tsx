"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

type ContactChannel = {
  label: string;
  href: string;
  icon: ReactNode;
  className: string;
};

const channels: ContactChannel[] = [
  {
    label: "Zalo · 0865 427 034",
    href: "https://zalo.me/84865427034",
    icon: <span className="text-[11px] font-extrabold leading-none">Zalo</span>,
    className: "bg-[#0068FF] hover:bg-[#0057d6]"
  },
  {
    label: "WhatsApp · +84 865 427 034",
    href: "https://wa.me/84865427034",
    icon: <MessageCircle className="h-5 w-5" />,
    className: "bg-[#25D366] hover:bg-[#1eb457]"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/MVAV2k4",
    icon: <Facebook className="h-5 w-5" />,
    className: "bg-[#1877F2] hover:bg-[#0f66d8]"
  },
  {
    label: "Instagram · @oldsouls_04",
    href: "https://www.instagram.com/oldsouls_04/",
    icon: <Instagram className="h-5 w-5" />,
    className: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90"
  },
  {
    label: "Email · maivananhvu.dev@gmail.com",
    href: "mailto:maivananhvu.dev@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    className: "bg-slate-700 hover:bg-slate-600"
  }
];

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-6">
      {channels.map((channel, index) => (
        <motion.a
          key={channel.label}
          href={channel.href}
          target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={channel.label}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex items-center"
        >
          {/* tooltip */}
          <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-lg bg-black/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block">
            {channel.label}
          </span>
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg ring-2 ring-white/20 transition-colors duration-200 md:h-12 md:w-12 ${channel.className}`}
          >
            {channel.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
