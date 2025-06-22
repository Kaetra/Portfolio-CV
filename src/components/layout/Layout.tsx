import React from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      
      {/* Background decoration with animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
    </div>
  );
};