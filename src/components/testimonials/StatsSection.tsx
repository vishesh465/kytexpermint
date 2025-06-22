
import React from "react";

interface Stat {
  number: string;
  label: string;
  icon: React.ElementType;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => (
  <section className="py-16 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-blue-100 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
