import { Link } from "react-router-dom";
import ClickableSlider from "./ClickableSlider";

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="container mx-auto px-4 py-12">
        {/* Renewable Energy Section */}
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              {/* Text Content */}
              <div>
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold tracking-tight text-green-700 sm:text-6xl">
                    A Future Built on Renewable Energy
                  </h1>
                  <p className="mt-6 text-lg font-medium text-gray-700 sm:text-xl">
                    Harness the power of AI for sustainable energy planning
                  </p>
                  {/* Action Buttons */}
                  <div className="mt-10  flex gap-5 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                    <a
                      href="/smart site selection"
                      className="inline-flex px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-green-600 rounded-lg focus:outline-none focus:bg-green-500 hover:bg-green-700"
                      aria-label="Navigate to Smart Site Selection"
                    >
                      Smart Site Selection
                    </a>
                    <a
                      href="/carbon modeling"
                      className="inline-flex px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-green-500 rounded-lg focus:outline-none focus:bg-green-600 hover:bg-green-700"
                      aria-label="Navigate to Carbon Modeling"
                    >
                      Carbon Modeling
                    </a>
                    {/* <a
                      href="/real-time-data-integration"
                      className="inline-flex px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-green-600 rounded-lg focus:outline-none focus:bg-green-500 hover:bg-green-500"
                      aria-label="Navigate to Real Time Data Integration"
                    >
                      Real Time Data Integration
                    </a> */}
                  </div>
                </div>
              </div>
              {/* Image Section */}
              <div>
                <img
                  className="w-full object-cover rounded-lg shadow-lg"
                  src="src/assets/img/hero.webp"
                  alt="Renewable Energy Illustration"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Free Card and Metrics Section */}
        <section className="p-4 sm:pb-16 lg:pt-8 flex items-center justify-center">
          <div className="px-80 w-full flex items-center justify-center">
            <div className="w-full ">
              {/* Subscription Form */}
              <div>
                <div className="text-center lg:text-left">
                  <form
                    action="/ClickableSlider"
                    method="POST"
                    className="mt-8 sm:mt-10"
                  >
                    <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Stay updated on sustainable solutions 🌿"
                        className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                        required
                      />
                      <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                        <button
                          type="submit"
                          className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600"
                          aria-label="Get a Free Card"
                        >
                          Email📧
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                  <div className="flex items-center">
                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
                      1.2k+
                    </p>
                    <p className="ml-3 text-sm text-gray-900">
                      Locations
                      <br />
                      optimized 🗺️
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <svg
                      className="text-gray-400"
                      width="16"
                      height="39"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.72265"
                        y1="10.584"
                        x2="15.7226"
                        y2="0.583975"
                      ></line>
                      <line
                        x1="0.72265"
                        y1="17.584"
                        x2="15.7226"
                        y2="7.58398"
                      ></line>
                      <line
                        x1="0.72265"
                        y1="24.584"
                        x2="15.7226"
                        y2="14.584"
                      ></line>
                      <line
                        x1="0.72265"
                        y1="31.584"
                        x2="15.7226"
                        y2="21.584"
                      ></line>
                      <line
                        x1="0.72265"
                        y1="38.584"
                        x2="15.7226"
                        y2="28.584"
                      ></line>
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
                      $500k+
                    </p>
                    <p className="ml-3 text-sm text-gray-900">
                      Carbon
                      <br />
                      saved 🌍
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-green-700 sm:text-7xl">
              A Future Built on Renewable Energy
            </h1>
            <p className="mt-6 text-lg font-medium text-gray-700 sm:text-xl">
              Harness the power of AI for sustainable energy planning
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/smart site selection"
                className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
              >
                Smart Site Selection
              </a>
              <a
                href="/Carbon Modeling"
                className="rounded-md bg-green-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600"
              >
                Carbon Modeling
              </a>
              <a
                href="/Real time data integration"
                className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
              >
                Real Time Data Integration
              </a>
            </div>
          </div>
        </div>
      </div> */}
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
      <section className="p-20 bg-white">
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
              to="/about us"
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
      <section className="mb-16 px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link to="/smart site selection">
              <h3 className="text-xl font-semibold mb-4">
                Smart Site Selection
              </h3>
              <img
                src="src/assets/img/Optimal Site Identification.avif"
                alt="Optimal Site Identification"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p>
                Identify optimal locations for renewable energy projects using
                AI-driven analysis.
              </p>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link to="/carbon modeling">
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
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link to="/real time data integration">
              <h3 className="text-xl font-semibold mb-4">
                Real Time Data Integration
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
            </Link>
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
      <br />
      <ClickableSlider />
    </div>
  );
}

export default Home;
