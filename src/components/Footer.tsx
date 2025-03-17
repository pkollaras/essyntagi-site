
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
              Essyntagi is an innovative cloud-based ERP solution designed specifically for healthcare professionals to manage prescriptions, patients, and billing efficiently.
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
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-essyntagi-600 transition">Training</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Essyntagi. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-essyntagi-600 transition">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-essyntagi-600 transition">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-essyntagi-600 transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
