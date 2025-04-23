import React from 'react';
import { BookOpen, Lightbulb, HeartHandshake, Users } from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  icon, title, description, bgColor, textColor 
}) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}>
      <div className={`${bgColor} p-6`}>
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
      </div>
      <div className="bg-white p-6">
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Programs</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Through our strategic initiatives, we work toward creating lasting change in communities across Bihar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProgramCard 
            icon={<BookOpen className="h-6 w-6 text-white" />}
            title="Gender Education" 
            description="Educational programs for schools and communities challenging gender stereotypes and promoting equality from an early age."
            bgColor="bg-purple-600"
            textColor="text-white"
          />
          <ProgramCard 
            icon={<Users className="h-6 w-6 text-white" />}
            title="Women's Empowerment" 
            description="Skills development, financial literacy, and entrepreneurship training to help women achieve economic independence."
            bgColor="bg-teal-600"
            textColor="text-white"
          />
          <ProgramCard 
            icon={<HeartHandshake className="h-6 w-6 text-white" />}
            title="Support Services" 
            description="Counseling, legal aid, and safe spaces for survivors of gender-based violence and discrimination."
            bgColor="bg-pink-600"
            textColor="text-white"
          />
          <ProgramCard 
            icon={<Lightbulb className="h-6 w-6 text-white" />}
            title="Advocacy & Research" 
            description="Evidence-based advocacy for policy changes and research to address systemic gender inequality in society."
            bgColor="bg-blue-600"
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
}