"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  
  useEffect(() => {
    // Tải avatar từ localStorage khi component được mount
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);
  
  const handleAvatarClick = () => {
    setShowEditModal(true);
  };
  
  const handleUpdateAvatar = (newAvatar: string) => {
    setAvatar(newAvatar);
    localStorage.setItem('userAvatar', newAvatar);
    setShowEditModal(false);
  };
  
  return (
    <section id="home" className="relative bg-gradient-to-b from-indigo-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              <span className="block">Hi, I&apos;m </span>
              <span className="text-indigo-600">Mai Vủ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Frontend Developer passionate about UI/UX
            </p>
            <p className="text-lg text-gray-600 max-w-2xl">
              I design and build beautiful web applications with a focus on user experience,
              using modern technologies to create responsive and intuitive interfaces.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
              </Link>
              <Link 
                href="#projects"
                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md border border-indigo-200 hover:bg-indigo-50 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div 
            className="w-56 h-56 md:w-72 md:h-72 relative cursor-pointer group"
            onClick={handleAvatarClick}
          >
            <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src={avatar || "/avatar-placeholder.jpg.jpg"} 
                alt="Mai Vủ"
                className="w-full h-full object-cover"
                width={288}
                height={288}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-medium">Edit Avatar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 md:mt-20">
          <div className="flex space-x-6">
            <a 
              href="https://github.com/BoyKa74" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/mai-văn-anh-vủ-8793512bb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:maivananhvu.dev@gmail.com" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Avatar Edit Modal */}
      {showEditModal && (
        <AvatarEditModal 
          currentAvatar={avatar} 
          onClose={() => setShowEditModal(false)}
          onUpdate={handleUpdateAvatar}
        />
      )}
    </section>
  );
};

// Component cho modal chỉnh sửa avatar
const AvatarEditModal = ({ 
  currentAvatar, 
  onClose, 
  onUpdate 
}: { 
  currentAvatar: string; 
  onClose: () => void; 
  onUpdate: (newAvatar: string) => void 
}) => {
  const [previewAvatar, setPreviewAvatar] = useState<string>(currentAvatar);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    
    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewAvatar(result);
    };
    reader.readAsDataURL(selectedFile);
  };
  
  const handleSave = async () => {
    setIsUploading(true);
    
    // Giả lập quá trình tải lên
    setTimeout(() => {
      onUpdate(previewAvatar);
      setIsUploading(false);
    }, 500);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium text-gray-900">Update Your Avatar</h3>
          <button 
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden border-4 border-indigo-100">
            <Image 
              src={previewAvatar || "/avatar-placeholder.jpg.jpg"} 
              alt="Avatar Preview" 
              className="w-full h-full object-cover"
              width={160}
              height={160}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <label className="block">
            <span className="sr-only">Choose file</span>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100
              "
            />
          </label>
          
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isUploading || !previewAvatar || previewAvatar === currentAvatar}
              className={`flex-1 py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white ${
                isUploading || !previewAvatar || previewAvatar === currentAvatar
                  ? 'bg-indigo-400'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isUploading ? 'Uploading...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 