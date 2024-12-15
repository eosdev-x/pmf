import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://1drv.ms/i/c/6cb795a80d223b6a/IQQHCtJuyQP9RJ4VKHkWBB7eARrj0zq_CkcM1FN_MjlQ1gs?width=1024")',
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
        <Link 
          to="/donate" 
          className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors animate-fade-in-delay-2"
        >
          Support Our Mission
        </Link>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;