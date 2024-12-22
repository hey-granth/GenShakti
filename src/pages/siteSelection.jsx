import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import MapComponent from "./map";

const SiteSelection = () => {
  const [formData, setFormData] = useState({
    energyType: "",
    landArea: "",
    budget: "",
    sustainabilityGoal: "",
  });
  const [output, setOutput] = useState("");
  const [coordinates, setCoordinates] = useState([]); // State to hold coordinates
  const [loading, setLoading] = useState(false);

  const client = new HfInference("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");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const prompt = `Given the following criteria: Energy Type: ${formData.energyType}, Land Area: ${formData.landArea} acres, Budget: ₹${formData.budget} crores, Sustainability Goal: ${formData.sustainabilityGoal}, recommend the best sites for renewable energy projects in India. Provide the coordinates in the format: [latitude, longitude] (strictly follow the format) and the name of the site. Only get me the numerical coordinates in the given format. Strictly no text in the output. Get me practically possible maximum number of coordinate values. Minimum of 5 coordinate values and the coordinates must lie in india.`;

    try {
      const chatCompletion = await client.chatCompletion({
        model: "mistralai/Mistral-Nemo-Instruct-2407",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 500,
      });

      const aiOutput = chatCompletion.choices[0].message.content;
      setOutput(aiOutput);

      // Parse the AI output to extract coordinates
      const parsedCoordinates = aiOutput.split("\n").map((coord) => {
        const [lat, lon] = coord
          .replace(/[\[\]']+/g, "")
          .split(",")
          .map(Number);
        return [lat, lon];
      });
      setCoordinates(parsedCoordinates);
    } catch (error) {
      console.error("Error generating text:", error);
      setOutput("Error generating text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex overflow-hidden">
      <h1 className="absolute text-3xl font-bold text-green-800 mb-8 m-2">
        Smart Site Selection
      </h1>
      <form onSubmit={handleSubmit} className="w-full px-8 mt-20">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Energy Type:
          </label>
          <select
            name="energyType"
            value={formData.energyType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select</option>
            <option value="solar">Solar</option>
            <option value="wind">Wind</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Land Area in Acres:
          </label>
          <input
            type="number"
            name="landArea"
            value={formData.landArea}
            onChange={handleChange}
            placeholder="Enter land area in acres"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Budget (₹ in Crores)
          </label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Enter budget in crores"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sustainability Goals:
          </label>
          <textarea
            name="sustainabilityGoal"
            value={formData.sustainabilityGoal}
            onChange={handleChange}
            placeholder="Enter your sustainability goals"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            cols="50"
          />
        </div>
        <br />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {output && (
        <div className="absolute mt-96">
          <h2 className="text-white">Generated Output:</h2>
          <p className="text-white">{output}</p>
        </div>
      )}
      <MapComponent coordinates={coordinates} />
    </div>
  );
};

export default SiteSelection;
