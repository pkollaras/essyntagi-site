
import { useRef, useState } from 'react';
import { useInView } from '@/utils/animations';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Essyntagi has completely transformed my pharmacy workflow. The prescription management system has reduced errors and saved us countless hours of administrative work.",
    author: "Dr. Sarah Johnson",
    position: "Pharmacist, Memorial Healthcare",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "The invoicing system is intuitive and has improved our billing accuracy significantly. We've reduced outstanding payments by 45% since implementing Essyntagi.",
    author: "Dr. Michael Chen",
    position: "Primary Care Physician, City Clinic",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "Being able to access patient records securely from anywhere has been a game-changer, especially when I'm on call. The interface is clean and easy to navigate.",
    author: "Dr. Emily Parker",
    position: "Pediatrician, Child First Medical",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -z-10 top-0 right-0 h-96 w-96 bg-essyntagi-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -z-10 bottom-0 left-0 h-72 w-72 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-essyntagi-700 mb-3">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trusted by healthcare professionals
          </h2>
          <p className="text-xl text-gray-600">
            Here's what our users have to say about their experience with Essyntagi.
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div className={`max-w-4xl mx-auto relative ${isInView ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="glass-card rounded-2xl p-8 md:p-10">
            {/* Quotation mark */}
            <div className="absolute top-6 left-8 text-5xl text-essyntagi-200 font-serif">"</div>
            
            {/* Testimonial content */}
            <div className="pt-6">
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                {testimonials[activeIndex].content}
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author} 
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].author}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button 
              onClick={goToPrevious} 
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-essyntagi-50 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={goToNext} 
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-essyntagi-50 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? 'w-6 bg-essyntagi-500' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
