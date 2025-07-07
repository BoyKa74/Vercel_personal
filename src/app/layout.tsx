import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mai Vũ - Full Stack Developer",
  description: "Passionate Full Stack Developer specializing in React, Node.js, and modern web technologies",
};

// Animated Background Component
function AnimatedBackground() {
  return (
    <>
      {/* Dark theme - Space background */}
      <div className="dark-theme-bg fixed inset-0 z-0">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      </div>

      {/* Light theme - Ocean background */}
      <div className="light-theme-bg fixed inset-0 z-0">
        {/* Ocean depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-800"></div>
        
        {/* Underwater light rays */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-yellow-200/30 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-100/40 to-transparent transform -rotate-6 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-3 h-full bg-gradient-to-b from-yellow-200/25 to-transparent transform rotate-8 animate-pulse"></div>
        
        {/* Floating bubbles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Ocean currents */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
        
        {/* Seaweed */}
        <div className="absolute bottom-0 left-10 w-4 h-40 bg-green-800/40 rounded-t-full animate-sway"></div>
        <div className="absolute bottom-0 right-20 w-6 h-48 bg-green-900/30 rounded-t-full animate-sway-delayed"></div>
        <div className="absolute bottom-0 left-1/3 w-3 h-36 bg-emerald-800/35 rounded-t-full animate-sway"></div>
      </div>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Set dark mode as default
              if (!localStorage.getItem('theme')) {
                localStorage.setItem('theme', 'dark');
              }
              
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                document.querySelector('.dark-theme-bg')?.classList.remove('hidden');
                document.querySelector('.light-theme-bg')?.classList.add('hidden');
              } else {
                document.documentElement.classList.remove('dark');
                document.querySelector('.dark-theme-bg')?.classList.add('hidden');
                document.querySelector('.light-theme-bg')?.classList.remove('hidden');
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} relative min-h-screen`}>
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
