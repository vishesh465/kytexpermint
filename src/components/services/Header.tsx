
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ContactDialog from '../ContactDialog';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6f9be28c-0028-4e58-9cf4-f247b041baea.png" 
              alt="Know Your Tax" 
              className="h-20 w-auto"
            />
            <div className="text-2xl font-bold text-gray-900">Know Your Tax</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-blue-600 font-medium">Services</Link>
            <Link to="/tax-calculator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tax Calculator</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
            <ContactDialog />
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/services" className="text-blue-600 font-medium">Services</Link>
              <Link to="/taxtools" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tax Tools</Link>
              <Link to="/tax-calculator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tax Calculator</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
              <div className="pt-2">
                <ContactDialog />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;
