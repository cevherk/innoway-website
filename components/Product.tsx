import { siteContent } from '@/data/content';
import Image from 'next/image';

export default function Product() {
  const { title, description } = siteContent.product;
  
  return (
    <section id="product" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">{title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">Eco-friendly</div>
                <div className="bg-secondary/10 px-4 py-2 rounded-full text-secondary font-medium">Sustainable</div>
                <div className="bg-yellow-100 px-4 py-2 rounded-full text-yellow-700 font-medium">Unique Design</div>
                <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-700 font-medium">LED Technology</div>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center shadow-md">
              <Image 
                src="/innoway-website/models/product.jpg" 
                alt="Bottle Lamp Product"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 