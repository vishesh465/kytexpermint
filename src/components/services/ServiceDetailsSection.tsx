
import React, { useState } from "react";
import { Calculator, FileText, Building2, Users, CheckCircle } from "lucide-react";

const detailedServices = [
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Strategic tax planning to minimize your tax liability and maximize savings through legal optimization strategies.",
    price: "₹999",
    features: ["Investment Planning", "Retirement Tax Strategy", "Estate Planning", "Business Structure Optimization", "Tax Loss Harvesting", "Charitable Giving Strategies"],
    process: [
      "Initial Financial Assessment",
      "Tax Strategy Development", 
      "Implementation Planning",
      "Ongoing Monitoring"
    ]
  },
  {
    icon: FileText,
    title: "Tax Return Filing",
    description: "Professional preparation and filing of individual and business tax returns with accuracy and compliance.",
    price: "₹499",
    features: ["Individual Returns", "Business Returns", "Amended Returns", "Multi-State Filing", "E-filing Services", "Audit Support"],
    process: [
      "Document Collection",
      "Return Preparation",
      "Review & Verification",
      "Electronic Filing"
    ]
  },
  {
    icon: Building2,
    title: "GST Filing",
    description: "Complete GST compliance services including registration, filing, and ongoing compliance management.",
    price: "₹3,000",
    features: ["GST Registration", "Monthly/Quarterly Returns", "Annual Returns", "GST Audit Support", "Input Tax Credit Optimization", "Compliance Monitoring"],
    process: [
      "GST Registration",
      "Monthly Return Filing",
      "Compliance Review",
      "Audit Assistance"
    ]
  },
  {
    icon: Users,
    title: "Corporate Taxation",
    description: "Comprehensive corporate tax services for businesses of all sizes, ensuring compliance and optimization.",
    price: "₹9,999 - ₹29,999",
    features: ["Corporate Returns", "Transfer Pricing", "International Tax", "Merger & Acquisition Tax", "Tax Compliance", "Strategic Planning"],
    process: [
      "Corporate Structure Analysis",
      "Tax Strategy Planning",
      "Compliance Management",
      "Ongoing Support"
    ]
  }
];

const ServiceDetailsSection = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const currentService = detailedServices[currentServiceIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Details</h2>
          <p className="text-xl text-gray-600">Explore our comprehensive tax services</p>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {detailedServices.map((service, index) => (
            <button
              key={index}
              onClick={() => setCurrentServiceIndex(index)}
              className={`mx-2 mb-4 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentServiceIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <currentService.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{currentService.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{currentService.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">{currentService.price}</span>
                <span className="text-gray-500 ml-2">starting from</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h4>
              <ul className="space-y-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection; 
