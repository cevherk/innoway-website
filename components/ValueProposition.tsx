import React from 'react';

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-8">Value Proposition</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li className="mb-4">
            <strong>Flexibility</strong>
            <p>Customers can choose between a finished product, a DIY kit, or individual components.</p>
          </li>
          <li className="mb-4">
            <strong>Sustainability</strong>
            <p>Our business model encourages recycling and supports the circular economy.</p>
          </li>
          <li className="mb-4">
            <strong>Customization</strong>
            <p>DIY kits allow each customer to create a unique product that fits their taste.</p>
          </li>
          <li className="mb-4">
            <strong>Market Adaptability</strong>
            <p>By offering both ready-made decor and modular DIY options, we cater to a broad customer base.</p>
          </li>
        </ul>
      </div>
    </section>
  );
} 