
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { ArrowRight, LogIn } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ctaRef, {
    threshold: 0.1
  });

  return <section id="cta" ref={ctaRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden ${isInView ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-dots">
            <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-white/40 blur-md"></div>
            <div className="absolute bottom-40 left-10 h-24 w-24 rounded-full bg-white/30 blur-sm"></div>
            <div className="absolute bottom-10 right-40 h-16 w-16 rounded-full bg-white/50"></div>
            <div className="absolute top-40 left-40 h-20 w-20 rounded-full bg-white/20 blur-sm"></div>
          </div>
          
          <div className="relative z-10 md:flex md:items-start md:justify-between md:gap-8">
            <div className="text-center md:text-left md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Έτοιμοι να αναβαθμίσετε την εκτέλεση συνταγών στο φαρμακείο σας;
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Συνδεθείτε με εκατοντάδες φαρμακοποιούς που ήδη χρησιμοποιούν το Esyntagi για την εκτέλεση συνταγών, τη δημιουργία καλαθιού και την τιμολόγηση ασφαλιστικών ταμείων.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8 md:mb-0">
                <a 
                  href="https://form.typeform.com/to/oZoW62gB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Δωρεάν Δοκιμή 30 Ημερών
                  <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                </a>
                <a 
                  href="#"
                  className="inline-block border-white border-2 text-white hover:text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium w-full sm:w-auto"
                >
                  Προγραμματίστε Παρουσίαση
                </a>
              </div>
            </div>
            
            {/* Login Card moved from Footer */}
            <div className="mt-10 md:mt-0 flex justify-center md:justify-end md:min-w-80">
              <Card className="w-full max-w-sm shadow-lg border-essyntagi-200 overflow-hidden bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-xl animate-scale-in">
                <CardHeader className="pb-3 bg-gradient-to-r from-essyntagi-600 to-essyntagi-500">
                  <CardTitle className="text-white flex justify-center items-center">
                    <span>Είσοδος στο Σύστημα</span>
                    <LogIn className="h-5 w-5 ml-2" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 text-center">
                  <p className="text-gray-600 mb-4">Συνδεθείτε στην πλατφόρμα για να αποκτήσετε πρόσβαση σε όλες τις υπηρεσίες του esyntagi.gr</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a href="https://app.esyntagi.gr" target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="default" 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-essyntagi-600 to-essyntagi-500 hover:from-essyntagi-700 hover:to-essyntagi-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <span>Είσοδος</span>
                          <LogIn className="h-4 w-4 ml-2" />
                        </Button>
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="p-2 text-center">
                      Μετάβαση στην πλατφόρμα
                    </HoverCardContent>
                  </HoverCard>
                </CardFooter>
              </Card>
            </div>
            
            <p className="text-white/80 mt-6 text-sm">
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;
