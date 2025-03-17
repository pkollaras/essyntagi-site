
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Laptop, Smartphone, Tablet, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CloudAccessibility = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    threshold: 0.1
  });

  return <section id="cloud" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-esyntagi-700 mb-3">
            Cloud ERP
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Πρόσβαση από Παντού, Οποιαδήποτε Στιγμή</h2>
          <p className="text-xl text-gray-600">
            Αποκτήστε πλήρη προσβασιμότητα στο φαρμακείο σας οπουδήποτε κι αν βρίσκεστε μέσω της cloud πλατφόρμας μας
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left column - Image with cloud infrastructure */}
          <div className={`relative ${isInView ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/public/lovable-uploads/cbc37dff-14fd-4886-88b4-78d64baaa1c1.png" 
                alt="Cloud υποδομή Esyntagi - Πρόσβαση από πολλαπλές συσκευές στο cloud σύστημα" 
                className="w-full h-auto rounded-xl object-cover" 
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-xl"></div>
              
              {/* Device indicators - Both desktop and tablet indicators were removed */}
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass py-2 px-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-esyntagi-600" />
                  <p className="text-xs font-medium">Mobile</p>
                </div>
              </div>
              
              {/* Login URL highlight */}
              <div className="glass absolute bottom-6 left-1/2 -translate-x-1/2 py-2 px-6 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-esyntagi-600" />
                  <p className="text-sm font-medium text-esyntagi-700">app.esyntagi.gr</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Features */}
          <div className={`space-y-8 ${isInView ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Συνδεθείτε στο <span className="text-esyntagi-600">Esyntagi</span> από οποιαδήποτε συσκευή
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-esyntagi-50 p-3 rounded-lg">
                      <Laptop className="h-6 w-6 text-esyntagi-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Υπολογιστές</h4>
                      <p className="text-gray-600 text-sm">Πρόσβαση από οποιονδήποτε υπολογιστή με σύνδεση στο διαδίκτυο</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-esyntagi-50 p-3 rounded-lg">
                      <Tablet className="h-6 w-6 text-esyntagi-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Tablets</h4>
                      <p className="text-gray-600 text-sm">Ιδανικό για χρήση στο χώρο εξυπηρέτησης των πελατών</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-esyntagi-50 p-3 rounded-lg">
                      <Smartphone className="h-6 w-6 text-esyntagi-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Κινητά</h4>
                      <p className="text-gray-600 text-sm">Εύκολη πρόσβαση εν κινήσει, οπουδήποτε βρίσκεστε</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-esyntagi-50 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-esyntagi-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Από παντού</h4>
                      <p className="text-gray-600 text-sm">Απλά συνδεθείτε στο app.esyntagi.gr με τα στοιχεία σας</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Δεν απαιτείται εγκατάσταση</h4>
                  <p className="text-gray-700">Το Esyntagi λειτουργεί πλήρως στο cloud. Δεν χρειάζεται να εγκαταστήσετε λογισμικό ή να ανησυχείτε για ενημερώσεις. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CloudAccessibility;
