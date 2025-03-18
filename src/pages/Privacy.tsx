
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="mb-6">
            At esyntagi.gr, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal data.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect personal data through the following means:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Forms (Typeform):</strong> Name, email, phone number.</li>
            <li><strong>Analytics & Tracking:</strong> Google Analytics, Facebook Pixel, Taboola Pixel, Microsoft Clarity.</li>
            <li><strong>Cookies:</strong> Managed via Cookie Bot.</li>
            <li><strong>Scheduling (Calendly):</strong> Data provided when booking a meeting.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>To improve our website and services.</li>
            <li>To provide relevant marketing and advertising.</li>
            <li>To communicate with you based on your preferences.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Sharing Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We do not sell your personal data.</li>
            <li>We may share data with trusted third-party services (e.g., Google, Facebook) for analytics and advertising purposes.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>You have the right to access, modify, or delete your personal data.</li>
            <li>You can opt out of cookies via Cookie Bot settings.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We take appropriate measures to protect your data.</li>
            <li>However, we cannot guarantee complete security in online transmissions.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to Privacy Policy</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We may update this policy periodically. Please review it regularly.</li>
          </ul>
          
          <p className="mt-8">
            For any inquiries, contact us at <a href="mailto:info@advisable.com" className="text-blue-600 hover:underline">info@advisable.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
