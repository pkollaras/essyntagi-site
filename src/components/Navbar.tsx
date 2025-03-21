import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LogIn, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const navLinks = [{
    id: 'features',
    label: 'Χαρακτηριστικά'
  }, {
    id: 'cloud',
    label: 'Cloud ERP'
  }, {
    id: 'invoicing',
    label: 'Τιμολόγηση'
  }, {
    id: 'benefits',
    label: 'Οφέλη'
  }];

  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10', isScrolled ? 'glass shadow-subtle py-3' : 'bg-transparent')}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <a onClick={() => navigate('/')} className="flex items-center cursor-pointer">
            <img alt="Eprescription Logo" src="/lovable-uploads/020e11ea-4772-415c-9c76-da8f956f25e4.png" className="h-20 w-auto bg-transparent" />
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-gray-700 hover:text-esyntagi-600 hover-underline font-medium transition">
                {link.label}
              </button>)}
            
            <a href="https://form.typeform.com/to/oZoW62gB" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 inline-flex items-center justify-center text-sm font-medium transition-colors">
              Ξεκινήστε
            </a>
            
            <a href="https://app.esyntagi.gr" target="_blank" rel="noopener noreferrer" className="flex items-center text-esyntagi-600 hover:text-esyntagi-700 font-medium transition">
              <span>Login</span>
              <LogIn className="h-4 w-4 ml-1" />
            </a>
          </div>

          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>

        <div className={cn('md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out transform bg-white shadow-lg rounded-b-2xl z-20', isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none')}>
          <div className="px-6 py-6 space-y-3">
            {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="block w-full text-left py-2 text-gray-700 font-medium hover:text-esyntagi-600">
                {link.label}
              </button>)}
            
            <a href="https://form.typeform.com/to/oZoW62gB" target="_blank" rel="noopener noreferrer" className="block w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-center">
              Ξεκινήστε
            </a>
            
            <a href="https://calendly.com/d/cnzm-3d9-xbj/esyntagi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-2 text-esyntagi-600 hover:text-esyntagi-700 font-medium">
              <span>Ζητήστε Παρουσίαση</span>
            </a>
            
            <a href="https://app.esyntagi.gr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-2 text-esyntagi-600 hover:text-esyntagi-700 font-medium">
              <span>Login to App</span>
              <LogIn className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </header>;
};

export default Navbar;
