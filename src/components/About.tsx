"use client"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Hello! I&apos;m <span className="font-medium text-indigo-600">Mai Vủ</span>, a passionate Frontend Developer 
              with a strong eye for creating engaging UI effects and animations, and creating intuitive, dynamic user experiences.
            </p>
            
            <p className="text-gray-600 text-lg">
              With a background in Computer Science and a love for clean, efficient code, I enjoy bringing ideas to life in the browser.
              I&apos;m constantly learning new technologies and techniques to stay at the forefront of web development.
            </p>
            
            <p className="text-gray-600 text-lg">
              When I&apos;m not coding, you can find me exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-indigo-600">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-700">Your University Name</p>
                  <p className="text-gray-500 text-sm">2018 - 2022</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-indigo-600">Web Development Bootcamp</h4>
                  <p className="text-gray-700">Coding Academy</p>
                  <p className="text-gray-500 text-sm">2022</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Experience</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Frontend Developer</h4>
                    <p className="text-indigo-600">Company Name</p>
                    <p className="text-gray-500 text-sm">2022 - Present</p>
                    <div className="mt-2 text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Developed responsive web applications using React and Next.js</li>
                        <li>Implemented UI components with Tailwind CSS</li>
                        <li>Collaborated with backend developers to integrate RESTful APIs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Web Development Intern</h4>
                    <p className="text-indigo-600">Internship Company</p>
                    <p className="text-gray-500 text-sm">Summer 2021</p>
                    <div className="mt-2 text-gray-600">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Assisted in building website features using JavaScript and CSS</li>
                        <li>Participated in UI/UX design meetings and implemented design mockups</li>
                        <li>Optimized website performance through code refactoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 