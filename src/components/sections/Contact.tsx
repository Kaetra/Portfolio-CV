import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/portfolio';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kaetra',
      href: personalInfo.github,
      color: 'text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/berlianekamarsaputera',
      href: personalInfo.linkedin,
      color: 'text-blue-400'
    }
  ];

  return (
    <section className="py-20 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          
          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} hover className="text-center">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-dark-700 flex items-center justify-center mb-3">
                        <Icon size={20} className={method.color} />
                      </div>
                      <h3 className="font-semibold text-gray-100 mb-2">{method.label}</h3>
                      <p className="text-sm text-gray-400 break-all">{method.value}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(method.href, '_blank')}
                      className="w-full"
                    >
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Location */}
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <MapPin size={24} className="text-primary-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-100">Location</h3>
              </div>
              <p className="text-gray-400 mb-6">{personalInfo.location}</p>
              <p className="text-sm text-gray-500">
                Available for remote work and on-site opportunities 
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};