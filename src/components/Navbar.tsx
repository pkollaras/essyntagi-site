
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
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

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isScrolled ? 'glass shadow-subtle py-3' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/75ae7818-724d-4497-a3f7-9179f03de6a6.png" 
              alt="Eprescription Logo" 
              className="h-10 mr-2"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-essyntagi-600 hover-underline font-medium transition"
            >
              Χαρακτηριστικά
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-essyntagi-600 hover-underline font-medium transition"
            >
              Οφέλη
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-essyntagi-600 hover-underline font-medium transition"
            >
              Μαρτυρίες
            </a>
            <Button 
              className="bg-essyntagi-600 hover:bg-essyntagi-700 text-white rounded-full px-6"
            >
              Ξεκινήστε
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out transform bg-white glass shadow-lg rounded-b-2xl z-20',
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : '-translate-y-full opacity-0 pointer-events-none'
          )}
        >
          <div className="px-6 py-6 space-y-3">
            <a
              href="#features"
              className="block py-2 text-gray-700 font-medium hover:text-essyntagi-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Χαρακτηριστικά
            </a>
            <a
              href="#benefits"
              className="block py-2 text-gray-700 font-medium hover:text-essyntagi-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Οφέλη
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-gray-700 font-medium hover:text-essyntagi-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Μαρτυρίες
            </a>
            <Button 
              className="w-full mt-3 bg-essyntagi-600 hover:bg-essyntagi-700 text-white rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ξεκινήστε
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
