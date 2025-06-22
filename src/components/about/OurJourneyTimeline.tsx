
import React from "react";

const timeline = [
  {
    year: "2024",
    title: "The Spark",
    description:
      "Inspired by the challenges faced by India's new generation of professionals and startups, our founder came up with the idea to simplify tax planning and returns using fresh, modern strategies.",
  },
  {
    year: "2025",
    title: "Official Launch",
    description:
      "Know Your Tax was born as a small, dynamic startup focused on making tax planning easy and accessible for young professionals and modern startups.",
  },
  {
    year: "2025",
    title: "First Clients & Momentum",
    description:
      "Gained our first wave of clients and earned their trust with innovative, personalized tax services. A growing network of young, energetic CAs joined the mission.",
  },
  {
    year: "Today",
    title: "Empowering a New Generation",
    description:
      "We continue to support ambitious professionals and startups with technology-driven tax advisory, focused on growth, compliance, and financial confidence.",
  },
];

const OurJourneyTimeline: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From a small startup to a network of 300+ young CAs, here's how we've grown
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
            <div className="bg-blue-600 text-white text-xl font-bold py-4 px-6 rounded-lg mb-4 md:mb-0 md:mr-8">
              {item.year}
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurJourneyTimeline;
