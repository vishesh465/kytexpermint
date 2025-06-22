
import React from "react";
import { Link } from "react-router-dom";

const AboutHero: React.FC = () => (
  <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          About
          <span className="text-blue-600 block">Know Your Tax</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We're a young, dynamic team of tax professionals revolutionizing the taxation industry with fresh perspectives, 
          modern technology, and personalized service that puts your financial success first.
        </p>
        <Link
          to="/#contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  </section>
);

export default AboutHero;
