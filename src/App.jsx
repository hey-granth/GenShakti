import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Services from "./pages/Services";
import Impact from "./pages/Impact";
import UseCase from "./pages/UseCase";
import Contact from "./pages/Contact";
import About from "./pages/About us ";
import CarbonModeling from "./pages/Carbon Modeling";
import RealTimeDataIntegration from "./pages/Real Time Data Integration";
import Carbonreduction from "./pages/Carbon Reduction";
import Renewablecapacity from "./pages/Renewable Capacity";
import Costsaving from "./pages/Cost Saving";
import Roadmap from "./pages/Roadmap";
import GeoLocationGenerator from "./pages/test";
import SustainableSuggestions from "./pages/Sustainable-Suggestions";
import AiGenerator from "./pages/test";
import MapComponent from "./pages/map";
import SiteSelection from "./pages/siteSelection";

function App() {
  useEffect(() => {
    // Load Botsonic widget script dynamically
    const script = document.createElement("script");
    script.src = "https://widget.botsonic.com/CDN/botsonic.min.js";
    script.async = true;
    script.onload = () => {
      window.Botsonic("init", {
        serviceBaseUrl: "https://api-azure.botsonic.ai",
        token: "b1a1d91d-6299-4309-b66e-21c3f2924436",
      });
    };
    document.body.appendChild(script);

    // Cleanup to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/use-cases" element={<UseCase />} />{" "}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about us" element={<About />} />{" "}
            <Route path="/carbon modeling" element={<CarbonModeling />} />{" "}
            <Route
              path="/real time data integration"
              element={<RealTimeDataIntegration />}
            />{" "}
            <Route path="/carbon reduction" element={<Carbonreduction />} />
            <Route path="/renewable capacity" element={<Renewablecapacity />} />
            <Route path="/cost saving" element={<Costsaving />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route
              path="/geo-location-generator"
              element={<GeoLocationGenerator />}
            />
            <Route
              path="/sustainable-suggestions"
              element={<SustainableSuggestions />}
            />
            <Route path="/site" element={<SiteSelection />} />
            <Route path="/ai-generator" element={<AiGenerator />} />
            <Route path="/map" element={<MapComponent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
