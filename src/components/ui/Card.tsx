import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false 
}) => {
  return (
    <div className={`
      glass-effect rounded-xl p-6 transition-all duration-300
      ${hover ? 'hover-glow hover:scale-105 hover:-rotate-1 cursor-pointer' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};