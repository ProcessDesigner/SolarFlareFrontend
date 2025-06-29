import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Sun, AlertTriangle, Radio, Thermometer, Activity } from 'lucide-react';

function Dashboard() {
  // Sample space weather data - in a real app, you would fetch this from an API
  const [solarData, setSolarData] = useState({
    kpIndex: 3,
    solarFlares: 2,
    cmeAlert: 'None',
    solarWindSpeed: 420, // km/s
    temperature: 1.2e6, // Kelvin
    lastUpdate: new Date().toLocaleString()
  });
  
  const [historicalData, setHistoricalData] = useState([]);
  
  useEffect(() => {
    // Simulate fetching historical data
    const generateData = () => {
      const data = [];
      const now = new Date();
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        data.push({
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          kpIndex: Math.floor(Math.random() * 6) + 1,
          solarWindSpeed: 350 + Math.floor(Math.random() * 250),
          flares: Math.floor(Math.random() * 4)
        });
      }
      setHistoricalData(data);
    };
    
    generateData();
  }, []);
  
  const getKpIndexSeverity = (index) => {
    if (index <= 3) return 'text-green-500';
    if (index <= 5) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="p-6">
      
      {/* Current conditions panel */}
      <div className="bg-blue-50 rounded-lg p-4 mb-8 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Current Space Weather Conditions</h2>
          <span className="text-sm text-gray-500">Last updated: {solarData.lastUpdate}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* KP Index */}
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 font-medium">Geomagnetic Activity (Kp-index)</h3>
                <p className={`text-2xl font-bold ${getKpIndexSeverity(solarData.kpIndex)}`}>
                  {solarData.kpIndex}/9
                </p>
                <p className="text-sm mt-1">
                  {solarData.kpIndex <= 3 ? 'Quiet' : 
                   solarData.kpIndex <= 5 ? 'Unsettled' : 'Storm'}
                </p>
              </div>
              <Activity size={36} className={getKpIndexSeverity(solarData.kpIndex)} />
            </div>
          </div>
          
          {/* Solar Flares */}
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 font-medium">Solar Flares (Last 24h)</h3>
                <p className="text-2xl font-bold text-orange-500">{solarData.solarFlares}</p>
                <p className="text-sm mt-1">
                  {solarData.solarFlares === 0 ? 'No flares detected' : 
                   solarData.solarFlares <= 2 ? 'Minor flare activity' : 'Active'}
                </p>
              </div>
              <Sun size={36} className="text-orange-500" />
            </div>
          </div>
          
          {/* Solar Wind */}
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 font-medium">Solar Wind Speed</h3>
                <p className="text-2xl font-bold text-blue-500">{solarData.solarWindSpeed} km/s</p>
                <p className="text-sm mt-1">
                  {solarData.solarWindSpeed < 400 ? 'Normal' : 'Elevated'}
                </p>
              </div>
              <Radio size={36} className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Alerts Panel */}
      {solarData.cmeAlert !== 'None' && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-md flex items-center">
          <AlertTriangle className="text-red-500 mr-3" />
          <div>
            <h3 className="font-bold text-red-700">CME Alert: {solarData.cmeAlert}</h3>
            <p className="text-red-600">Potential impact expected within 24-48 hours.</p>
          </div>
        </div>
      )}
      
      {/* Charts Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Historical Trends</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="kpIndex" stroke="#8884d8" name="Kp-Index" />
              <Line yAxisId="right" type="monotone" dataKey="solarWindSpeed" stroke="#82ca9d" name="Solar Wind (km/s)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Forecast Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">3-Day Forecast</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(day => (
            <div key={day} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium text-gray-700">
                {new Date(Date.now() + day * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
              </h3>
              <div className="flex justify-between items-center mt-3">
                <div>
                  <p className="text-sm">Expected Kp-index: <span className="font-bold">{Math.floor(Math.random() * 5) + 1}</span></p>
                  <p className="text-sm">Solar Wind: <span className="font-bold">{350 + Math.floor(Math.random() * 150)} km/s</span></p>
                  <p className="text-sm">Flare Probability: <span className="font-bold">{Math.floor(Math.random() * 60)}%</span></p>
                </div>
                <Sun size={36} className="text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;