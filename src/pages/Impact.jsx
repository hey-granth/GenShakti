function Impact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Impact</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Contributing to SDG 7: Affordable and Clean Energy
        </h2>
        <p className="mb-4">
          GENSHAKTI is committed to advancing Sustainable Development Goal 7,
          which aims to ensure access to affordable, reliable, sustainable, and
          modern energy for all.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Carbon Reduction</h3>
            <p className="text-4xl font-bold text-green-600">500K</p>
            <p>Tons of CO2 emissions avoided</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
            <p className="text-4xl font-bold text-green-600">$100M</p>
            <p>Total cost savings for users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Renewable Capacity</h3>
            <p className="text-4xl font-bold text-green-600">2 GW</p>
            <p>New renewable energy capacity planned</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;
