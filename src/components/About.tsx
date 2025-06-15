import React from 'react';
import { Award, Coffee, Users, Zap } from 'lucide-react';
import { experiences } from '../data/portfolio';


const About: React.FC = () => {
  const stats = [
    { icon: Coffee, value: '2+', label: 'Years Experience' },
    { icon: Award, value: '12+', label: 'Projects Completed' },
    { icon: Users, value: '8+', label: 'Team Collaborations' },
    { icon: Zap, value: '100%', label: 'Eager to Learn' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a final-year BCA student at Symbiosis International University, I thrive at the intersection of technology, creativity, and impact. With a strong foundation in full-stack development and a sharp eye for data-driven design, I love crafting meaningful digital experiences that not only work—but wow.
            From intuitive front-ends to robust back-ends, I'm driven by the challenge of turning real-world problems into elegant tech solutions. Whether it’s building scalable web apps, streamlining workflows, or uncovering insights from data—I build with purpose, precision, and passion.


          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src='/assets/headshot.jpg'
                alt="Professional headshot"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Bridging Code, Creativity & Community
            </h3>

            <div className="prose prose-lg text-gray-600 space-y-4">
  <p>
    I specialize in building scalable, user-centric web applications using technologies like React, Django, and MySQL. My work blends clean UI/UX design, efficient backend architecture, and data-driven insights to deliver full-stack solutions that are both functional and meaningful.
  </p>

  <p>
    At Bonzai Digital and One Side Digital, I contributed to live product environments—resolving critical bugs, streamlining Django-based workflows, and implementing feature enhancements based on user behavior and analytics. I’ve also developed AI-powered logo detection systems, visualized datasets using R, and built secure e-commerce platforms from the ground up.
  </p>

  <p>
    My technical expertise is complemented by a strong sense of collaboration and leadership. As part of the Placement Team, I’ve led end-to-end coordination of major recruitment drives, bridging communication between recruiters and students. As a Student Buddy, I’ve supported international peers with onboarding, cultural adaptation, and academic transitions—ensuring they feel welcomed and empowered.
  </p>

  <p>
    With a mindset rooted in innovation, I’m always seeking opportunities to create real-world impact through technology—whether it’s through solving complex problems, contributing to inclusive communities, or continuously refining my craft.
  </p>
</div>

          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Journey</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-l-0">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-900">{exp.position}</h4>
                    <span className="text-sm text-blue-600 font-medium">{exp.duration}</span>
                  </div>
                  <p className="text-lg text-blue-700 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
