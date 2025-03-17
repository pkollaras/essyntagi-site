import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/utils/animations';
import { useIsMobile } from '@/hooks/use-mobile';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, {
    threshold: 0.1
  });
  const isMobile = useIsMobile();
  return <section ref={heroRef} className="relative min-h-screen flex items-center pt-16 sm:pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 h-48 sm:h-72 w-48 sm:w-72 bg-esyntagi-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 h-64 sm:h-96 w-64 sm:w-96 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left column - Text */}
          <div className={`space-y-4 sm:space-y-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block glass px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-esyntagi-700 mb-2">Tο νέο Cloud ERP για φαρμακεία</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Μεταμορφώστε τo <span className="text-esyntagi-600">φαρμακείο</span> σας με το Esyntagi
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg">
              Εξελίξτε την εκτέλεση συνταγών, τη δημιουργία καλαθιού με πολλαπλά είδη και την τιμολόγηση μέσω του εξειδικευμένου συστήματος για φαρμακοποιούς.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 py-0">
              <a href="https://form.typeform.com/to/oZoW62gB" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                Ξεκινήστε Δωρεάν
              </a>
              <a href="https://calendly.com/d/cnzm-3d9-xbj/esyntagi" target="_blank" rel="noopener noreferrer" className="border-esyntagi-200 text-esyntagi-700 hover:bg-esyntagi-50 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg border flex items-center justify-center">
                Ζητήστε Παρουσίαση
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-6 sm:pt-8">
              <p className="text-sm text-gray-500 mb-3">
            </p>
              <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
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
          <div className={`relative mt-8 lg:mt-0 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" alt="Φαρμακοποιός που χρησιμοποιεί το Esyntagi" className="w-full h-auto rounded-xl object-cover" />
              </div>
              
              {/* Floating elements - conditionally rendered based on screen size */}
              {!isMobile && <>
                  <div className="glass absolute -top-6 -left-6 p-3 sm:p-4 rounded-lg shadow-lg animate-float hidden sm:block">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-green-500 h-2 sm:h-3 w-2 sm:w-3 rounded-full"></div>
                      <p className="text-xs sm:text-sm font-medium">&quot;32&quot; Συνταγές Εκτελέστηκαν Σήμερα</p>
                    </div>
                  </div>
                  
                  <div className="glass absolute -bottom-6 -right-6 p-3 sm:p-4 rounded-lg shadow-lg animate-float hidden sm:block" style={{
                animationDelay: '1s'
              }}>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-esyntagi-500 h-2 sm:h-3 w-2 sm:w-3 rounded-full"></div>
                      <p className="text-xs sm:text-sm font-medium">Πλήρης Διαχείριση Προϊόντων</p>
                    </div>
                  </div>
                </>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;