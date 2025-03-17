
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/utils/animations';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { threshold: 0.1 });
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 h-72 w-72 bg-essyntagi-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 h-96 w-96 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className={`space-y-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-essyntagi-700 mb-2">
              Cloud-based Healthcare ERP
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Transform your healthcare practice with <span className="text-essyntagi-600">Essyntagi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Streamline prescriptions, manage patients, and simplify invoicing with our intuitive cloud-based ERP system designed specifically for healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-essyntagi-600 hover:bg-essyntagi-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
              <Button variant="outline" className="border-essyntagi-200 text-essyntagi-700 hover:bg-essyntagi-50 rounded-full px-8 py-6 text-lg">
                Request Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-3">TRUSTED BY HEALTHCARE PROFESSIONALS</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-gray-400 font-medium">Memorial Health</div>
                <div className="text-gray-400 font-medium">CarePoint</div>
                <div className="text-gray-400 font-medium">MedLife</div>
                <div className="text-gray-400 font-medium">CityClinic</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className={`relative ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Healthcare professional using Essyntagi" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="glass absolute -top-6 -left-6 p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                  <p className="text-sm font-medium">25 Prescriptions Processed</p>
                </div>
              </div>
              
              <div className="glass absolute -bottom-6 -right-6 p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-essyntagi-500 h-3 w-3 rounded-full"></div>
                  <p className="text-sm font-medium">98% Billing Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
