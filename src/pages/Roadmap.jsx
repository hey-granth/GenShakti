import { useState } from "react";
import { EnergyForm } from "./energyform";
import { RoadmapFlow } from "./flow";
import { generateRoadmap } from "./ai";

function MindMapComponent() {
  const [steps, setSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (consumption, reduction) => {
    setIsLoading(true);
    setError(null);
    try {
      const roadmapSteps = await generateRoadmap(consumption, reduction);
      setSteps(roadmapSteps);
    } catch (err) {
      setError("Failed to generate roadmap. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-center">
          <EnergyForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {steps.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Your Energy Reduction Roadmap
            </h3>
            <RoadmapFlow steps={steps} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MindMapComponent;
