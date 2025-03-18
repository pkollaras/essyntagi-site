
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
          
          <p className="mb-6">
            Welcome to esyntagi.gr. By accessing or using our website, you agree to comply with and be bound by the following Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Use of Website</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>You must be at least 18 years old to use this website.</li>
            <li>You agree not to use this website for any unlawful purposes.</li>
            <li>We reserve the right to modify or discontinue any part of the website at any time.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>All content, including text, images, and trademarks, is the property of esyntagi.gr or its licensors.</li>
            <li>You may not reproduce, distribute, or use our content without permission.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. User Data and Privacy</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We collect and process data as described in our Privacy Policy.</li>
            <li>By using our website, you consent to data collection through tools such as Google Analytics, Facebook Pixel, and Microsoft Clarity.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We are not responsible for any damages resulting from your use of our website.</li>
            <li>We do not guarantee uninterrupted or error-free service.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We use third-party tools such as Google Tag Manager, Cookie Bot, and Typeform for data collection and marketing.</li>
            <li>Your interactions with third-party services are governed by their respective terms.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We reserve the right to update these Terms at any time. Continued use of the website constitutes acceptance of the revised terms.</li>
          </ul>
          
          <p className="mt-8">
            If you have any questions, please contact us at <a href="mailto:info@advisable.com" className="text-blue-600 hover:underline">info@advisable.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
