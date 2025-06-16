import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects, volunteering } from '../data/portfolio';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [imageIndex, setImageIndex] = useState(0); // Shared index for all projects

  // Cycle imageIndex every 7 seconds for synchronized image changes
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Filter projects based on filter state
  const filteredProjects = projects.filter(project =>
    filter === 'all' || project.featured
  );
  const [volImageIndices, setVolImageIndices] = useState<number[]>(() =>
      volunteering.map(() => 0)
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setVolImageIndices(prevIndices =>
          prevIndices.map((index, i) => {
            const images = volunteering[i].images || [volunteering[i].image];
            return (index + 1) % images.length;
          })
        );
      }, 5000); // 30 seconds

      return () => clearInterval(interval);
    }, []);

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my recent work, featuring full-stack applications built with 
            modern technologies and best practices.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            // Safely get the images array or fallback to empty
            const imgs = project.images && project.images.length > 0 ? project.images : [project.image];
            // Calculate image to show based on shared imageIndex
            const currentImage = imgs[imageIndex % imgs.length];

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="relative group">
                  <img
                    src={currentImage}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform scale-90 group-hover:scale-100"
                    >
                      View Details
                    </button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-200"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Volunteering Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Volunteering Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {volunteering.map((exp, i) => {
              const images = exp.images || [exp.image];
              const currentImage = images[volImageIndices[i] % images.length];

              return (
                <div
                  key={exp.id}
                  className="bg-white p-8 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                  <img
                    src={currentImage}
                    alt={exp.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">{selectedProjectData.title}</h3>
                  {selectedProjectData.featured && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {selectedProjectData.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {selectedProjectData.demoUrl && (
                    <a
                      href={selectedProjectData.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProjectData.githubUrl && (
                    <a
                      href={selectedProjectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 font-medium transition-colors duration-200"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
