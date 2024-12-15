import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
          Bringing Hope to Darién
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 animate-fade-in-delay">
          Join us in our mission to serve and support communities in Panama's rainforest villages
        </p>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;