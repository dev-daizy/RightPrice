import React from 'react';

const About = () => {
  return (
    <div className="about-page py-10 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About RightPrice</h1>
      <p className="mb-4">
        RightPrice was founded in 2023 with a simple mission: to help online shoppers save money by tracking prices and alerting them at the perfect moment to make a purchase.
      </p>
      <p className="mb-4">
        Our technology monitors millions of products across major e-commerce platforms including Amazon and Flipkart. We analyze price patterns, identify trends, and notify you when prices drop to their optimal points.
      </p>
      <p className="mb-6">
        What started as a small project has now grown into a platform trusted by hundreds of thousands of smart shoppers who never overpay for online purchases.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Transparency in all our operations and recommendations</li>
          <li>Customer-first approach in everything we build</li>
          <li>Continuous innovation to improve our service</li>
          <li>Respect for your privacy and data security</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

