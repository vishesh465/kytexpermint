
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  Building2, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Star,
  Menu,
  X,
  ArrowRight,
  Shield,
  Clock,
  Award
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Calculator,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize your tax liability and maximize savings through legal optimization strategies.",
      features: ["Investment Planning", "Retirement Tax Strategy", "Estate Planning", "Business Structure Optimization"]
    },
    {
      icon: FileText,
      title: "Tax Return Filing",
      description: "Professional preparation and filing of individual and business tax returns with accuracy and compliance.",
      features: ["Individual Returns", "Business Returns", "Amended Returns", "Multi-State Filing"]
    },
    {
      icon: Building2,
      title: "GST Filing",
      description: "Complete GST compliance services including registration, filing, and ongoing compliance management.",
      features: ["GST Registration", "Monthly/Quarterly Returns", "Annual Returns", "GST Audit Support"]
    },
    {
      icon: Users,
      title: "Corporate Taxation",
      description: "Comprehensive corporate tax services for businesses of all sizes, ensuring compliance and optimization.",
      features: ["Corporate Returns", "Transfer Pricing", "International Tax", "Merger & Acquisition Tax"]
    }
  ];

  const testimonials = [
    {
      name: "Bhavya Gadiya",
      role: "Business Owner, Arihant Enterprise",
      content: "Know Your Tax helped me save thousands on my business taxes. Their freelancing CA team brings fresh perspectives and modern solutions that perfectly suit our enterprise needs.",
      rating: 5
    },
    {
      name: "Deepesh Jain",
      role: "Software Engineer",
      content: "As a tech professional, I appreciate their digital-first approach. The freelancing CAs understand modern income streams and make tax filing seamless for IT professionals like me.",
      rating: 5
    },
    {
      name: "Chandrajeet Singh Rajawat",
      role: "CEO, Kingdom of Chess",
      content: "Being a startup, we needed tax advisors who understand the unique challenges of new businesses. Their network of freelancing CAs provided innovative solutions that helped us optimize our tax structure from day one.",
      rating: 5
    }
  ];

  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "100+", label: "Freelancing CAs Network" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-blue-600 font-medium">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
              <Link to="/tax-calculator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tax Calculator</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
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
                <Link to="/" className="text-blue-600 font-medium">Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
                <Link to="/tax-calculator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Tax Calculator</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
                <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Tax Solutions for
              <span className="text-blue-600 block">Your Financial Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional taxation services backed by a network of 100+ freelancing CAs. We provide tax planning, return filing, GST compliance, 
              and corporate taxation with modern solutions and fresh perspectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Free Consultation
                </button>
              </Link>
              <Link to="/services">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tax Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive taxation solutions delivered by our network of 100+ freelancing CAs with modern expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="mt-6 text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Know Your Tax?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine fresh expertise, modern technology, and personalized service through our network of freelancing professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Network of 100+ Freelancing CAs</h3>
              <p className="text-gray-600">Access to a vast network of freelancing Chartered Accountants bringing fresh perspectives and modern solutions.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick & Efficient Service</h3>
              <p className="text-gray-600">2 years of focused experience with rapid turnaround times and 24/7 support to meet all your tax deadlines.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Approach</h3>
              <p className="text-gray-600">98% client satisfaction rate with innovative tax strategies and tech-savvy solutions for maximum savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">Ready to optimize your taxes? Contact us for a free consultation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-200 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-blue-100">+91 9982865465</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-200 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-blue-100">info@knowyourtax.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-200 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-blue-100">Durga Nursery Road<br />Udaipur, Rajasthan 313001</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Tax Planning</option>
                    <option>Tax Return Filing</option>
                    <option>GST Filing</option>
                    <option>Corporate Taxation</option>
                    <option>General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
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
    </div>
  );
};

export default Index;
