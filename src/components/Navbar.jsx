import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md">
        <div className="text-2xl font-bold text-blue-600">TripPlanner</div>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/pricing" className="hover:text-blue-600">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link
            to="/start"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start planning
          </Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 space-y-2">
          <a href="/" className="block hover:text-blue-600">Home</a>
          <a href="/pricing" className="block hover:text-blue-600">Pricing</a>
          <a href="/contact" className="block hover:text-blue-600">Contact</a>
          <a href="/start" className="block bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Start planning
          </a>
        </div>
      )}
    </>
  );
}
