import React from 'react';
import { Code, Server, Database, Wrench as Tool } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { skills } from '../../data/portfolio';

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  tools: Tool,
  other: Tool
};

const categoryColors = {
  frontend: 'primary',
  backend: 'success',
  database: 'warning',
  tools: 'secondary',
  other: 'secondary'
};

export const Skills: React.FC = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & Others',
    other: 'Others'
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              const color = categoryColors[category as keyof typeof categoryColors];
              
              return (
                <Card key={category} hover className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary-500/20 border border-primary-500/30">
                        <Icon size={20} className="text-primary-400" />
                      </div>
                      <h3 className="font-semibold text-gray-100">
                        {categoryNames[category as keyof typeof categoryNames]}
                      </h3>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {categorySkills.map((skill, index) => (
                        <div key={index} className="space-y-2 group">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors">{skill.name}</span>
                            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-105"
                              style={{ 
                                width: `${skill.level}%`,
                                animation: `progressFill 2s ease-out forwards`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Additional Skills as Badges */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant={categoryColors[skill.category] as any}
                  size="md"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};