import React from 'react';

export default function FinancialForecast() {
  return (
    <section id="financial-forecast" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-10">Financial Forecast</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Projected User Acquisition (Year 1)</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>5,000-10,000 customers in our first year</li>
              <li>Initial traction through early adopters (500-1,000 in first quarter)</li>
              <li>Growth acceleration in Q3-Q4 as marketing efforts and retail partnerships mature</li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-4 text-gray-800">Revenue Projections</h4>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>Annual revenue: $45,000-$60,000</li>
              <li>Basic kits: $7,500 (7,500 units at $1)</li>
              <li>DIY boxes: $22,500 (4,500 boxes at $5)</li>
              <li>Assembled products: $30,000 (3,000 products at $10)</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">First-Year Expenses Typical</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>Production costs (30-40% of revenue): $18,000-$24,000</li>
              <li>Marketing (25-30% initially): $15,000-$18,000</li>
              <li>Operations/fulfillment (15-20%): $9,000-$12,000</li>
              <li>Platform maintenance (5-10%): $3,000-$6,000</li>
              <li>Partnership development costs: $3,000-$5,000</li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-4 text-gray-800">Projected Profit</h4>
            <p className="text-lg text-gray-700">5-15% ($3,000-$9,000)</p>
          </div>
        </div>
      </div>
    </section>
  );
} 