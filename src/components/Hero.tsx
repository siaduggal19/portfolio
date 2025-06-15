import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full Stack Developer',
    'React & Django Specialist',
    'Data & AI Enthusiast',
    'Tech Community Builder',
  ];

  useEffect(() => {
    const typeText = async () => {
      const currentRoleText = roles[currentRole];

      for (let i = 0; i <= currentRoleText.length; i++) {
        setDisplayText(currentRoleText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      await new Promise(resolve => setTimeout(resolve, 2000));

      for (let i = currentRoleText.length; i >= 0; i--) {
        setDisplayText(currentRoleText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      setCurrentRole((prev) => (prev + 1) % roles.length);
    };

    typeText();
  }, [currentRole]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
              Sia Duggal
            </span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 h-12 flex items-center justify-center">
            <span className="text-blue-200">I'm a </span>
            <span className="ml-2 text-white font-medium min-w-[300px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-12">
            Final-year BCA student at Symbiosis with experience in full-stack development, AI, and research. Passionate about building scalable web apps, solving real-world problems, and driving digital innovation.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: 'https://github.com/siaduggal19', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/sia-duggal-855021300', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:siaduggal00@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label={label}
              target="_blank" rel="noopener noreferrer"
            >
              <Icon size={24} className="group-hover:text-blue-300 transition-colors duration-300" />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <button 
          onClick={scrollToAbout}
          className="animate-bounce hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} className="text-white/70" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
