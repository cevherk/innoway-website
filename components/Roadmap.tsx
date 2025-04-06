import { siteContent } from '@/data/content';

export default function Roadmap() {
  const { title, shortTerm, longTerm } = siteContent.roadmap;
  
  return (
    <section id="roadmap" className="section-padding">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-12">{title}</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute h-full w-0.5 bg-primary left-1/2 transform -translate-x-1/2"></div>
            
            {/* Short Term */}
            <div className="relative md:grid md:grid-cols-2 md:gap-16 mb-20">
              <div className="md:text-right">
                <div className="bg-white rounded-lg shadow-md p-6 inline-block">
                  <h3 className="text-xl font-bold text-primary mb-3">Short Term Goals</h3>
                  <p className="text-gray-700">{shortTerm}</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-start">
                <div className="w-6 h-6 rounded-full bg-primary absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-full pl-12">
                  <div className="inline-flex items-center py-2 px-4 bg-primary text-white rounded-full shadow-md">
                    <span>Now - 6 Months</span>
                  </div>
                </div>
              </div>
              
              {/* Mobile milestone */}
              <div className="md:hidden mt-3 mb-10">
                <div className="inline-flex items-center py-2 px-4 bg-primary text-white rounded-full shadow-md">
                  <span>Now - 6 Months</span>
                </div>
              </div>
            </div>
            
            {/* Long Term */}
            <div className="relative md:grid md:grid-cols-2 md:gap-16">
              <div className="md:col-start-2">
                <div className="bg-white rounded-lg shadow-md p-6 inline-block">
                  <h3 className="text-xl font-bold text-secondary mb-3">Long Term Vision</h3>
                  <p className="text-gray-700">{longTerm}</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-end">
                <div className="w-6 h-6 rounded-full bg-secondary absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-full pr-12 text-right">
                  <div className="inline-flex items-center py-2 px-4 bg-secondary text-white rounded-full shadow-md">
                    <span>6 Months - 2 Years</span>
                  </div>
                </div>
              </div>
              
              {/* Mobile milestone */}
              <div className="md:hidden mt-3">
                <div className="inline-flex items-center py-2 px-4 bg-secondary text-white rounded-full shadow-md">
                  <span>6 Months - 2 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 