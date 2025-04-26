import Navbar from "../components/Navbar"

export default function PricingPage() {
  return (
    <>
    <Navbar></Navbar>

    <div className="bg-white text-gray-800">
      {/* Header */}
      <section className="text-center px-6 py-20 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple & Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your travel planning needs. No hidden fees,
          cancel anytime.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Free Plan */}
          <PricingCard
            title="Starter"
            price="Free"
            description="Perfect for casual travelers"
            features={[
              "Up to 2 trips",
              "Basic itinerary planning",
              "Access to standard destinations",
              "Email support",
            ]}
            buttonText="Get Started"
            highlighted={false}
          />

          {/* Pro Plan (highlighted) */}
          <PricingCard
            title="Pro"
            price="$9/mo"
            description="For frequent adventurers"
            features={[
              "Unlimited trips",
              "Advanced itinerary planning",
              "Custom destination import",
              "Priority email support",
              "Offline access",
            ]}
            buttonText="Upgrade Now"
            highlighted={true}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-8">
        <p className="text-gray-500 mb-4">
          &copy; 2025 TripPlanner. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
    </>

  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted,
}) {
  return (
    <div
      className={`border rounded-xl p-8 shadow-md flex flex-col ${
        highlighted ? "bg-blue-50 border-blue-600" : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="text-4xl font-bold mb-2">{price}</div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 text-left mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-auto block text-center px-6 py-3 rounded-lg font-semibold transition ${
          highlighted
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {buttonText}
      </a>
    </div>
  );
}
