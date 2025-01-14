import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

const TermsOfServicePage = () => {
  return (

    <>
    <HeroSection />

    <div className="py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Terms of Service</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
        <p className="text-lg text-gray-700">
          Welcome to LinkLab! By using our services, you agree to comply with the following terms and conditions. Please read these terms carefully before accessing or using our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
        <p className="text-lg text-gray-700">
          By accessing or using LinkLab, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you should not use our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Responsibilities</h2>
        <p className="text-lg text-gray-700">
          As a user of our platform, you agree to:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Provide accurate information during registration and account management.</li>
          <li>Use the platform only for lawful purposes and not for any illegal activities.</li>
          <li>Respect the intellectual property and privacy rights of other users.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
        <p className="text-lg text-gray-700">
          All content provided by LinkLab, including but not limited to text, images, videos, and software, is the intellectual property of LinkLab and is protected by copyright laws. You may not copy, modify, distribute, or use this content without our express permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
        <p className="text-lg text-gray-700">
          LinkLab is not liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use our platform. We are also not responsible for any damages caused by third-party services linked to our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
        <p className="text-lg text-gray-700">
          We reserve the right to update or modify these Terms of Service at any time. Any changes will be posted on this page, and the revised terms will become effective immediately upon posting. Please review this page periodically for updates.
        </p>
      </section>

      <section className="text-center">
        <p className="text-sm text-gray-500">
          If you have any questions or concerns about these Terms of Service, please contact us at [support@example.com].
        </p>
      </section>
    </div>

<Footer />
</>
  );
};

export default TermsOfServicePage;
