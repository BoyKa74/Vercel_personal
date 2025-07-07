import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mai Vũ - Frontend Developer",
  description: "Personal portfolio of Mai Vũ, a passionate Frontend Developer",
};

// Animated Background Component
function AnimatedBackground() {
  return (
    <>
      {/* Main animated gradient background */}
      <div className="animated-background"></div>
      
      {/* Mesh gradient overlay */}
      <div className="mesh-gradient"></div>
      
      {/* Stars/Particles */}
      <div className="stars">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating shapes */}
      <div className="floating-shapes">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="floating-shape"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased bg-gray-900 text-white`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
