import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/6f9be28c-0028-4e58-9cf4-f247b041baea.png" 
              alt="Know Your Tax" 
              className="h-16 w-auto"
            />
            <div className="text-xl font-bold">Know Your Tax</div>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Your trusted partner for all taxation needs. Backed by 100+ freelancing CAs delivering expert advice and modern solutions.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/services" className="hover:text-white transition-colors">Tax Planning</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Tax Return Filing</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">GST Filing</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Corporate Taxation</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-gray-400">
            <div>+91 9982865465</div>
            <div>info@knowyourtax.com</div>
            <div>Durga Nursery Road<br />Udaipur, Rajasthan 313001</div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Know Your Tax. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </div>
  </footer>
);

export default Footer;