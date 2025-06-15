import React from 'react';
import { skills } from '../data/portfolio';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development', 
    tools: 'Tools & Technologies',
    design: 'Design & UI/UX'
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-blue-600',
    backend: 'from-green-500 to-green-600',
    tools: 'from-purple-500 to-purple-600',
    design: 'from-pink-500 to-pink-600'
  };

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={24} /> : <LucideIcons.Code size={24} />;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across 
            different areas of development.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, title]) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[category]} text-white mr-4`}>
                          {getIcon(skill.icon)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                          <p className="text-sm text-gray-500 capitalize">{skill.category}</p>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">Proficiency</span>
                          <span className="text-sm font-bold text-gray-900">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[category]} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Analytical Skills', 'Test-Driven Development', 'Attention To Detail', 'Code Review',
              'Technical Report Writing', 'Team Leadership', 'Performance Optimization', 'Team Coorporation'
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg text-center"
              >
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;