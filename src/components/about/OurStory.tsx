
import React from "react";

const OurStory: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We are a small startup, founded in 2025, with a vision to make tax planning and tax return services more accessible, strategic, and modern. 
            Our idea was born out of the need to help young professionals and the new generation of startups with modern ideas of tax planning. 
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            From the very beginning, our goal has been to remove the complexity from taxation and empower professionals and businesses who are shaping the future. 
            Whether you are just starting your career or growing your tech startup, we offer tax planning and tax return solutions tailored for modern needs.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, with a growing network of young, energetic Chartered Accountants and happy clients, we remain committed to innovative, trustworthy, and client-focused tax advisory for the next generation.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            To revolutionize tax advisory services by combining youthful energy, modern technology, and deep 
            expertise to help our clients achieve their financial goals while staying compliant with tax regulations.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become India's most trusted and innovative tax advisory firm, known for our young talent, 
            cutting-edge solutions, and unwavering commitment to client success.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurStory;
