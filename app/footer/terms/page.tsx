import React from 'react';

const Terms = () => {
  return (
    <div className="terms-page py-10 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <p className="mb-6">
        Welcome to RightPrice. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="mb-6">By accessing or using RightPrice, you agree to these Terms and our Privacy Policy.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
        <p className="mb-6">
          RightPrice is a price tracking service that monitors product prices from online retailers. We notify users when price thresholds are met. We do not sell products directly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
        <p className="mb-6">
          You must provide accurate information when creating an account. You are responsible for your account activity and maintaining its security.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">4. Limitations of Service</h2>
        <p className="mb-6">
          We cannot guarantee that all price data will be up to date or error-free. We are not liable for purchasing decisions made using our platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
        <p className="mb-6">
          All content on RightPrice is protected by copyright or intellectual property laws and may not be reused without permission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
        <p className="mb-6">
          RightPrice shall not be liable for any indirect or consequential damages arising from use of the service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">7. Modifications to Terms</h2>
        <p className="mb-6">
          We may update these terms at any time. Continued use of the service implies acceptance of any changes.
        </p>
      </section>

      <div className="bg-gray-100 p-4 rounded-md text-sm mt-6">
        These Terms & Conditions were last updated on May 13, 2025. For questions, contact us at legal@rightprice.com.
      </div>
    </div>
  );
};

export default Terms;
