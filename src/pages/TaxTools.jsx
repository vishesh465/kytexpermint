
import React, { useState } from "react";
import Header from "../components/services/Header";
import Footer from "../components/services/Footer";
import { Link } from "react-router-dom";

const tools = [
  {
    name: "Income Tax Calculator",
    path: "/incometax",
    description: "Calculate your income tax with deduction breakdown."
  },
  {
    name: "GST Registration Eligibility Checker",
    path: "/gst-checker",
    description: "Check if your business needs GST registration."
  },
  {
    name: "EMI Calculator",
    path: "/emi-calculator",
    description: "Estimate your monthly loan payments."
  },
  {
    name: "HRA Calculator",
    path: "/hra-calculator",
    description: "Know how much House Rent Allowance is tax-exempt."
  },
  {
    name: "TDS Deduction Checker",
    path: "/tds-checker",
    description: "Find out how much TDS should be deducted."
  }
];

const TaxTools = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Choose a Tax Tool</h1>
        {!selectedTool ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="border p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                onClick={() => setSelectedTool(tool)}
              >
                <h2 className="text-xl font-semibold text-blue-700">{tool.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{selectedTool.name}</h2>
            <p className="text-gray-600 mb-4">{selectedTool.description}</p>
            <Link
              to={selectedTool.path}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
              Open {selectedTool.name}
            </Link>
            <div className="mt-4">
              <button
                onClick={() => setSelectedTool(null)}
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                ← Back to Tool List
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default TaxTools;
