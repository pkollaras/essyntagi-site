import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/utils/animations';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from "sonner";
import { useSmoothCounter } from '@/utils/animations';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [prescriptionCount, setPrescriptionCount] = useState<string>("...");
  const [actualCount, setActualCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiveUpdating, setIsLiveUpdating] = useState<boolean>(false);
  const [resetCounter, setResetCounter] = useState<number>(0);
  const animatedCount = useSmoothCounter(actualCount, 1500, 0);
  const isInView = useInView(heroRef, {
    threshold: 0.1
  });
  useEffect(() => {
    const fetchPrescriptionCount = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api-stg.esyntagi.gr/count', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.success && data.data) {
          setActualCount(parseInt(data.data, 10));
          setPrescriptionCount(data.data.toString());
          console.log('Updated prescription count:', data.data);
        } else {
          throw new Error('Invalid data format');
        }
        setError(null);
      } catch (error) {
        console.error('Error fetching prescription count:', error);
        setActualCount(30);
        setPrescriptionCount("30");
        setError("Αδυναμία σύνδεσης με το server");
        setIsLiveUpdating(false);
        toast.error("Αδυναμία σύνδεσης με το server. Χρησιμοποιείται στατική τιμή.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrescriptionCount();
    return () => {
      setIsLiveUpdating(false);
    };
  }, [isInView]);
  const handleManualRefresh = () => {
    const fetchPrescriptionCount = async () => {
      try {
        setIsLoading(true);
        setActualCount(0);
        setResetCounter(prev => prev + 1);
        const response = await fetch('https://api-stg.esyntagi.gr/count', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.success && data.data) {
          setTimeout(() => {
            setActualCount(parseInt(data.data, 10));
            setPrescriptionCount(data.data.toString());
            toast.success("Επιτυχής ανανέωση δεδομένων");
          }, 100);
        } else {
          throw new Error('Invalid data format');
        }
        setError(null);
      } catch (error) {
        console.error('Error fetching prescription count:', error);
        setTimeout(() => {
          setActualCount(30);
          setPrescriptionCount("30");
          setError("Αδυναμία σύνδεσης με το server");
          toast.error("Αδυναμία σύνδεσης με το server. Χρησιμοποιείται στατική τιμή.");
        }, 100);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrescriptionCount();
  };
  return <section ref={heroRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 h-72 w-72 bg-esyntagi-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 h-96 w-96 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-esyntagi-700 mb-2">Tο νέο Cloud ERP για φαρμακεία</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Ήρθε η νέα εποχή στο <span className="text-esyntagi-600">Φαρμακείο!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Εξελίξτε την εκτέλεση συνταγών, τη δημιουργία καλαθιού με πολλαπλά είδη και την τιμολόγηση μέσω του εξειδικευμένου συστήματος για φαρμακοποιούς.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://form.typeform.com/to/oZoW62gB" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                Ξεκινήστε Δωρεάν
              </a>
              <a href="https://calendly.com/d/cnzm-3d9-xbj/esyntagi" target="_blank" rel="noopener noreferrer" className="border-esyntagi-200 text-esyntagi-700 hover:bg-esyntagi-50 rounded-full px-8 py-6 text-lg border flex items-center justify-center">
                Ζητήστε Παρουσίαση
              </a>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-3">
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-gray-400 font-medium">
                </div>
                <div className="text-gray-400 font-medium">
                </div>
                <div className="text-gray-400 font-medium">
                </div>
                <div className="text-gray-400 font-medium">
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="glass-card rounded-2xl p-1 shadow-xl">
                <img alt="Φαρμακοποιός που χρησιμοποιεί το Esyntagi" className="w-full h-auto rounded-xl object-cover" src="/lovable-uploads/de17b158-9a2b-4df7-8adf-b6d7b22071d5.png" />
              </div>
              
              <div className="glass absolute -top-6 -left-6 p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 h-3 w-3 rounded-full animate-pulse-slow shadow-[0_0_8px_rgba(34,197,94,0.8)] ring-2 ring-green-300 ring-opacity-50"></div>
                  <p className="text-sm font-medium">
                    {isLoading ? <span>Φόρτωση...</span> : error ? <span>{prescriptionCount} Συνταγές Εκτελέστηκαν Σήμερα</span> : <span className="inline-flex items-center">
                        <span className="mr-1 mx-[2px] text-base font-extrabold text-left">
                          <span key={resetCounter} className="inline-block">
                            {animatedCount}
                          </span>
                        </span>
                        <span> Συνταγές Εκτελέστηκαν Σήμερα</span>
                        <button onClick={handleManualRefresh} className="ml-2 p-1 text-gray-500 hover:text-blue-500" title="Ανανέωση τώρα">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 2v6h-6"></path>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                            <path d="M3 22v-6h6"></path>
                            <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                          </svg>
                        </button>
                      </span>}
                  </p>
                </div>
              </div>
              
              <div className="glass absolute -bottom-6 -right-6 p-4 rounded-lg shadow-lg animate-float" style={{
              animationDelay: '1s'
            }}>
                <div className="flex items-center gap-3">
                  <div className="bg-esyntagi-500 h-3 w-3 rounded-full"></div>
                  <p className="text-sm font-medium">Πλήρης Διαχείριση Προϊόντων</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;