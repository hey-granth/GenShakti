import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SimpleMap = ({ data, title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="grid grid-cols-10 gap-1">
        {data.map((value, index) => (
          <div
            key={index}
            className="aspect-square rounded"
            style={{
              backgroundColor: `rgba(0, 128, 0, ${value / 100})`,
            }}
            title={`Value: ${value.toFixed(2)}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const EnergySourceCard = ({ title, data, mapData, aiRecommendation }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Energy Production (MWh)",
                data: data,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
              },
            ],
          }}
          options={{ responsive: true }}
        />
      </div>
      <SimpleMap data={mapData} title={`${title} Potential Map`} />
      <div className="mt-4 p-3 bg-green-100 rounded-lg">
        <h4 className="font-semibold mb-2">AI Recommendation:</h4>
        <p className="text-sm">{aiRecommendation}</p>
      </div>
    </div>
  );
};

const EnergyStorageCard = ({ data, recommendation }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Energy Storage Solutions</h2>
      <div className="mb-4">
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Energy Demand (MWh)",
                data: data.demand,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
              {
                label: "Energy Supply (MWh)",
                data: data.supply,
                borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
              },
            ],
          }}
          options={{ responsive: true }}
        />
      </div>
      <div className="mt-4 p-3 bg-green-100 rounded-lg">
        <h4 className="font-semibold mb-2">AI Recommendation:</h4>
        <p className="text-sm">{recommendation}</p>
      </div>
    </div>
  );
};

const RenewableEnergyDashboard = () => {
  const [solarData, setSolarData] = useState({ production: [], map: [] });
  const [windData, setWindData] = useState({ production: [], map: [] });
  const [hydroData, setHydroData] = useState({ production: [], map: [] });
  const [geothermalData, setGeothermalData] = useState({
    production: [],
    map: [],
  });
  const [biomassData, setBiomassData] = useState({ production: [], map: [] });
  const [storageData, setStorageData] = useState({ demand: [], supply: [] });

  useEffect(() => {
    // Simulating data fetching
    const fetchData = () => {
      // TODO: Replace these with actual API calls
      setSolarData({
        production: Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 1000)
        ),
        map: Array.from({ length: 100 }, () => Math.random() * 100),
      });
      setWindData({
        production: Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 1000)
        ),
        map: Array.from({ length: 100 }, () => Math.random() * 100),
      });
      setHydroData({
        production: Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 1000)
        ),
        map: Array.from({ length: 100 }, () => Math.random() * 100),
      });
      setGeothermalData({
        production: Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 1000)
        ),
        map: Array.from({ length: 100 }, () => Math.random() * 100),
      });
      setBiomassData({
        production: Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 1000)
        ),
        map: Array.from({ length: 100 }, () => Math.random() * 100),
      });
      setStorageData({
        demand: Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 1000)
        ),
        supply: Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 1000)
        ),
      });
    };

    fetchData();
    // Simulating real-time updates
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  // TODO: Implement AI recommendation generation
  const getAIRecommendation = (energyType, data) => {
    // This is a placeholder. Replace with actual AI-generated recommendations
    const recommendations = {
      solar:
        "Based on the current solar irradiance data, we recommend increasing the tilt angle of solar panels in the northwestern region by 5 degrees to optimize energy capture.",
      wind: "Our analysis suggests installing new wind turbines in the coastal areas marked in dark green on the map. These locations show consistently high wind speeds.",
      hydro:
        "The river in the central region shows high potential for a new hydropower plant. We recommend conducting an environmental impact study for a 50MW facility.",
      geothermal:
        "Recent geological surveys indicate a promising geothermal reservoir in the southeastern region. Consider initiating exploratory drilling in the areas marked dark green.",
      biomass:
        "To optimize biomass energy production, we suggest establishing a new collection center in the northeastern agricultural zone to reduce transportation costs.",
      storage:
        "Based on the current demand-supply gap, we recommend investing in a 100MWh battery storage facility near the main urban center to improve grid stability during peak hours.",
    };

    return recommendations[energyType] || "No recommendation available.";
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-50 to-blue-50">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Renewable Energy Capacity Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnergySourceCard
          title="Solar Power Optimization"
          data={solarData.production}
          mapData={solarData.map}
          aiRecommendation={getAIRecommendation("solar", solarData)}
        />
        <EnergySourceCard
          title="Wind Energy Potential"
          data={windData.production}
          mapData={windData.map}
          aiRecommendation={getAIRecommendation("wind", windData)}
        />
        <EnergySourceCard
          title="Hydropower Feasibility"
          data={hydroData.production}
          mapData={hydroData.map}
          aiRecommendation={getAIRecommendation("hydro", hydroData)}
        />
        <EnergySourceCard
          title="Geothermal Energy Exploration"
          data={geothermalData.production}
          mapData={geothermalData.map}
          aiRecommendation={getAIRecommendation("geothermal", geothermalData)}
        />
        <EnergySourceCard
          title="Biomass Energy Utilization"
          data={biomassData.production}
          mapData={biomassData.map}
          aiRecommendation={getAIRecommendation("biomass", biomassData)}
        />
        <EnergyStorageCard
          data={storageData}
          recommendation={getAIRecommendation("storage", storageData)}
        />
      </div>
    </div>
  );
};

export default RenewableEnergyDashboard;
