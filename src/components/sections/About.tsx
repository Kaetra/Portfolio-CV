import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { education } from '../../data/portfolio';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* About Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-6">
                Hello! I'm Berlian Eka
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a love for creating beautiful, 
                  functional, and user-centered digital experiences. With a strong foundation 
                  in modern web technologies, I enjoy turning complex problems into simple, 
                  beautiful and intuitive solutions.
                </p>
                <p>
                  My journey in web development started during my university years, and since 
                  then I've been continuously learning and adapting to new technologies. 
                  I believe in writing clean, efficient code and creating applications that 
                  not only work well but also provide an exceptional user experience.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-6 flex items-center">
                <GraduationCap size={24} className="mr-2 text-primary-400" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="hover:scale-105 transition-transform">
                    <CardHeader>
                      <h4 className="font-semibold text-gray-100">{edu.degree}</h4>
                      <p className="text-primary-400 text-sm">{edu.institution}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>{edu.year}</span>
                        {edu.gpa && (
                          <span className="text-green-400">GPA: {edu.gpa}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};