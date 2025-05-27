import React from 'react';

const Privacy = () => {
  return (
    <div className="privacy-page py-10 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-6">
        At RightPrice, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Account information (name, email, password)</li>
          <li>Product URLs you choose to track</li>
          <li>Price alert preferences</li>
          <li>Device information and IP address</li>
          <li>Cookies and similar technologies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>To provide and maintain our price tracking service</li>
          <li>To notify you about price changes</li>
          <li>To improve our website and services</li>
          <li>To communicate with you about updates and offers</li>
          <li>To protect against fraudulent or illegal activity</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Data Security</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Access your personal data</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request deletion of your data</li>
          <li>Object to our processing of your data</li>
          <li>Request a copy of your data in a structured format</li>
        </ul>
      </section>

      <div className="bg-gray-100 p-4 rounded-md text-sm mt-6">
        This Privacy Policy was last updated on May 13, 2025. We may update this policy from time to time, and will notify you of any significant changes.
      </div>
    </div>
  );
};

export default Privacy;
