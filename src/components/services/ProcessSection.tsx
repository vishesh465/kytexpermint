
import React from "react";
import { FileCheck, Calculator, FileText, Calendar, ArrowRight } from "lucide-react";

const processSteps = [
  {
    icon: FileCheck,
    title: "Consultation",
    description: "Initial meeting to understand your tax needs and financial situation"
  },
  {
    icon: Calculator,
    title: "Analysis",
    description: "Detailed analysis of your finances to identify tax-saving opportunities"
  },
  {
    icon: FileText,
    title: "Strategy",
    description: "Development of customized tax strategy tailored to your specific needs"
  },
  {
    icon: Calendar,
    title: "Implementation",
    description: "Execution of the tax plan with ongoing monitoring and adjustments"
  }
];

const ProcessSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Simple, transparent, and efficient - here's how we work with you
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <step.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-8 transform translate-x-1/2">
                <ArrowRight className="h-6 w-6 text-gray-300" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
