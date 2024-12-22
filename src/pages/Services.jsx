import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Smart Site Selection</h2>
          <Link to="/site">
            <img
              src="src/assets/img/Optimal Site Identification.avif"
              alt="Optimal Site Identification"
              className="w-full h-auto rounded-lg mb-4"
            />
          </Link>
          <p>
            Our AI algorithms analyze geographical data, weather patterns, and
            infrastructure to identify the best locations for renewable energy
            projects. This maximizes energy production and minimizes
            environmental impact.
          </p>
          <div className="flex justify-center mt-4">
            <Link
              to="/site"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Smart Site Selection
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Carbon Modeling</h2>
          <Link to="/Carbon Modeling">
            <img
              src="src/assets/img/Carbon Modeling.jpg"
              alt="Carbon Modeling"
              className="w-full h-auto rounded-lg mb-4"
            />
          </Link>
          <p>
            Simulate and forecast carbon emissions with our advanced modeling
            tools. Develop strategies to reduce your carbon footprint and meet
            sustainability goals.
          </p>
          <div className="flex justify-center mt-4">
            <Link
              to="/Carbon Modeling"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Carbon Modeling
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Real Time Data Integration
          </h2>
          <Link to="/Real time data integration">
            <img
              src="src/assets/img/Real-Time Data Integration.jpg"
              alt="Real-Time Data Integration"
              className="w-full h-auto rounded-lg mb-4"
            />
          </Link>
          <p>
            Connect to live data sources for real-time monitoring and analytics.
            Make informed decisions based on up-to-the-minute information about
            energy production, consumption, and environmental factors.
          </p>
          <div className="flex justify-center mt-4">
            <Link
              to="/Real Time Data Integration"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Real Time Data Integration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
