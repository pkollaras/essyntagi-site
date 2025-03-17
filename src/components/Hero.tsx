import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/utils/animations';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, {
    threshold: 0.1
  });
  return <section ref={heroRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 h-72 w-72 bg-esyntagi-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 h-96 w-96 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className={`space-y-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-esyntagi-700 mb-2">Tο νέο Cloud ERP για φαρμακεία</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Ήρθε η νέα εποχή στο <span className="text-esyntagi-600">Φαρμακείο</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Εξελίξτε την εκτέλεση συνταγών, τη δημιουργία καλαθιού με πολλαπλά είδη και την τιμολόγηση μέσω του εξειδικευμένου συστήματος για φαρμακοποιούς.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://form.typeform.com/to/oZoW62gB" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                Ξεκινήστε Δωρεάν
              </a>
              <a href="https://calendly.com/d/cnzm-3d9-xbj/esyntagi" target="_blank" rel="noopener noreferrer" className="border-esyntagi-200 text-esyntagi-700 hover:bg-esyntagi-50 rounded-full px-8 py-6 text-lg border flex items-center justify-center">
                Ζητήστε Παρουσίαση
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-3">
            </p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-gray-400 font-medium">
              </div>
                <div className="text-gray-400 font-medium">
              </div>
                <div className="text-gray-400 font-medium">
              </div>
                <div className="text-gray-400 font-medium">
              </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className={`relative ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img alt="Φαρμακοποιός που χρησιμοποιεί το Esyntagi" className="w-full h-auto rounded-xl object-cover" src="/lovable-uploads/de17b158-9a2b-4df7-8adf-b6d7b22071d5.png" />
              </div>
              
              {/* Floating elements */}
              <div className="glass absolute -top-6 -left-6 p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                  <p className="text-sm font-medium">&quot;32&quot; Συνταγές Εκτελέστηκαν Σήμερα</p>
                </div>
              </div>
              
              <div className="glass absolute -bottom-6 -right-6 p-4 rounded-lg shadow-lg animate-float" style={{
              animationDelay: '1s'
            }}>
                <div className="flex items-center gap-3">
                  <div className="bg-esyntagi-500 h-3 w-3 rounded-full"></div>
                  <p className="text-sm font-medium">Πλήρης Διαχείριση Προϊόντων</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;