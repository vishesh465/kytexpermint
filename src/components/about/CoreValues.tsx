
import React from "react";
import { Shield, Award, Clock, Users } from "lucide-react";

const teamValues = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our tax advisory services, ensuring complete transparency and honesty.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our team of young CAs brings innovative solutions and cutting-edge tax strategies to maximize your savings.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Quick turnaround times and 24/7 support ensure you never miss important tax deadlines.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Every solution is tailored to your unique needs, whether you're an individual or a large corporation.",
  },
];

const CoreValues: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The principles that guide everything we do and shape our relationships with clients
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamValues.map((value, idx) => (
          <div key={idx} className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <value.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
            <p className="text-gray-600 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;
