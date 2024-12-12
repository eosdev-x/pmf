import React from 'react';
import { Users, School, Heart, Church } from 'lucide-react';

const ImpactCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex flex-col items-center text-center">
      <div className="bg-green-100 p-3 rounded-full mb-4">
        <Icon className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ImpactCard
            icon={Users}
            title="Communities Served"
            description="Supporting over 20 indigenous communities in Darién"
          />
          <ImpactCard
            icon={School}
            title="Education"
            description="Established 5 learning centers for children"
          />
          <ImpactCard
            icon={Heart}
            title="Healthcare"
            description="Provided medical assistance to 1000+ individuals"
          />
          <ImpactCard
            icon={Church}
            title="Spiritual Growth"
            description="Built 8 community churches and training centers"
          />
        </div>
      </div>
    </section>
  );
};

export default Impact;