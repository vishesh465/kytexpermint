
import React from "react";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Individual",
    price: "₹2,999",
    period: "per year",
    description: "Perfect for individuals and freelancers",
    features: [
      "Personal tax return filing",
      "Basic tax planning consultation",
      "Email support",
      "Tax compliance calendar",
      "Investment advisory"
    ],
    popular: false
  },
  {
    name: "Business Basic",
    price: "₹9,999",
    period: "per year", 
    description: "Ideal for small businesses and startups",
    features: [
      "Business tax return filing",
      "GST registration & filing",
      "Quarterly tax planning",
      "Phone & email support",
      "Compliance monitoring",
      "Basic bookkeeping advice"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "₹49,999",
    period: "per year",
    description: "Comprehensive solution for large businesses",
    features: [
      "Complete corporate taxation",
      "Advanced tax planning",
      "Transfer pricing services", 
      "24/7 priority support",
      "Dedicated CA assignment",
      "Audit representation",
      "International tax advisory"
    ],
    popular: false
  }
];

const PricingSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
        <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`rounded-xl shadow-lg p-8 ${plan.popular ? 'bg-blue-600 text-white ring-4 ring-blue-200 transform scale-105' : 'bg-white'}`}>
            {plan.popular && (
              <div className="text-center mb-4">
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                {plan.price}
              </div>
              <div className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                {plan.period}
              </div>
              <p className={`mt-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={`flex items-center ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                  <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-blue-200' : 'text-green-500'}`} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
              plan.popular 
                ? 'bg-white text-blue-600 hover:bg-gray-100' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}>
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default PricingSection;
