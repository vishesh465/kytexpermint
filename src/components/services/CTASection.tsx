
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section id="contact" className="py-20 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Taxes?</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
        Get started with a free consultation from our network of 100+ freelancing CAs
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/consultation"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Free Consultation
        </Link>
        <a 
          href="tel:+919982865465"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
        >
          Call +91 9982865465
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
