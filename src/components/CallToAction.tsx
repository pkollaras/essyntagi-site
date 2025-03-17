
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ctaRef, { threshold: 0.1 });
  
  return (
    <section ref={ctaRef} className="py-20">
      <div className="container mx-auto px-6">
        <div 
          className={`bg-gradient-to-r from-esyntagi-600 to-esyntagi-500 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden ${
            isInView ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-dots">
            <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-white/40 blur-md"></div>
            <div className="absolute bottom-40 left-10 h-24 w-24 rounded-full bg-white/30 blur-sm"></div>
            <div className="absolute bottom-10 right-40 h-16 w-16 rounded-full bg-white/50"></div>
            <div className="absolute top-40 left-40 h-20 w-20 rounded-full bg-white/20 blur-sm"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Έτοιμοι να αναβαθμίσετε την εκτέλεση συνταγών στο φαρμακείο σας;
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Συνδεθείτε με εκατοντάδες φαρμακοποιούς που ήδη χρησιμοποιούν το Esyntagi για την εκτέλεση συνταγών, τη δημιουργία καλαθιού και την τιμολόγηση ασφαλιστικών ταμείων.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-esyntagi-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Δωρεάν Δοκιμή 30 Ημερών
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white border-2 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                Προγραμματίστε Επίδειξη
              </Button>
            </div>
            
            <p className="text-white/80 mt-6 text-sm">
              Δεν απαιτείται πιστωτική κάρτα. Πλήρης υποστήριξη. Αναβαθμίστε ή ακυρώστε οποιαδήποτε στιγμή.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
