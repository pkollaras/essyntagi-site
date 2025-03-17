
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Check } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const benefits = [
    'Μείωση του διοικητικού φόρτου εργασίας έως και 40%',
    'Ελαχιστοποίηση σφαλμάτων συνταγογράφησης με έξυπνη επαλήθευση',
    'Αύξηση των εσόδων μέσω βελτιωμένης ακρίβειας τιμολόγησης',
    'Ενίσχυση της ικανοποίησης των ασθενών με ταχύτερη εξυπηρέτηση',
    'Πρόσβαση στα δεδομένα της πρακτικής σας με ασφάλεια από οπουδήποτε',
    'Συμμόρφωση με GDPR και ασφαλής αποθήκευση δεδομένων'
  ];
  
  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className={`relative order-2 lg:order-1 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Τεχνολογία υγειονομικής περίθαλψης" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Stats card */}
              <div 
                className="glass absolute top-12 -right-5 p-5 rounded-xl shadow-lg max-w-[220px] animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <h4 className="text-lg font-semibold text-gray-800">Εξοικονόμηση Χρόνου</h4>
                <div className="flex items-end gap-1 mt-1">
                  <span className="text-3xl font-bold text-essyntagi-600">37%</span>
                  <span className="text-green-500 text-sm mb-1">↑</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Μέσος χρόνος που εξοικονομείται σε διοικητικές εργασίες</p>
              </div>
              
              {/* Efficiency card */}
              <div 
                className="glass absolute -bottom-6 -left-6 p-5 rounded-xl shadow-lg max-w-[220px] animate-float"
                style={{ animationDelay: '1s' }}
              >
                <h4 className="text-lg font-semibold text-gray-800">Φροντίδα Ασθενών</h4>
                <div className="flex items-end gap-1 mt-1">
                  <span className="text-3xl font-bold text-essyntagi-600">24%</span>
                  <span className="text-green-500 text-sm mb-1">↑</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Περισσότερος χρόνος για άμεση φροντίδα ασθενών</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Text */}
          <div className={`space-y-6 order-1 lg:order-2 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-essyntagi-700 mb-2">
              Γιατί να Επιλέξετε το Essyntagi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Μετασχηματισμός της διαχείρισης υγειονομικής πρακτικής
            </h2>
            <p className="text-xl text-gray-600">
              Η πλατφόρμα μας είναι σχεδιασμένη για να βελτιστοποιεί τη ροή εργασίας σας, να μειώνει το διοικητικό φόρτο, 
              και να σας επιτρέπει να επικεντρωθείτε σε αυτό που έχει μεγαλύτερη σημασία – τους ασθενείς σας.
            </p>
            
            {/* Benefits list */}
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1 rounded-full bg-essyntagi-100 p-1">
                    <Check className="h-4 w-4 text-essyntagi-600" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
