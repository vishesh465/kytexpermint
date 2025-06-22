
import React from "react";
import { Star, MapPin } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  image: string;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center mb-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div className="flex-1">
        <div className="font-bold text-gray-900">{testimonial.name}</div>
        <div className="text-blue-600 text-sm font-medium">{testimonial.role}</div>
        <div className="text-gray-500 text-xs">{testimonial.company}</div>
      </div>
    </div>
    
    <div className="flex mb-3">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
      ))}
    </div>
    
    <p className="text-gray-600 italic leading-relaxed mb-4 text-sm">
      "{testimonial.content}"
    </p>
    
    <div className="flex items-center text-gray-500 text-xs">
      <MapPin className="h-3 w-3 mr-1" />
      {testimonial.location}
    </div>
  </div>
);

export default TestimonialCard;
