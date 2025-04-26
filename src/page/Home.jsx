import { useState } from "react";
import Navbar from "../components/Navbar";
import FAQSection from "../components/FAQ";
import TestimonialSection from "../components/Testimonial";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="text-center px-6 py-20 min-h-[50vh] flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Plan Your Dream Trip Effortlessly
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Create the perfect travel itinerary in just minutes. Organize your
          destinations, activities, and schedules — all in one easy-to-use app.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Planning
        </a>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <FeatureCard
            icon={
              <svg
                className="w-12 h-12 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0057FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            }
            title="Easy Scheduling"
            description="Drag and drop your destinations and activities to customize your day-by-day plan."
          />
          <FeatureCard
            icon={
              <svg
                className="w-12 h-12 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0057FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            }
            title="Custom Destinations"
            description="Add your favorite places, hidden gems, and local attractions to your itinerary."
          />
          <FeatureCard
            icon={
              <svg
                className="w-12 h-12 mx-auto text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m0-4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
                ></path>
              </svg>
            }
            title="Smart Suggestions"
            description="Get recommendations for attractions, restaurants, and activities based on your interests."
          />
        </div>
      </section>

      {/* Testimonial */}
      <TestimonialSection></TestimonialSection>

      {/* FAQ */}
      <FAQSection></FAQSection>

      {/* Call to action */}
      <CTASection></CTASection>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
