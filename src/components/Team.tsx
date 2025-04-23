import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, social }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
        <p className="text-purple-600 mb-4">{role}</p>
        <p className="text-gray-600 mb-6">{bio}</p>
        <div className="flex space-x-3">
          {social.email && (
            <a 
              href={`mailto:${social.email}`} 
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
          {social.linkedin && (
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {social.twitter && (
            <a 
              href={social.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {social.facebook && (
            <a 
              href={social.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label={`${name}'s Facebook profile`}
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "Anjali Sharma",
      role: "Founder & Executive Director",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With over 15 years of experience in gender justice advocacy, Anjali founded Sharan Foundation to create lasting change in Bihar.",
      social: {
        email: "anjali@sharanfoundation.org",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Vikram Singh",
      role: "Programs Director",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Vikram oversees all educational and community programs, ensuring they effectively address gender inequalities.",
      social: {
        email: "vikram@sharanfoundation.org",
        linkedin: "#"
      }
    },
    {
      name: "Priyanka Patel",
      role: "Outreach Coordinator",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Priyanka develops partnerships with local organizations and government agencies to expand our impact.",
      social: {
        email: "priyanka@sharanfoundation.org",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Rahul Gupta",
      role: "Research Analyst",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Rahul leads our research initiatives to gather data that informs our programs and advocacy efforts.",
      social: {
        email: "rahul@sharanfoundation.org",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Team</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet the dedicated individuals working to advance gender equality in Bihar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}