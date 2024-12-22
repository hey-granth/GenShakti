import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { HfInference } from "@huggingface/inference";

// Initialize Hugging Face Inference
const client = new HfInference("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");

const fetchMindMapData = async (prompt) => {
  try {
    const completion = await client.textGeneration({
      model: "mistralai/Mistral-Nemo-Instruct-2407",
      inputs: prompt,
      parameters: {
        max_new_tokens: 500,
      },
    });
    return completion.generated_text;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch mind map data from the API");
  }
};

// Custom Node Component
const RoadmapNode = ({ data }) => {
  return (
    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 shadow-lg max-w-[250px]">
      <div className="font-bold text-black mb-2">{data.title}</div>
      <div className="text-sm text-black mb-2">{data.description}</div>
      <div className="flex justify-between text-xs text-green-700">
        <span>{data.timeline}</span>
        <span>{data.impact}</span>
      </div>
    </div>
  );
};

const nodeTypes = {
  roadmapNode: RoadmapNode,
};

// Main Flow Component
function Flow({ nodes, edges }) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      connectionMode={ConnectionMode.Loose}
      fitView
      defaultViewport={{ x: 0, y: 0, zoom: 1 }}
    >
      <Background color="#22c55e" gap={16} size={1} />
      <Controls className="bg-green-50" />
      <MiniMap />
      <Panel position="top-left" className="bg-green-50 p-2 rounded-lg">
        <div className="text-sm text-black">Drag to pan, scroll to zoom</div>
      </Panel>
    </ReactFlow>
  );
}

const MindMapComponent = () => {
  const [currentUsage, setCurrentUsage] = useState("");
  const [goal, setGoal] = useState("");
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateMindMap = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const prompt = `Create a roadmap for achieving sustainable energy goals with the following parameters:
    Current electricity usage: ${currentUsage} kWh per month
    Goal: ${goal}

    Please provide a structured response with 4-6 key steps, each containing:
    1. Step title
    2. Description
    3. Timeline
    4. Expected impact

    Format the response as a JSON array of objects with these properties.`;

    try {
      const data = await fetchMindMapData(prompt);
      let roadmapData;

      try {
        roadmapData = JSON.parse(data);
      } catch (parseError) {
        throw new Error(
          "Failed to parse API response. Please check the format."
        );
      }

      // Transform data for ReactFlow
      const newNodes = roadmapData.map((step, index) => ({
        id: `${index}`,
        type: "roadmapNode",
        position: { x: 250 * index, y: 100 },
        data: {
          title: step.title,
          description: step.description,
          timeline: step.timeline,
          impact: step.impact,
        },
      }));

      const newEdges = newNodes.slice(0, -1).map((_, index) => ({
        id: `e${index}-${index + 1}`,
        source: `${index}`,
        target: `${index + 1}`,
        type: "smoothstep",
        animated: true,
        style: { stroke: "#22c55e" },
      }));

      setNodes(newNodes);
      setEdges(newEdges);
    } catch (err) {
      setError(`Failed to generate mind map: ${err.message}`);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">
          Mind Map Generator
        </h1>

        <form onSubmit={generateMindMap} className="mb-8 space-y-4">
          <div>
            <label className="block text-black mb-2">
              Current Monthly Usage (kWh)
            </label>
            <input
              type="number"
              value={currentUsage}
              onChange={(e) => setCurrentUsage(e.target.value)}
              className="w-full p-2 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g., 500"
              required
            />
          </div>

          <div>
            <label className="block text-black mb-2">Your Energy Goal</label>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-2 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g., Reduce energy consumption by 30% and switch to 50% renewable energy within 2 years"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-green-300 transition-colors"
          >
            {loading ? "Generating..." : "Generate Mind Map"}
          </button>
        </form>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        {(nodes.length > 0 || edges.length > 0) && (
          <div className="h-[600px] border-2 border-green-500 rounded-lg bg-white">
            <ReactFlowProvider>
              <Flow nodes={nodes} edges={edges} />
            </ReactFlowProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMapComponent;
