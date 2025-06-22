
import React from "react";
import { Calculator, Building2, Users } from "lucide-react";

const TeamNetwork: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Network</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the driving force behind Know Your Tax - our network of young, talented professionals
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Planning Specialists</h3>
          <p className="text-gray-600 leading-relaxed">
            Our team of young CAs specializes in strategic tax planning, helping you minimize liabilities 
            and maximize savings through innovative approaches.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Experts</h3>
          <p className="text-gray-600 leading-relaxed">
            From GST filing to corporate taxation, our compliance experts ensure you stay on top of 
            all regulatory requirements with ease and confidence.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Client Success Team</h3>
          <p className="text-gray-600 leading-relaxed">
            Our dedicated client success team ensures you receive personalized attention and 
            support throughout your journey with us.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TeamNetwork;
