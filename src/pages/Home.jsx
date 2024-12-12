import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-600">
          A Future Built on Renewable Energy
        </h1>
        <p className="text-xl mb-8">
          Harness the power of AI for sustainable energy planning
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/Smart Site Selection"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Smart Site Selection
          </Link>
          <Link
            to="/Carbon Modeling"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Carbon Modeling
          </Link>
          <Link
            to="/Real-Time Data Integration"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Real-Time Data Integration
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Smart Site Selection</h3>
            <p>
              Identify optimal locations for renewable energy projects using
              AI-driven analysis.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Carbon Modeling</h3>
            <p>
              Simulate and reduce carbon emissions with advanced predictive
              modeling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Real-Time Data Integration
            </h3>
            <p>
              Monitor and analyze live data for better energy planning and
              management.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Renewable Energy Potential
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Heatmap of renewable energy potential"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
