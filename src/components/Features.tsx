
import { useRef } from 'react';
import { useInView, useStaggeredAnimation } from '@/utils/animations';
import { ClipboardList, CreditCard, Package, Calendar, FileText, ChartBar, ShoppingCart, User, Database, Truck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const features = [
  {
    icon: <ClipboardList className="h-5 w-5 sm:h-6 sm:w-6 text-esyntagi-600" />,
    title: 'Εκτέλεση Συνταγών',
    description: 'Ταχύτατη εκτέλεση ηλεκτρονικών συνταγών με πλήρη πρόσβαση στο σύστημα ΗΔΙΚΑ και αυτόματο έλεγχο αλληλεπιδράσεων.'
  },
  {
    icon: <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-esyntagi-600" />,
    title: 'Δημιουργία Καλαθιού',
    description: 'Εύκολη δημιουργία καλαθιού με πολλαπλά είδη: Συνταγογραφούμενα Φάρμακα, Μη Συνταγογραφούμενα Φάρμακα και Παραφαρμακευτικά.'
  },
  {
    icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-esyntagi-600" />,
    title: 'Εξελιγμένη Τιμολόγηση',
    description: 'Πλήρες σύστημα τιμολόγησης Λιανικής, B2B και B2G προς ασφαλιστικά ταμεία με αυτόματους υπολογισμούς.'
  },
  {
    icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-esyntagi-600" />,
    title: 'Βάση Προϊόντων',
    description: 'Αρχικοποιημένη βάση με πάνω από 10.000 προϊόντα παραφαρμάκου και πλήρη πρόσβαση μέσω ΗΔΙΚΑ σε φάρμακα.'
  },
  {
    icon: <User className="h-5 w-5 sm:h-6 sm:w-6 text-esyntagi-600" />,
    title: 'Ιστορικό Ασθενή',
    description: 'Ολοκληρωμένη διαχείριση ιστορικού ασθενών, συνταγογραφήσεων και παρακολούθηση θεραπειών.'
  },
  {
    icon: <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-esyntagi-600" />,
    title: 'Τετράδειο Παραγγελίας',
    description: 'Αυτόματη αποθήκευση όλων των πωλήσεων ανά ημέρα για εύκολη επαναπαραγγελία και βελτιστοποίηση αποθέματος.'
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const visibleItems = useStaggeredAnimation(features.length, 150);
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gray-50 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block glass px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-esyntagi-700 mb-3">
            Εξειδικευμένες Λειτουργίες
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Όλα όσα χρειάζεται ένα σύγχρονο φαρμακείο
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Το Esyntagi συνδυάζει τα απαραίτητα εργαλεία για την αποτελεσματική εκτέλεση συνταγών, διαχείριση προϊόντων και τιμολόγηση με συνεργαζόμενα ασφαλιστικά ταμεία.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-4 sm:p-6 transition-all duration-500 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="rounded-full bg-esyntagi-50 p-2 sm:p-3 w-fit mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
