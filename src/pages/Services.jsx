function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Optimal Site Identification
          </h2>
          <p>
            Our AI algorithms analyze geographical data, weather patterns, and
            infrastructure to identify the best locations for renewable energy
            projects. This maximizes energy production and minimizes
            environmental impact.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Carbon Modeling</h2>
          <p>
            Simulate and forecast carbon emissions with our advanced modeling
            tools. Develop strategies to reduce your carbon footprint and meet
            sustainability goals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Real-Time Data Integration
          </h2>
          <p>
            Connect to live data sources for real-time monitoring and analytics.
            Make informed decisions based on up-to-the-minute information about
            energy production, consumption, and environmental factors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
