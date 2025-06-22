import React from 'react';
import { Download, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 sm:w-56 sm:h-56 mx-auto relative group">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-dark-900"></div>
              </div>
              
              {/* Profile Photo */}
              <div className="absolute inset-1 rounded-full overflow-hidden bg-dark-800 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={personalInfo.photo || "/api/placeholder/160/160"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                  e.currentTarget.style.display = 'none';
                  if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback initials */}
                <div className="absolute inset-0 bg-dark-800 flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-3xl sm:text-4xl font-bold gradient-text">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-bounce delay-300 shadow-lg shadow-green-500/50"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-500 rounded-full animate-pulse delay-700 shadow-lg shadow-primary-500/50"></div>
            </div>
          </div>
          
          {/* Name and Title with Animation */}
          <div className="animate-fade-in-up delay-300">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-100 mb-4 animate-fade-in-up">
              {personalInfo.name}
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-500">
            <h2 className="text-xl sm:text-2xl gradient-text font-semibold mb-4 animate-pulse">
              {personalInfo.title}
            </h2>
          </div>
          
          <div className="animate-fade-in-up delay-700">
            <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
              {personalInfo.subtitle}
            </p>
          </div>
          
          {/* Location with Animation */}
          <div className="animate-fade-in-up delay-900 flex items-center justify-center space-x-2 text-gray-400 mb-8">
            <MapPin size={18} className="animate-bounce" />
            <span>{personalInfo.location}</span>
          </div>
          
          {/* Action Buttons with Animation */}
          <div className="animate-fade-in-up delay-1000 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">
              <Download size={18} className="mr-2" />
              Download CV
            </Button>
            
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(personalInfo.github, '_blank')}
                className="hover:scale-110 transition-transform hover:rotate-12"
              >
                <Github size={18} />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(personalInfo.linkedin, '_blank')}
                className="hover:scale-110 transition-transform hover:-rotate-12"
              >
                <Linkedin size={18} />
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};