
import React from "react";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  image: string;
};

interface FeaturedTestimonialProps {
  testimonial: Testimonial;
  currentTestimonial: number;
  total: number;
  next: () => void;
  prev: () => void;
  goTo: (idx: number) => void;
}

const FeaturedTestimonial: React.FC<FeaturedTestimonialProps> = ({
  testimonial,
  currentTestimonial,
  total,
  next,
  prev,
  goTo
}) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
        <Quote className="h-12 w-12 text-blue-600 mb-6 mx-auto" />

        <div className="text-center">
          <div className="flex justify-center mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
            "{testimonial.content}"
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
              <div className="text-blue-600 font-medium">{testimonial.role}</div>
              <div className="text-gray-600 text-sm">{testimonial.company}</div>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {testimonial.location}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button 
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: total }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={next}
            aria-label="Next testimonial"
            className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedTestimonial;
