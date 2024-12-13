import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Impact from "./pages/Impact";
import UseCase from "./pages/UseCase"; 
import Contact from "./pages/Contact";
import About from "./pages/About us "; 
import SmartSiteSelection from "./pages/Smart Site Selection"; 
import CarbonModeling from "./pages/Carbon Modeling"; 
import RealTimeDataIntegration from "./pages/Real Time Data Integration"; 

function App() {
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
            <Route path="/about-us" element={<About />} />{" "}
            <Route path="/smart site selection" element={<SmartSiteSelection />}/>{" "}
            <Route path="/carbon modeling" element={<CarbonModeling />} />{" "}
            <Route path="/real time data integration"element={<RealTimeDataIntegration />}/>{" "}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
