export default function TestimonialSection() {
  return (
    <section className="px-6 py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="space-y-8">
          <Testimonial
            name="John Doe"
            feedback="TripPlanner helped me organize my vacations seamlessly. The process is so easy!"
            location="New York, USA"
          />
          <Testimonial
            name="Jane Smith"
            feedback="A great way to plan all your trips in one place. I love the itinerary builder!"
            location="London, UK"
          />
          <Testimonial
            name="Michael Johnson"
            feedback="As a frequent traveler, TripPlanner made my life so much easier with its user-friendly interface."
            location="Sydney, Australia"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonial({ name, feedback, location }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 mb-4">"{feedback}"</p>
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-gray-500">{location}</p>
    </div>
  );
}
