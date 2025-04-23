import { ArrowRight, Calendar } from 'lucide-react';

interface NewsItemProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, excerpt, date, image, url }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <a 
          href={url} 
          className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default function News() {
  const newsItems = [
    {
      title: "Sharan Foundation Launches New Gender Equality Curriculum for Schools",
      excerpt: "Our new educational materials have been adopted by 15 schools across Bihar, reaching over 5,000 students with age-appropriate lessons on gender equality.",
      date: "June 15, 2023",
      image: "https://images.pexels.com/photos/8850597/pexels-photo-8850597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "#"
    },
    {
      title: "Annual Women's Entrepreneurship Summit Celebrates Success Stories",
      excerpt: "The summit brought together over 200 women entrepreneurs who have benefited from our business development programs to share their experiences and inspire others.",
      date: "April 22, 2023",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "#"
    },
    {
      title: "New Research Report: The State of Gender Equality in Rural Bihar",
      excerpt: "Our comprehensive study highlights progress made and challenges that remain in achieving gender equality in rural communities across the state.",
      date: "March 8, 2023",
      image: "https://images.pexels.com/photos/6690729/pexels-photo-6690729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "#"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Latest News</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay updated with our recent activities, announcements, and successes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors inline-flex items-center justify-center"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
}