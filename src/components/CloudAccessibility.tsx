
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Laptop, Smartphone, Tablet, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const CloudAccessibility = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    threshold: 0.1
  });
  const isMobile = useIsMobile();
  
  return (
    <section id="cloud" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block glass px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-esyntagi-700 mb-3">
            Cloud ERP
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Πρόσβαση από Παντού, Οποιαδήποτε Στιγμή</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Αποκτήστε πλήρη προσβασιμότητα στο φαρμακείο σας οπουδήποτε κι αν βρίσκεστε μέσω της cloud πλατφόρμας μας
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left column - Image */}
          <div className={`relative ${isInView ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cloud access to Esyntagi from multiple devices" className="w-full h-auto rounded-xl object-cover" />
              
              {/* Floating devices overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-xl"></div>
              
              {/* Login URL highlight - show on all devices */}
              <div className="glass absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 py-1 sm:py-2 px-4 sm:px-6 rounded-full shadow-lg">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-esyntagi-600" />
                  <p className="text-xs sm:text-sm font-medium text-esyntagi-700">app.esyntagi.gr</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Features */}
          <div className={`space-y-6 sm:space-y-8 ${isInView ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Συνδεθείτε στο <span className="text-esyntagi-600">Esyntagi</span> από οποιαδήποτε συσκευή
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-esyntagi-50 p-2 sm:p-3 rounded-lg">
                      <Laptop className="h-4 w-4 sm:h-6 sm:w-6 text-esyntagi-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Υπολογιστές</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Πρόσβαση από οποιονδήποτε υπολογιστή με σύνδεση στο διαδίκτυο</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-esyntagi-50 p-2 sm:p-3 rounded-lg">
                      <Tablet className="h-4 w-4 sm:h-6 sm:w-6 text-esyntagi-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Tablets</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Ιδανικό για χρήση στο χώρο εξυπηρέτησης των πελατών</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-esyntagi-50 p-2 sm:p-3 rounded-lg">
                      <Smartphone className="h-4 w-4 sm:h-6 sm:w-6 text-esyntagi-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Κινητά</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Εύκολη πρόσβαση εν κινήσει, οπουδήποτε βρίσκεστε</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-esyntagi-50 p-2 sm:p-3 rounded-lg">
                      <Globe className="h-4 w-4 sm:h-6 sm:w-6 text-esyntagi-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Από παντού</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Απλά συνδεθείτε στο app.esyntagi.gr με τα στοιχεία σας</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-100 p-1 sm:p-2 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Δεν απαιτείται εγκατάσταση</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">Το Esyntagi λειτουργεί πλήρως στο cloud. Δεν χρειάζεται να εγκαταστήσετε λογισμικό ή να ανησυχείτε για ενημερώσεις. 
Όλα τα δεδομένα είναι διαθέσιμα 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudAccessibility;
