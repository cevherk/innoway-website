import { siteContent } from '@/data/content';
import Image from 'next/image';

export default function Team() {
  const { title, members } = siteContent.team;
  
  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-tr from-primary/10 to-secondary/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {member.name === "Cevher" ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image 
                        src="/innoway-website/team/cevher.jpg" 
                        alt="Cevher" 
                        width={96} 
                        height={96} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 