import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

const PrivacyPolicyPage = () => {
  return (

    <>
    <HeroSection />

    <div className="py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
        <p className="text-lg text-gray-700">
          At LinkLab, we value your privacy and are committed to protecting your personal data. This privacy policy outlines how we collect, use, and safeguard your information when you visit our website and use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
        <p className="text-lg text-gray-700">
          We collect personal information when you register for an account, join a hackathon, or interact with our platform. The types of information we may collect include:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Name and contact details</li>
          <li>Account login information</li>
          <li>Payment information for event registration (if applicable)</li>
          <li>Usage data (like IP address, browser type, and usage patterns)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
        <p className="text-lg text-gray-700">
          We use your personal information for the following purposes:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>To provide and improve our services</li>
          <li>To communicate with you regarding your participation in hackathons or other events</li>
          <li>To send updates or marketing information (with your consent)</li>
          <li>To process payments and registrations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
        <p className="text-lg text-gray-700">
          We implement robust security measures to protect your data from unauthorized access, use, or disclosure. However, please note that no data transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
        <p className="text-lg text-gray-700">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Access and update your personal information</li>
          <li>Request the deletion of your data (subject to legal requirements)</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-lg text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised policy will be effective immediately upon posting. We encourage you to review this policy periodically.
        </p>
      </section>

      <section className="text-center">
        <p className="text-sm text-gray-500">
          If you have any questions or concerns about this Privacy Policy, please contact us at [support@example.com].
        </p>
      </section>
    </div>

<Footer />
</>
  );
};

export default PrivacyPolicyPage;
