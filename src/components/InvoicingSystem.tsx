
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Receipt, Building, Building2, Calculator } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const InvoicingSystem = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const isMobile = useIsMobile();

  return (
    <section 
      id="invoicing" 
      ref={sectionRef} 
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block glass px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-esyntagi-700 mb-3">
            Σύστημα Τιμολόγησης
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Εξελιγμένη τιμολόγηση για κάθε είδος συναλλαγής
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Το Esyntagi παρέχει ολοκληρωμένες λύσεις τιμολόγησης για λιανική, επιχειρήσεις και ασφαλιστικά ταμεία
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            className={`glass-card rounded-xl p-4 sm:p-6 transition-all duration-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} 
            style={{ transitionDelay: '0ms' }}
          >
            <div className="rounded-full bg-esyntagi-50 p-2 sm:p-3 w-fit mb-3 sm:mb-4">
              <Receipt className="h-4 w-4 sm:h-6 sm:w-6 text-esyntagi-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Τιμολόγηση Λιανικής</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Αυτόματη έκδοση αποδείξεων και τιμολογίων λιανικής με σύνδεση στο myDATA και συμβατότητα με όλες τις ταμειακές μηχανές.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li>Σύνδεση με όλες τις ταμειακές μηχανές</li>
              <li>Αυτόματος υπολογισμός ΦΠΑ</li>
              <li>Εφαρμογή εκπτώσεων και προσφορών</li>
              <li>Πλήρης συμμόρφωση με myDATA</li>
            </ul>
          </div>

          <div 
            className={`glass-card rounded-xl p-4 sm:p-6 transition-all duration-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} 
            style={{ transitionDelay: '150ms' }}
          >
            <div className="rounded-full bg-esyntagi-50 p-2 sm:p-3 w-fit mb-3 sm:mb-4">
              <Building className="h-4 w-4 sm:h-6 sm:w-6 text-esyntagi-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Τιμολόγηση B2B</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Ολοκληρωμένο σύστημα τιμολόγησης για επιχειρηματικούς πελάτες, με διαχείριση πιστωτικής πολιτικής και ειδικών τιμών.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li>Διαφορετικές τιμολογιακές πολιτικές ανά πελάτη</li>
              <li>Διαχείριση πίστωσης και πληρωμών</li>
              <li>Αυτόματη αποστολή τιμολογίων</li>
              <li>Παρακολούθηση οφειλών και εισπράξεων</li>
            </ul>
          </div>

          <div 
            className={`glass-card rounded-xl p-4 sm:p-6 transition-all duration-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} 
            style={{ transitionDelay: '300ms' }}
          >
            <div className="rounded-full bg-esyntagi-50 p-2 sm:p-3 w-fit mb-3 sm:mb-4">
              <Building2 className="h-4 w-4 sm:h-6 sm:w-6 text-esyntagi-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Τιμολόγηση B2G</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Εξειδικευμένο σύστημα για τιμολόγηση προς ασφαλιστικά ταμεία με αυτόματη δημιουργία αναφορών και καταστάσεων.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li>Διαχείριση συνεργαζόμενων ασφαλιστικών ταμείων</li>
              <li>Αυτόματη δημιουργία μηνιαίων αναφορών</li>
              <li>Υποβολή συνταγών στον ΕΟΠΥΥ και άλλα ταμεία</li>
              <li>Παρακολούθηση πληρωμών από ασφαλιστικά ταμεία</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicingSystem;
