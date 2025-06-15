import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 mb-4"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>

          {/* Logo/Brand */}
          <div className="text-2xl font-bold">Sia Duggal</div>
          
          {/* Tagline */}
          <p className="text-gray-400 text-center max-w-md">
            Full Stack Developer passionate about creating exceptional digital experiences
            through clean code and innovative design.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#skills', label: 'Skills' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' }
            ].map(({ href, label }) => (
              <button
                key={href}
                onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-700"></div>

          {/* Copyright */}
          <div className="flex items-center text-sm text-gray-400">
            <span>© 2025 Sia Duggal. Made with</span>
            <Heart size={16} className="mx-2 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>

          {/* Additional Info */}
          <p className="text-xs text-gray-500 text-center">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;