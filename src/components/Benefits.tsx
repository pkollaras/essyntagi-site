
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Check } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const benefits = [
    'Εξοικονόμηση χρόνου έως 60% στην εκτέλεση ηλεκτρονικών συνταγών',
    'Μείωση λαθών στην τιμολόγηση και βελτίωση του ταμειακού ισοζυγίου',
    'Βελτιστοποίηση διαχείρισης αποθέματος και μείωση νεκρού στοκ',
    'Αυτοματοποίηση αναφορών προς ΕΟΠΥΥ και ασφαλιστικά ταμεία',
    'Πρόσβαση στα δεδομένα του φαρμακείου από οπουδήποτε με ασφάλεια',
    'Πλήρης συμμόρφωση με τη φαρμακευτική νομοθεσία και τον GDPR'
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
                  src="https://images.unsplash.com/photo-1583911860248-4661fe2a2525" 
                  alt="Σύγχρονο φαρμακείο" 
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
                  <span className="text-3xl font-bold text-essyntagi-600">60%</span>
                  <span className="text-green-500 text-sm mb-1">↑</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Ταχύτερη εκτέλεση συνταγών σε σύγκριση με χειροκίνητες μεθόδους</p>
              </div>
              
              {/* Efficiency card */}
              <div 
                className="glass absolute -bottom-6 -left-6 p-5 rounded-xl shadow-lg max-w-[220px] animate-float"
                style={{ animationDelay: '1s' }}
              >
                <h4 className="text-lg font-semibold text-gray-800">Ακρίβεια Τιμολόγησης</h4>
                <div className="flex items-end gap-1 mt-1">
                  <span className="text-3xl font-bold text-essyntagi-600">99.8%</span>
                  <span className="text-green-500 text-sm mb-1">↑</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Εξάλειψη λαθών στην τιμολόγηση φαρμάκων</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Text */}
          <div className={`space-y-6 order-1 lg:order-2 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-essyntagi-700 mb-2">
              Γιατί να Επιλέξετε το Essyntagi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Μετασχηματίστε το φαρμακείο σας με τεχνολογία αιχμής
            </h2>
            <p className="text-xl text-gray-600">
              Η πλατφόρμα μας είναι σχεδιασμένη ειδικά για τις ανάγκες των σύγχρονων φαρμακείων, βελτιστοποιώντας 
              την εκτέλεση συνταγών, τη διαχείριση αποθέματος και την τιμολόγηση.
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
