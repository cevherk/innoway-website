import { siteContent } from '@/data/content';

export default function Market() {
  const { title, points } = siteContent.market;
  
  return (
    <section id="market" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-10">{title}</h2>
          
          <div className="bg-white shadow-lg rounded-xl p-8">
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-lg text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Market Opportunity</h3>
            <p className="text-gray-700">
              The global market for sustainable home goods is growing rapidly, with consumers increasingly seeking eco-friendly alternatives. Our focus on upcycled lighting products positions us uniquely in this expanding market segment, where both environmental consciousness and aesthetic appeal drive purchasing decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 