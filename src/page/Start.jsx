import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Start() {
  const [formData, setFormData] = useState({
    location: "",
    night: "",
    day: "",
    purpose: "",
    activity: "",
    budget: "",
    hasChildren: false,
    peopleCount: "",
  });

  const [result, setResult] = useState(""); // <-- for API response
  const [loading, setLoading] = useState(false); // <-- optional loading state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const query = `
    My trip is to ${formData.location} for ${formData.day} days and ${
      formData.night
    } nights.
    Purpose: ${formData.purpose || "Not specified"}.
    Favorite activity: ${formData.activity || "Not specified"}.
    Budget: IDR ${formData.budget || "Not specified"}.
    ${formData.hasChildren ? "There will be children." : "No children joining."}
    Total people going: ${formData.peopleCount || "Not specified"}.
    `;

    const PROMPT = `Kamu adalah Toorin, perencana perjalanan virtual yang sangat membantu, ramah, dan profesional.
Balas kebutuhan perjalanan ini dengan HTML rapi: ${query}
Gunakan <p> untuk penjelasan dan <ul><li> untuk daftar itinerary harian.
Hindari bahasa yang terlalu santai atau tidak profesional.
Jangan tulis pengantar atau pembuka, langsung tampilkan HTML rapi saja. Jangan pakai \`\`\`html disitu dan dalam pure plain text saja, buat langsung tag tagnya saja. Gunakan heading juga seperti h1, h2, h3
`;

    try {
      const response = await axios(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBNoA6ix8Gdlk3GEsT-1CiDElEjj6DQPrU",
        {
          method: "POST",
          data: {
            contents: [
              {
                parts: [{ text: PROMPT }],
              },
            ],
          },
          headers: { "Content-Type": "application/json" },
        }
      );

      setResult(
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No result found."
      );
    } catch (error) {
      console.error("ERROR: ", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <Link to="/" className="text-2xl font-bold mb-8 text-blue-600">
          Toorin
        </Link>
        <nav className="space-y-8">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">
            Go back
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Plan Your Adventure</h1>
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Go back
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Tell Us About Your Trip
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Location */}
                <div className="md:col-span-12">
                  <label htmlFor="location" className="block mb-2 font-medium">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Jakarta, Bandung, etc..."
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </div>

                {/* Duration */}
                <div className="md:col-span-12">
                  <label className="block mb-2 font-medium">
                    Duration <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        min="0"
                        id="day"
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 pr-16 rounded-md"
                        placeholder="Days"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        Day
                      </span>
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="number"
                        min="0"
                        id="night"
                        name="night"
                        value={formData.night}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 pr-16 rounded-md"
                        placeholder="Nights"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        Night
                      </span>
                    </div>
                  </div>
                </div>

                {/* Purpose */}
                <div className="md:col-span-12">
                  <label htmlFor="purpose" className="block mb-2 font-medium">
                    Purpose of Trip
                  </label>
                  <input
                    type="text"
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Business, Recreation, etc..."
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </div>

                {/* Favorite Activity */}
                <div className="md:col-span-12">
                  <label htmlFor="activity" className="block mb-2 font-medium">
                    Favorite Activity
                  </label>
                  <input
                    type="text"
                    id="activity"
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    placeholder="Swimming, Strolling, etc..."
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </div>

                {/* Budget */}
                <div className="md:col-span-6">
                  <label htmlFor="budget" className="block mb-2 font-medium">
                    Budget
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                      IDR
                    </span>
                    <input
                      type="number"
                      min="0"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 pl-16 rounded-md"
                    />
                  </div>
                </div>

                {/* People Count */}
                <div className="md:col-span-6">
                  <label
                    htmlFor="peopleCount"
                    className="block mb-2 font-medium"
                  >
                    How many people will go there?
                  </label>
                  <input
                    type="number"
                    min="1"
                    id="peopleCount"
                    name="peopleCount"
                    value={formData.peopleCount}
                    onChange={handleChange}
                    placeholder="..."
                    className="w-full border border-gray-300 p-3 rounded-md"
                    required
                  />
                </div>

                {/* Children Checkbox */}
                <div className="md:col-span-6">
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      id="hasChildren"
                      name="hasChildren"
                      checked={formData.hasChildren}
                      onChange={handleChange}
                      className="w-5 h-5 mr-3"
                    />
                    <label
                      htmlFor="hasChildren"
                      className="text-lg font-medium"
                    >
                      Are there any children joining?
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {loading ? "Generating..." : "Submit"}
                </button>
              </div>
            </form>

            {/* Result */}
            {result && (
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">
                  Here’s Your Itinerary Plan:
                </h3>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: result }}
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
