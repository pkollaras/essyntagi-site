
import { useRef } from 'react';
import { useInView, useStaggeredAnimation } from '@/utils/animations';
import { ClipboardList, CreditCard, Users, Calendar, FileText, ChartBar } from 'lucide-react';

const features = [
  {
    icon: <ClipboardList className="h-6 w-6 text-essyntagi-600" />,
    title: 'Prescription Management',
    description: 'Create and manage digital prescriptions with ease, including dosage tracking and refill alerts.'
  },
  {
    icon: <CreditCard className="h-6 w-6 text-essyntagi-600" />,
    title: 'Invoicing & Billing',
    description: 'Generate professional invoices, track payments, and manage financial reports in one place.'
  },
  {
    icon: <Users className="h-6 w-6 text-essyntagi-600" />,
    title: 'Patient Records',
    description: 'Maintain comprehensive patient records with medical history, prescriptions, and payment details.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-essyntagi-600" />,
    title: 'Appointment Scheduling',
    description: 'Efficiently manage your calendar with smart scheduling to reduce wait times and no-shows.'
  },
  {
    icon: <FileText className="h-6 w-6 text-essyntagi-600" />,
    title: 'Document Management',
    description: 'Store and organize all healthcare documents securely with easy retrieval when needed.'
  },
  {
    icon: <ChartBar className="h-6 w-6 text-essyntagi-600" />,
    title: 'Analytics Dashboard',
    description: 'Gain insights into your practice with comprehensive analytics and customizable reports.'
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
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Everything you need to run your healthcare practice
          </h2>
          <p className="text-xl text-gray-600">
            Essyntagi combines all the essential tools in one intuitive platform, saving you time and improving patient care.
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
