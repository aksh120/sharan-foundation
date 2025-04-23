import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Sharan Foundation's workshops completely changed how our community views gender roles. We've seen real change in attitudes and behaviors.",
    author: "Priya Sharma",
    role: "Community Leader, Patna",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "The entrepreneurship program gave me the skills and confidence to start my own business. Now I can support my family and be a role model for my daughters.",
    author: "Meena Kumari",
    role: "Program Participant",
    image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "As a teacher, I've implemented what I learned from Sharan in my classroom. My students now understand the importance of treating everyone with respect regardless of gender.",
    author: "Rajesh Kumar",
    role: "School Teacher",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-purple-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Voices of Change</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 leading-relaxed">
            Stories from individuals whose lives have been impacted by our work.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                    <div className="flex justify-center mb-6">
                      <Quote className="h-12 w-12 text-purple-200" />
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-lg">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-purple-700" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-purple-700" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}