import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Check } from 'lucide-react';
const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    threshold: 0.1
  });
  const benefits = ['Ταχύτατη εκτέλεση ηλεκτρονικών συνταγών μέσω άμεσης σύνδεσης με την ΗΔΙΚΑ', 'Ευέλικτη δημιουργία καλαθιού με Συνταγογραφούμενα, Μη Συνταγογραφούμενα και Παραφαρμακευτικά', 'Πλήρες σύστημα τιμολόγησης (Λιανική, B2B, B2G) προς ασφαλιστικά ταμεία', 'Διαχείριση συνεργαζόμενων ασφαλιστικών ταμείων και αυτόματη υποβολή', 'Πρόσβαση σε αρχικοποιημένη βάση με πάνω από 10.000 προϊόντα παραφαρμάκου', 'Αναλυτικό ιστορικό ασθενών και τετράδειο παραγγελίας για επαναπαραγγελίες'];
  return <section id="benefits" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className={`relative order-2 lg:order-1 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img alt="Σύγχρονο φαρμακείο" className="w-full h-auto rounded-xl object-cover" src="/lovable-uploads/39cc71df-2f2b-4926-a281-11a83159755a.png" />
              </div>
              
              {/* Stats card */}
              <div className="glass absolute top-12 -right-5 p-5 rounded-xl shadow-lg max-w-[220px] animate-float" style={{
              animationDelay: '0.5s'
            }}>
                <h4 className="text-lg font-semibold text-gray-800">Ταχύτητα Εκτέλεσης</h4>
                <div className="flex items-end gap-1 mt-1">
                  <span className="text-3xl font-bold text-esyntagi-600">75%</span>
                  <span className="text-green-500 text-sm mb-1">↑</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Ταχύτερη εκτέλεση συνταγών μέσω διασύνδεσης με ΗΔΙΚΑ</p>
              </div>
              
              {/* Products card */}
              <div className="glass absolute -bottom-6 -left-6 p-5 rounded-xl shadow-lg max-w-[220px] animate-float" style={{
              animationDelay: '1s'
            }}>
                <h4 className="text-lg font-semibold text-gray-800">Βάση Προϊόντων</h4>
                <div className="flex items-end gap-1 mt-1">
                  <span className="text-3xl font-bold text-esyntagi-600">10.000+</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Προϊόντα παραφαρμάκου στην αρχικοποιημένη βάση</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Text */}
          <div className={`space-y-6 order-1 lg:order-2 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-esyntagi-700 mb-2">
              Γιατί να Επιλέξετε το Eprescription
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ολοκληρωμένο σύστημα για φαρμακεία με έμφαση στην εκτέλεση συνταγών
            </h2>
            <p className="text-xl text-gray-600">
              Η πλατφόρμα μας είναι σχεδιασμένη ειδικά για τις ανάγκες των σύγχρονων φαρμακείων, με έμφαση στην εκτέλεση συνταγών, 
              τη δημιουργία καλαθιού και την εξελιγμένη τιμολόγηση συνεργαζόμενων ασφαλιστικών ταμείων.
            </p>
            
            {/* Benefits list */}
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 rounded-full bg-esyntagi-100 p-1">
                    <Check className="h-4 w-4 text-esyntagi-600" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;