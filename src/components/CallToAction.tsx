
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ctaRef, {
    threshold: 0.1
  });
  const isMobile = useIsMobile();
  
  return (
    <section id="cta" ref={ctaRef} className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* CTA section - now takes full width */}
        <div className={`bg-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden ${isInView ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Decorative elements - only show on non-mobile */}
          {!isMobile && (
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-dots">
              <div className="absolute top-10 right-10 h-20 sm:h-40 w-20 sm:w-40 rounded-full bg-white/40 blur-md"></div>
              <div className="absolute bottom-20 sm:bottom-40 left-5 sm:left-10 h-12 sm:h-24 w-12 sm:w-24 rounded-full bg-white/30 blur-sm"></div>
              <div className="absolute bottom-5 sm:bottom-10 right-20 sm:right-40 h-8 sm:h-16 w-8 sm:w-16 rounded-full bg-white/50"></div>
              <div className="absolute top-20 sm:top-40 left-20 sm:left-40 h-10 sm:h-20 w-10 sm:w-20 rounded-full bg-white/20 blur-sm"></div>
            </div>
          )}
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Έτοιμοι να αναβαθμίσετε την εκτέλεση συνταγών στο φαρμακείο σας;
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
              Συνδεθείτε με εκατοντάδες φαρμακοποιούς που ήδη χρησιμοποιούν το Esyntagi για την εκτέλεση συνταγών, τη δημιουργία καλαθιού και την τιμολόγηση ασφαλιστικών ταμείων.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://form.typeform.com/to/oZoW62gB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                Δωρεάν Δοκιμή 30 Ημερών
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="https://calendly.com/d/cnzm-3d9-xbj/esyntagi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                Ζητήστε Παρουσίαση
              </a>
            </div>
            
            <p className="text-white/80 mt-6 text-sm">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
