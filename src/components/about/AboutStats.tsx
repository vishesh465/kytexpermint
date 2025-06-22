
import React from "react";

interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: "100+", label: "Freelancing CAs in Network" },
  { number: "100+", label: "Satisfied Clients" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "2", label: "Years of Excellence" }
];

const AboutStats: React.FC = () => (
  <section className="py-16 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-blue-100 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutStats;
