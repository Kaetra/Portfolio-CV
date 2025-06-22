import React, { useState } from 'react';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
              My Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents 
              a unique challenge and learning experience in my development journey.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <Star size={24} className="mr-2 text-yellow-400" />
              Featured Projects
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <Card key={project.id} hover className="group cursor-pointer">
                  <div 
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-lg mb-6 bg-dark-700">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-100 group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="primary" size="sm">
                          Featured
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <Badge key={index} variant="secondary" size="sm">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="secondary" size="sm">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      {/* Expanded Content */}
                      {selectedProject === project.id && (
                        <div className="border-t border-dark-600 pt-6 mb-6 space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-100 mb-2">About This Project</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {project.longDescription}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-100 mb-2">All Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary" size="sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        {project.liveUrl && (
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, '_blank');
                            }}
                            className="flex-1"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, '_blank');
                            }}
                            className="flex-1"
                          >
                            <Github size={16} className="mr-2" />
                            Source Code
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-bold text-gray-100 mb-8">All Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} hover className="group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-100 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Star size={16} className="text-yellow-400" />
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="secondary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="flex-1"
                        >
                          <ExternalLink size={14} />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex-1"
                        >
                          <Github size={14} />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  Interested in working together?
                </h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.location.href = 'mailto:kakaputraeka@email.com'}
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};