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
                  {member.name === "Cevher" && (
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                      <Image 
                        src="/innoway-website/team/cevher.jpg" 
                        alt={member.name} 
                        width={192} 
                        height={192} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {member.name === "Selen" && (
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                      <Image 
                        src="/innoway-website/team/selen.jpg" 
                        alt={member.name} 
                        width={192} 
                        height={192} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {member.name === "Seda" && (
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                      <Image 
                        src="/innoway-website/team/seda.jpg" 
                        alt={member.name} 
                        width={192} 
                        height={192} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {member.name === "Aygül" && (
                    <div className="w-48 h-48 rounded-full overflow-hidden">
                      <Image 
                        src="/innoway-website/team/aygul.jpg" 
                        alt={member.name} 
                        width={192} 
                        height={192} 
                        className="object-cover w-full h-full"
                      />
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