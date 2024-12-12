function UseCases() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Use Cases</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Microgrids in Rural Areas
          </h2>
          <img
            src="/placeholder.svg?height=200&width=400"
            alt="Rural microgrid"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p>
            GENSHAKTI helps plan and implement microgrids in remote rural areas,
            bringing reliable and sustainable energy to communities previously
            without access to electricity.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Government Collaboration
          </h2>
          <img
            src="/placeholder.svg?height=200&width=400"
            alt="Government collaboration"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p>
            We work with governments to plan large-scale renewable energy
            projects, optimizing resource allocation and maximizing the impact
            of sustainable energy initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseCases;
