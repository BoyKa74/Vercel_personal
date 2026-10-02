import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Scene3D from "@/components/Scene3D";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mai Vủ - Full Stack Developer",
  description: "Passionate Full Stack Developer specializing in React, Node.js, and modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
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
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} relative min-h-screen`}>
        <Scene3D />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
