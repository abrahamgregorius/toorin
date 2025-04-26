import { useState } from "react";

export default function Start() {
  const [formData, setFormData] = useState({
    location: "",
    duration: "",
    purpose: "",
    activity: "",
    budget: "",
    hasChildren: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">Toorin</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Trips
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Profile
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Settings
          </a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Plan Your Adventure</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Log Out
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Tell Us About Your Trip
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Location - full width */}
                <div className="md:col-span-12">
                  <label htmlFor="location" className="block mb-2 font-medium">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </div>

                {/* Duration - half width */}
                {/* Duration - half width (Day & Night Split) */}
                <div className="md:col-span-12">
                  <label className="block mb-2 font-medium">
                    Duration <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    {/* Day Input */}
                    <div className="relative flex-1">
                      <input
                        type="number"
                        id="day"
                        name="day"
                        value={formData.day || ""}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 pr-16 rounded-md"
                        placeholder="Days"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        Day
                      </span>
                    </div>

                    {/* Night Input */}
                    <div className="relative flex-1">
                      <input
                        type="number"
                        id="night"
                        name="night"
                        value={formData.night || ""}
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

                {/* Purpose - half width */}
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
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </div>

                {/* Favorite Activity - full width */}
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
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </div>

                {/* Budget - half width */}
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
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 pl-16 rounded-md" // <-- pl-16 to push text inside!
                    />
                  </div>
                </div>

                {/* Children Checkbox - half width */}
                <div className="md:col-span-6 flex items-center mt-7">
                  <input
                    type="checkbox"
                    id="hasChildren"
                    name="hasChildren"
                    checked={formData.hasChildren}
                    onChange={handleChange}
                    className="w-5 h-5 mr-3"
                  />
                  <label htmlFor="hasChildren" className="text-lg font-medium">
                    Are there any children joining?
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
