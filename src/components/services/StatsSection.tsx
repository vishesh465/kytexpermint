
import React from 'react';

const stats = [
  { number: "100+", label: "Happy Clients" },
  { number: "300+", label: "Young CAs Network" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "₹2Cr+", label: "Tax Savings" }
];

const StatsSection = () => (
  <section className="py-16 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-blue-100 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
