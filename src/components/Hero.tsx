import { ArrowRight } from 'lucide-react';
import { Link } from './Link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-teal-900/70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Fostering Gender Justice and Equality
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Empowering communities through education, advocacy, and support to create a more equitable society for all genders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#programs" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors inline-flex items-center justify-center group"
            >
              Our Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md font-medium transition-colors inline-flex items-center justify-center"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}