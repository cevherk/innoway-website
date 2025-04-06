import { siteContent } from '@/data/content';

export default function Hero() {
  const { title, subtitle, introText } = siteContent.home;
  
  return (
    <section id="home" className="relative bg-gradient-to-b from-primary/10 to-white pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-1 text-gray-900 mb-6">{title}</h1>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-6">{subtitle}</p>
          <p className="text-lg md:text-xl text-gray-700 mb-8">{introText}</p>
          <a 
            href="#problem"
            className="btn-primary inline-block"
          >
            Discover
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16">
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
  );
} 