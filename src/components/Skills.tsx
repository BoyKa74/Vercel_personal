"use client"

import React from "react";

type SkillCategory = {
  name: string;
  skills: Skill[];
};

type Skill = {
  name: string;
  level: number; // 1-5 (beginner to expert)
  icon?: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", level: 5 },
      { name: "CSS3/SCSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "React", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Material UI", level: 4 },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "API Development", level: 4 },
      { name: "GraphQL", level: 3 },
    ]
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 5 },
      { name: "Figma", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Webpack", level: 3 },
      { name: "Jest", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Docker", level: 2 },
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 5 },
      { name: "Communication", level: 4 },
      { name: "Teamwork", level: 5 },
      { name: "Time Management", level: 4 },
      { name: "Adaptability", level: 5 },
    ]
  }
];

const SkillBar = ({ name, level }: Skill) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">
          {level === 1 && "Beginner"}
          {level === 2 && "Elementary"}
          {level === 3 && "Intermediate"}
          {level === 4 && "Advanced"}
          {level === 5 && "Expert"}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full"
          style={{ width: `${level * 20}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Skills</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with regularly.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["AWS", "Three.js", "React Native", "Python"].map((item, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-indigo-100 text-indigo-800 rounded-full font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 