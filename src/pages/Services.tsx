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
  Award,
  FileCheck,
  Calendar
} from 'lucide-react';
import Header from '../components/services/Header';
import HeroSection from '../components/services/HeroSection';
import StatsSection from '../components/services/StatsSection';
import ProcessSection from '../components/services/ProcessSection';
import ServiceDetailsSection from '../components/services/ServiceDetailsSection';
import PricingSection from '../components/services/PricingSection';
import CTASection from '../components/services/CTASection';
import Footer from '../components/services/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <ProcessSection />
      <ServiceDetailsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
