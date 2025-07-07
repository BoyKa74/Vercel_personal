import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mai Vũ - Frontend Developer",
  description: "Passionate Frontend Developer creating modern web experiences",
};

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-all duration-1000">
      {/* Dynamic background that changes based on theme */}
      <div className="absolute inset-0 dark:bg-gray-900 light:bg-gradient-to-br light:from-sky-50 light:via-blue-50 light:to-indigo-100 transition-all duration-1000" />
      
      {/* Animated stars/particles for dark mode */}
      <div className="dark:block light:hidden">
        {/* Large floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/[0.02] to-purple-500/[0.02]" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      {/* Ocean effects for light mode */}
      <div className="light:block dark:hidden">
        {/* Ocean waves */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-100/20 to-transparent" />
        
        {/* Floating bubbles effect */}
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-blue-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-2/3 right-1/5 w-80 h-80 bg-cyan-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-2/3 w-60 h-60 bg-teal-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} transition-colors duration-300`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
