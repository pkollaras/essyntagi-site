
import { useRef } from 'react';
import { useInView, useStaggeredAnimation } from '@/utils/animations';
import { ClipboardList, CreditCard, Package, Calendar, FileText, ChartBar } from 'lucide-react';

const features = [
  {
    icon: <ClipboardList className="h-6 w-6 text-essyntagi-600" />,
    title: 'Εκτέλεση Συνταγών',
    description: 'Εκτελέστε ηλεκτρονικές συνταγές γρήγορα και με ακρίβεια, με αυτόματο έλεγχο αλληλεπιδράσεων και δοσολογίας.'
  },
  {
    icon: <CreditCard className="h-6 w-6 text-essyntagi-600" />,
    title: 'Αυτόματη Τιμολόγηση',
    description: 'Δημιουργήστε αυτόματα τιμολόγια και αποδείξεις, με υπολογισμό ΦΠΑ και ενσωμάτωση με ταμειακές μηχανές.'
  },
  {
    icon: <Package className="h-6 w-6 text-essyntagi-600" />,
    title: 'Διαχείριση Αποθέματος',
    description: 'Παρακολουθήστε το απόθεμα φαρμάκων σε πραγματικό χρόνο, με ειδοποιήσεις για χαμηλά αποθέματα και αυτόματες παραγγελίες.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-essyntagi-600" />,
    title: 'Παρακολούθηση Ληξιπρόθεσμων',
    description: 'Εντοπίστε εύκολα φάρμακα κοντά στην ημερομηνία λήξης τους και διαχειριστείτε αποτελεσματικά την αντικατάστασή τους.'
  },
  {
    icon: <FileText className="h-6 w-6 text-essyntagi-600" />,
    title: 'Αναφορές ΕΟΠΥΥ',
    description: 'Δημιουργήστε αυτόματα τις μηνιαίες αναφορές προς τον ΕΟΠΥΥ και άλλα ασφαλιστικά ταμεία, εξοικονομώντας πολύτιμο χρόνο.'
  },
  {
    icon: <ChartBar className="h-6 w-6 text-essyntagi-600" />,
    title: 'Στατιστικά & Αναλύσεις',
    description: 'Παρακολουθήστε την απόδοση του φαρμακείου σας με αναλυτικά γραφήματα πωλήσεων, κερδοφορίας και τάσεων της αγοράς.'
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const visibleItems = useStaggeredAnimation(features.length, 150);
  
  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-essyntagi-700 mb-3">
            Εξειδικευμένες Λειτουργίες
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Όλα όσα χρειάζεται ένα σύγχρονο φαρμακείο
          </h2>
          <p className="text-xl text-gray-600">
            Το Essyntagi συνδυάζει όλα τα απαραίτητα εργαλεία για την αποτελεσματική διαχείριση του φαρμακείου σας, εξοικονομώντας χρόνο και αυξάνοντας την ακρίβεια.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-6 transition-all duration-500 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="rounded-full bg-essyntagi-50 p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
