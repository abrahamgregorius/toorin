import { useState } from 'react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            index={0}
            question="How do I start using TripPlanner?"
            answer="Sign up for free, and start adding your trips. You can use the drag-and-drop interface to organize your itinerary."
            activeIndex={activeIndex}
            onToggle={handleToggle}
          />
          <FAQItem
            index={1}
            question="Is the Pro plan worth the cost?"
            answer="Yes! The Pro plan includes advanced features like unlimited trips, offline access, and priority support."
            activeIndex={activeIndex}
            onToggle={handleToggle}
          />
          <FAQItem
            index={2}
            question="Can I share my itinerary with others?"
            answer="Yes, you can share your itinerary with friends, family, or colleagues for collaborative planning."
            activeIndex={activeIndex}
            onToggle={handleToggle}
          />
          <FAQItem
            index={3}
            question="Do you offer a money-back guarantee?"
            answer="Yes, we offer a 30-day money-back guarantee on all paid plans if you're not satisfied."
            activeIndex={activeIndex}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </section>
  );
}

function FAQItem({ index, question, answer, activeIndex, onToggle }) {
  const isActive = activeIndex === index;

  return (
    <div className="border-b py-4">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={() => onToggle(index)}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <span
          className={`text-xl transform transition-transform ${isActive ? 'rotate-180' : ''}`}
        >
          &#9660; {/* Down Arrow */}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-screen' : 'max-h-0'}`}
      >
        <p className="text-gray-600 mt-2">{answer}</p>
      </div>
    </div>
  );
}
