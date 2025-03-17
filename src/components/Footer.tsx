
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-essyntagi-800 mr-1">Essyntagi</span>
              <div className="h-2 w-2 rounded-full bg-essyntagi-500"></div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Το Essyntagi είναι μια καινοτόμος λύση ERP βασισμένη στο cloud, σχεδιασμένη ειδικά για επαγγελματίες υγείας για την αποτελεσματική διαχείριση συνταγών, ασθενών και τιμολόγησης.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-essyntagi-600 transition" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-essyntagi-600 transition" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-essyntagi-600 transition" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-essyntagi-600 transition" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Προϊόν</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Χαρακτηριστικά</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Τιμολόγηση</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Μελέτες Περιπτώσεων</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Κριτικές</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Ενημερώσεις</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Εταιρεία</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Σχετικά με εμάς</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Καριέρα</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Ιστολόγιο</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Απόρρητο</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Όροι Χρήσης</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Υποστήριξη</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Κέντρο Βοήθειας</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Επικοινωνία</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Κοινότητα</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Κατάσταση</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Εκπαίδευση</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Essyntagi. Με επιφύλαξη παντός δικαιώματος.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-essyntagi-600 transition">Πολιτική Απορρήτου</a>
              <a href="#" className="text-sm text-gray-500 hover:text-essyntagi-600 transition">Όροι Υπηρεσίας</a>
              <a href="#" className="text-sm text-gray-500 hover:text-essyntagi-600 transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
