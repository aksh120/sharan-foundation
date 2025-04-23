import { Users, BookOpen, Award } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Sharan Foundation</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded with a vision to create a world where all genders are treated equally, Sharan Foundation has been working tirelessly since 2015 to promote gender justice and equality across Bihar and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To empower individuals of all genders through education, advocacy, and community support programs that promote equality, justice, and dignity for all.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A world where people of all genders have equal rights, opportunities, and representation in all aspects of society, free from discrimination and violence.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/6551145/pexels-photo-6551145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team members working together" 
              className="rounded-lg shadow-md w-full object-cover h-96"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Our Core Values</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Users className="h-6 w-6 text-purple-600" />}
            title="Inclusivity" 
            description="We embrace diversity and create spaces where everyone feels welcome, respected, and valued regardless of gender, age, or background."
          />
          <ValueCard 
            icon={<BookOpen className="h-6 w-6 text-purple-600" />}
            title="Education" 
            description="We believe in the transformative power of education to challenge stereotypes and create lasting change in attitudes and behaviors."
          />
          <ValueCard 
            icon={<Award className="h-6 w-6 text-purple-600" />}
            title="Integrity" 
            description="We operate with transparency, accountability, and the highest ethical standards in all our programs and partnerships."
          />
        </div>
      </div>
    </section>
  );
}