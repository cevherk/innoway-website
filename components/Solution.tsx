import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function Solution() {
  const { title, models } = siteContent.solution;
  
  return (
    <section id="solution" className="section-padding">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-white/90 rounded-full w-24 h-24 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-primary">{model.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 