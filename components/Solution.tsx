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
              <div className="h-64 bg-gradient-to-r from-primary/10 to-secondary/10 relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  {model.id === "model-1" && (
                    <Image 
                      src="/models/model-1.jpg" 
                      alt={model.title}
                      width={300}
                      height={240}
                      className="object-cover"
                    />
                  )}
                  {model.id === "model-2" && (
                    <Image 
                      src="/models/model-2.jpg" 
                      alt={model.title}
                      width={300}
                      height={240}
                      className="object-cover"
                    />
                  )}
                  {model.id === "model-3" && (
                    <Image 
                      src="/models/model-3.jpg" 
                      alt={model.title}
                      width={300}
                      height={240}
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{model.title}</h3>
                <p className="text-gray-700">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 