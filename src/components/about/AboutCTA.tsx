
import React from "react";
import { Link } from "react-router-dom";

const AboutCTA: React.FC = () => (
  <section className="py-20 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
        Join over 100+ satisfied clients who trust us with their taxation needs. Let our network of 
        freelancing CAs help you optimize your tax strategy today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/consultation"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Free Consultation
        </Link>
        <Link
          to="/services"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
        >
          View Our Services
        </Link>
      </div>
    </div>
  </section>
);

export default AboutCTA;
