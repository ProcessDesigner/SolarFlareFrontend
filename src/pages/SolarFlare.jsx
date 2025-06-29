import React, { useState, useEffect, useMemo, useCallback } from "react";
import { AlertCircle, Download, RefreshCw, Info, Sun, Activity, Clock, Upload } from "lucide-react";
import axios from 'axios'
import FlareStatus from "../components/SolarFlareComponents/FlareStatus";
import DataTable from "../components/SolarFlareComponents/DataTable";
import DataCharts from "../components/SolarFlareComponents/DataCharts";
import AboutSection from "../components/SolarFlareComponents/AboutSection";

// Demo data for the 24-hour view
const demoData24h = [
  { time: "00:00", magneticField: 180, intensityGroup: "C", intensityValue: 3 },
  { time: "02:00", magneticField: 195, intensityGroup: "C", intensityValue: 4 },
  { time: "04:00", magneticField: 210, intensityGroup: "M", intensityValue: 5 },
  { time: "06:00", magneticField: 225, intensityGroup: "M", intensityValue: 6 },
  { time: "08:00", magneticField: 240, intensityGroup: "M", intensityValue: 7 },
  { time: "10:00", magneticField: 255, intensityGroup: "X", intensityValue: 8 },
  { time: "12:00", magneticField: 270, intensityGroup: "X", intensityValue: 9 },
  { time: "14:00", magneticField: 260, intensityGroup: "X", intensityValue: 8 },
  { time: "16:00", magneticField: 230, intensityGroup: "M", intensityValue: 6 },
  { time: "18:00", magneticField: 210, intensityGroup: "M", intensityValue: 5 },
  { time: "20:00", magneticField: 190, intensityGroup: "C", intensityValue: 4 },
  { time: "22:00", magneticField: 175, intensityGroup: "C", intensityValue: 3 }
];

// Function to create demo data for 48 hours
const createDemoData48h = () => {
  // Day 1 data with display time
  const day1 = demoData24h.map(item => ({
    ...item,
    displayTime: `Day 1 - ${item.time}`
  }));
  
  // Day 2 data
  const day2 = [
    { time: "00:00", displayTime: "Day 2 - 00:00", magneticField: 165, intensityGroup: "C", intensityValue: 2 },
    { time: "02:00", displayTime: "Day 2 - 02:00", magneticField: 160, intensityGroup: "C", intensityValue: 2 },
    { time: "04:00", displayTime: "Day 2 - 04:00", magneticField: 180, intensityGroup: "C", intensityValue: 3 },
    { time: "06:00", displayTime: "Day 2 - 06:00", magneticField: 200, intensityGroup: "M", intensityValue: 5 },
    { time: "08:00", displayTime: "Day 2 - 08:00", magneticField: 230, intensityGroup: "M", intensityValue: 6 },
    { time: "10:00", displayTime: "Day 2 - 10:00", magneticField: 210, intensityGroup: "M", intensityValue: 5 },
    { time: "12:00", displayTime: "Day 2 - 12:00", magneticField: 190, intensityGroup: "C", intensityValue: 4 },
    { time: "14:00", displayTime: "Day 2 - 14:00", magneticField: 175, intensityGroup: "C", intensityValue: 3 },
    { time: "16:00", displayTime: "Day 2 - 16:00", magneticField: 160, intensityGroup: "C", intensityValue: 2 },
    { time: "18:00", displayTime: "Day 2 - 18:00", magneticField: 150, intensityGroup: "B", intensityValue: 1 },
    { time: "20:00", displayTime: "Day 2 - 20:00", magneticField: 145, intensityGroup: "B", intensityValue: 1 },
    { time: "22:00", displayTime: "Day 2 - 22:00", magneticField: 140, intensityGroup: "B", intensityValue: 1 }
  ];
  
  return [...day1, ...day2];
};

const SolarFlare = () => {
  const [activeSection, setActiveSection] = useState("about"); // "about", "24hr", or "48hr"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  const processApiData = (apiData) => {
    const totalDataPoints = apiData.length; // 1758
    const pointsPerHour = Math.floor(totalDataPoints / 48);
    const hourlyData = [];

    for (let hour = 0; hour < 48; hour++) {
      const startIdx = hour * pointsPerHour;
      const endIdx = (hour + 1) * pointsPerHour;
      const hourData = apiData.slice(startIdx, endIdx);

      // Calculate averages
      const avgMagnetic = hourData.reduce((sum, item) => 
        sum + Math.abs(item.magnetic_field_strength), 0) / hourData.length;
      
      const avgIntensity = hourData.reduce((sum, item) => 
        sum + item.intensity_score, 0) / hourData.length;

      // Determine most common flare class
      const flareCounts = {};
      hourData.forEach(item => {
        flareCounts[item.flare_class] = (flareCounts[item.flare_class] || 0) + 1;
      });
      const mostCommonFlare = Object.keys(flareCounts).reduce((a, b) => 
        flareCounts[a] > flareCounts[b] ? a : b);

      // Map flare class to intensity group
      let intensityGroup = "B";
      if (mostCommonFlare.includes("Strong")) intensityGroup = "M";
      if (mostCommonFlare.includes("Extreme")) intensityGroup = "X";

      // Create time labels
      const hourNum = hour % 24;
      const time = `${hourNum.toString().padStart(2, '0')}:00`;
      const day = Math.floor(hour / 24) + 1;
      const displayTime = `Day ${day} - ${time}`;

      hourlyData.push({
        time,
        displayTime,
        magneticField: avgMagnetic,
        intensityGroup,
        intensityValue: Math.floor(Math.log10(avgIntensity)) // Simplified intensity value
      });
    }

    return hourlyData;
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    
    try {
      setLoading(true);
      setError(null);
      console.log('Sending data to backend...');

      const response = await axios.post(
        "http://192.168.73.197:8001/predict", 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      console.log("Prediction result:", response.data);
      
      // Process the API response
      const processedData = processApiData(response.data.sequences);
      
      // Filter based on active section
      let displayData = processedData;
      if (activeSection === "24hr") {
        displayData = processedData.slice(0, 24);
      } else if (activeSection === "48hr") {
        displayData = processedData.slice(0, 48);
      }

      setData(displayData);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  

  const getIntensityColor = useCallback((group) => {
    switch (group) {
      case "B": return "#4CAF50"; // Green
      case "C": return "#FFC107"; // Yellow
      case "M": return "#FF9800"; // Orange
      case "X": return "#F44336"; // Red
      default: return "#9E9E9E"; // Grey
    }
  }, []);

  // Fetch data from API
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call with demo data
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Select the appropriate demo data based on activeSection
      if (activeSection === "24hr") {
        setData(demoData24h);
      } else if (activeSection === "48hr") {
        setData(createDemoData48h());
      } else {
        // Default to 24hr data when in about section
        setData(demoData24h);
      }
      

      setLastUpdated(new Date().toLocaleString());
    } catch (err) {
      console.error("Failed to fetch solar flare data:", err);
      setError("Failed to load prediction data. Please try again later.");
      // Fallback to demo data
      setData(activeSection === "48hr" ? createDemoData48h() : demoData24h);
    } finally {
      setLoading(false);
    }
  }, [activeSection]);

  // Initial data fetch and when activeSection changes
  useEffect(() => {
    fetchData();
  }, [fetchData, activeSection]);

  // Check system preference for dark mode
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);

    // Listen for changes in system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Calculations for flare intensity and metrics
  const { maxMagneticField, maxIntensityGroup, flareIntensity } = useMemo(() => {
    if (!data.length) {
      return {
        maxMagneticField: 0,
        maxIntensityGroup: "B",
        flareIntensity: "low"
      };
    }

    const maxField = Math.max(...data.map((d) => d.magneticField));
    const groupOrder = { B: 1, C: 2, M: 3, X: 4 };

    const maxGroup = data.reduce((max, current) => {
      return groupOrder[current.intensityGroup] > groupOrder[max]
        ? current.intensityGroup
        : max;
    }, "B");

    // Determine flare intensity based on max group
    let intensity = "low";
    if (maxGroup === "X") {
      intensity = "extreme";
    } else if (maxGroup === "M") {
      intensity = "high";
    } else if (maxGroup === "C") {
      intensity = "moderate";
    }

    return {
      maxMagneticField: maxField,
      maxIntensityGroup: maxGroup,
      flareIntensity: intensity
    };
  }, [data]);

  // Export data as CSV
  const exportToCSV = useCallback(() => {
    if (!data.length) return;

    const headers = ["Time", "Magnetic Field (nT)", "Intensity Group", "Intensity Value"];
    const csvRows = [
      headers.join(","),
      ...data.map((item) =>
        [
          activeSection === "48hr" ? item.displayTime : item.time,
          item.magneticField,
          `${item.intensityGroup}-Class`,
          item.intensityValue,
        ].join(",")
      )
    ];

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `solar-flare-prediction-${activeSection === "48hr" ? "48h" : "24h"}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [data, activeSection]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"}`}>
      <div className={`max-w-6xl mx-auto p-6 ${isDarkMode ? "bg-gradient-to-b from-gray-800 to-gray-900" : "bg-gradient-to-b from-blue-50 to-indigo-50"} rounded-xl shadow-lg my-8`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">Solar Flare Prediction</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Updated {lastUpdated ? `on ${lastUpdated}` : "daily"} based on space weather data
          </p>

          {/* Main Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              className={`px-5 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 ${
                activeSection === "about" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveSection("about")}
              aria-pressed={activeSection === "about"}
            >
              <Info size={16} /> About Solar Flares
            </button>
            
            <button
              className={`px-5 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 ${
                activeSection === "24hr" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveSection("24hr")}
              aria-pressed={activeSection === "24hr"}
            >
              <Clock size={16} /> Next 24 Hours
            </button>
            
            <button
              className={`px-5 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 ${
                activeSection === "48hr" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveSection("48hr")}
              aria-pressed={activeSection === "48hr"}
            >
              <Activity size={16} /> Next 48 Hours
            </button>
          </div>
        </div>

        {error && (
          <div className="flex items-center bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6" role="alert">
            <AlertCircle size={20} className="mr-2" />
            <span>{error}</span>
            <button onClick={fetchData} className="ml-auto flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors">
              <RefreshCw size={16} />
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center p-10 text-gray-600 dark:text-gray-300" aria-live="polite">
            <div className="w-10 h-10 border-4 border-blue-200 border-l-blue-600 rounded-full animate-spin mb-4"></div>
            <span>Loading prediction data...</span>
          </div>
        ) : (
          <>
            {activeSection === "about" ? (
              <AboutSection />
            ) : (
              <>
                <div className="mb-8">
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
                    <FlareStatus flareIntensity={flareIntensity} />

                    <div className="flex flex-wrap justify-around gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Peak Intensity Group</div>
                        <div className="text-xl font-bold" style={{ color: getIntensityColor(maxIntensityGroup) }}>
                          {`${maxIntensityGroup}-Class`}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Peak Magnetic Field</div>
                        <div className="text-xl font-bold text-gray-800 dark:text-gray-200">{`${maxMagneticField} nT`}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <DataCharts 
                  data={data} 
                  timeRange={activeSection === "48hr" ? "48" : "24"} 
                  isDarkMode={isDarkMode} 
                />

                <div className="flex justify-center gap-4 mb-8">
                  <button 
                    onClick={fetchData} 
                    className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-5 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <RefreshCw size={16} />
                    Refresh Data
                  </button>

                  <button 
                    onClick={exportToCSV} 
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <Download size={16} />
                    Export as CSV
                  </button>

                  <label className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer">
                    <input 
                      type="file" 
                      accept=".csv" 
                      onChange={handleFileUpload} 
                      hidden 
                    />
                    <Upload size={16} />
                    Upload CSV
                  </label>
                </div>


                <DataTable 
                  data={data} 
                  timeRange={activeSection === "48hr" ? "48" : "24"} 
                  getIntensityColor={getIntensityColor} 
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};


export default SolarFlare;