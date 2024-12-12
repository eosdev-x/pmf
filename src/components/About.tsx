import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Panama Mission Foundation is dedicated to bringing hope, faith, and sustainable development
              to the indigenous communities of Panama's Darién region. Through evangelical outreach
              and community support, we work to transform lives and build lasting relationships.
            </p>
            <p className="text-gray-600 mb-6">
              Since our founding, we have established numerous churches, schools, and medical
              clinics throughout the rainforest villages, creating a network of support and
              spiritual growth for local communities.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Village community"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Local church"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;