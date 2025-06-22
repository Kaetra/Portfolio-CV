import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
// import { Certificates } from '../components/sections/Certificates';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      {/* <Certificates /> */}
      <Contact />
    </div>
  );
};