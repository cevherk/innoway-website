import { siteContent } from '@/data/content';

export default function Problem() {
  const { title, text } = siteContent.problem;
  
  return (
    <section id="problem" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-8">{title}</h2>
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 