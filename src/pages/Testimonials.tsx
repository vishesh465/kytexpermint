import React from "react";
import TestimonialsHeader from "../components/testimonials/TestimonialsHeader";
import FeaturedTestimonial from "../components/testimonials/FeaturedTestimonial";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import StatsSection from "../components/testimonials/StatsSection";
import TestimonialsFooter from "../components/testimonials/TestimonialsFooter";
import { Users, FileText, Calendar, TrendingUp } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Software Engineer",
    company: "Infosys Limited",
    content: "Know Your Tax helped me understand the new tax regime better and saved me over ₹75,000 in taxes this year. Their CA team is extremely knowledgeable and professional.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Bangalore, Karnataka"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    company: "Sharma Trading Co.",
    content: "Excellent GST filing and tax planning services. They helped me structure my business finances properly and ensure full compliance with tax regulations.",
    rating: 5,
    image: "/placeholder.svg",
    location: "New Delhi, India"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Chartered Accountant",
    company: "Patel & Associates",
    content: "As a fellow CA, I appreciate their attention to detail and up-to-date knowledge of tax laws. Great team for complex corporate taxation matters.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Ahmedabad, Gujarat"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "HR Manager",
    company: "Tech Mahindra",
    content: "They simplified my investment planning and helped me maximize tax benefits under Section 80C and 80D. Very responsive and professional service.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Hyderabad, Telangana"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Doctor",
    company: "Apollo Hospitals",
    content: "Managing medical practice taxes was complex until I found Know Your Tax. They handle everything from TDS to advance tax payments seamlessly.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Chennai, Tamil Nadu"
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Investment Consultant",
    company: "HDFC Securities",
    content: "Their expertise in capital gains tax and investment planning is exceptional. Helped me save significantly on LTCG and STCG taxes.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 7,
    name: "Arjun Gupta",
    role: "Startup Founder",
    company: "TechStart Solutions",
    content: "From startup registration to ongoing compliance, they've been our trusted tax partners. Great support for angel tax and ESOP taxation.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Gurgaon, Haryana"
  },
  {
    id: 8,
    name: "Kavitha Nair",
    role: "Finance Manager",
    company: "Wipro Limited",
    content: "Professional, timely, and cost-effective tax services. They helped our company optimize tax planning and maintain perfect compliance records.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Kochi, Kerala"
  }
];

const stats = [
  { number: "5000+", label: "Happy Clients", icon: Users },
  { number: "25000+", label: "Tax Returns Filed", icon: FileText },
  { number: "15+", label: "Years of Experience", icon: Calendar },
  { number: "₹200+", label: "Tax Saved (Crores)", icon: TrendingUp }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TestimonialsHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Real stories from satisfied taxpayers across India
            </p>
          </div>
        </section>

        {/* Featured Testimonial */}
        <FeaturedTestimonial 
          testimonial={testimonials[currentTestimonial]}
          currentTestimonial={currentTestimonial}
          total={testimonials.length}
          next={nextTestimonial}
          prev={prevTestimonial}
          goTo={goToTestimonial}
        />

        {/* Stats Section */}
        <StatsSection stats={stats} />

        {/* All Testimonials Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of satisfied clients who trust us with their taxes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <TestimonialsFooter />
    </div>
  );
};

export default Testimonials;
