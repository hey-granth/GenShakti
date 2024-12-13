import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-green-700 sm:text-7xl">
              A Future Built on Renewable Energy
            </h1>
            <p className="mt-6 text-lg font-medium text-gray-700 sm:text-xl">
              Harness the power of AI for sustainable energy planning
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
              >
                Smart Site Selection
              </a>
              <a
                href="#"
                className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Carbon Modeling
              </a>
              <a
                href="#"
                className="rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
              >
                Real-Time Data Integration
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="text-center mb-16">
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
      </section> */}
      <section className="py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Transforming Energy Planning with AI
            </h2>
            <p className="text-gray-600 mb-4">
              GENSHAKTI combines cutting-edge artificial intelligence with
              renewable energy expertise to revolutionize how we plan and
              implement sustainable energy solutions.
            </p>
            <p className="text-gray-600 mb-6">
              By leveraging advanced algorithms and real-time data analysis, we
              help governments, businesses, and communities transition to
              renewable energy efficiently and effectively.
            </p>
            <Link
              to="/about"
              className="text-green-600 font-bold hover:underline"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="src/assets/img/solar plant.jpg"
              alt="Solar panels installation"
              className="rounded-lg shadow-lg"
            />
            <img
              src="src/assets/img/wind turbine.jpg"
              alt="Wind turbines"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Smart Site Selection</h3>
            <img
              src="src/assets/img/Optimal Site Identification.avif"
              alt="Optimal Site Identification"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p>
              Identify optimal locations for renewable energy projects using
              AI-driven analysis.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Carbon Modeling</h3>
            <img
              src="src/assets/img/Carbon Modeling.jpg"
              alt="Carbon Modeling"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p>
              Simulate and reduce carbon emissions with advanced predictive
              modeling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Real-Time Data Integration
            </h3>
            <img
              src="src/assets/img/Real-Time Data Integration.jpg"
              alt="Real-Time Data Integration"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p>
              Monitor and analyze live data for better energy planning and
              management.
            </p>
          </div>
        </div>
      </section>
      {/* pateners logo  */}
      <section className="mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Partners and Collaborators
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We proudly collaborate with leading organizations, open-source
          contributors, and technology providers fostering innovation and growth
          in the tech community.
        </p>
        <div className="flex justify-center items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
            <img
              src="src/assets/img/aws.png"
              alt="AWS"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="text-center text-sm mt-2 text-gray-700 font-medium">
              AWS
            </p>
          </div>
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
            <img
              src="src/assets/img/Google Earth Engine.jpg"
              alt="Google Earth Engine"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="text-center text-sm mt-2 text-gray-700 font-medium">
              Google Earth Engine
            </p>
          </div>
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
            <img
              src="src/assets/img/gemini.png"
              alt="Gemini"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="text-center text-sm mt-2 text-gray-700 font-medium">
              Gemini
            </p>
          </div>
        </div>
      </section>
      
      {/* add code here up */}
      <br />
      {/* or Dynamic Energy Potential Map */}


      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Renewable Energy Potential
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src=""
            alt="Heatmap of renewable energy potential"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section> */}
    </div>
  );
}

export default Home;
