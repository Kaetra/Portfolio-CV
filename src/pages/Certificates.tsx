import React from 'react';
import { Award, ExternalLink, Calendar, Building, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { certificates } from '../data/portfolio';

export const CertificatesPage: React.FC = () => {
  const skillsCount = new Set(certificates.flatMap(cert => cert.skills)).size;
  const institutionsCount = new Set(certificates.map(cert => cert.issuer)).size;
  
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
              Certificates & Achievements
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My journey of continuous learning and professional development through 
              industry-recognized certifications and specialized training programs.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {certificates.length}
                </div>
                <div className="text-gray-400 text-sm">Total Certificates</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {skillsCount}
                </div>
                <div className="text-gray-400 text-sm">Skills Validated</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {institutionsCount}
                </div>
                <div className="text-gray-400 text-sm">Institutions</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  <TrendingUp size={24} className="mx-auto" />
                </div>
                <div className="text-gray-400 text-sm">Continuous Learning</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Certificates List */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-8">All Certificates</h2>
            
            {certificates.map((certificate, index) => (
              <Card key={certificate.id} hover className="overflow-hidden">
                <div className="md:flex">
                  {/* Certificate Icon/Number */}
                  <div className="md:w-32 bg-gradient-to-br from-primary-500/20 to-primary-600/20 border-r border-primary-500/30 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full flex items-center justify-center">
                        <Award size={24} className="text-yellow-400" />
                      </div>
                      <div className="text-xs text-gray-500">#{index + 1}</div>
                    </div>
                  </div>
                  
                  {/* Certificate Content */}
                  <div className="flex-1 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-100 mb-2">
                            {certificate.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Building size={14} />
                              <span>{certificate.issuer}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{certificate.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        {certificate.credentialUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(certificate.credentialUrl, '_blank')}
                            className="mt-4 lg:mt-0"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            View Credential
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {certificate.description}
                      </p>
                      
                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">Skills & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {certificate.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="success" size="sm">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Credential ID */}
                      {certificate.credentialId && (
                        <div className="border-t border-dark-600 pt-4">
                          <p className="text-xs text-gray-500">
                            Credential ID: <span className="text-gray-400 font-mono">{certificate.credentialId}</span>
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  Always Learning, Always Growing
                </h3>
                <p className="text-gray-400 mb-6">
                  I believe in continuous learning and staying updated with the latest technologies and best practices.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.location.href = 'mailto:kakaputraeka@email.com'}
                >
                  Let's Discuss Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};