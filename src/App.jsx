import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Events from "./pages/events";
import About from "./pages/about";
import SolarFlare from "./pages/SolarFlare";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AboutSpaceWeather from "./pages/AboutSpaceWeather";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          {/* All these routes will have the Layout wrapper with sidebar and navbar */}
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/solar-flare" element={<SolarFlare />} />
          <Route path="/dashboards" element={<Dashboard />} />
          <Route path="/about-space-weather" element={<div><AboutSpaceWeather/></div>} />
          <Route path="/contact-us" element={<div><ContactUs/></div>} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
