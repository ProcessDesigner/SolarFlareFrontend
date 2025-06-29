import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DataCharts = ({ data, timeRange, isDarkMode }) => {
  // Determine the key to use for the X-axis based on the timeRange
  const xAxisKey = timeRange === "48" ? "displayTime" : "time";

  // Determine color theme based on dark mode
  const gridColor = isDarkMode ? "#374151" : "#e5e7eb";
  const textColor = isDarkMode ? "#e5e7eb" : "#374151";

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Magnetic Field Chart */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Magnetic Field Strength</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis 
                  dataKey={xAxisKey} 
                  tick={{ fill: textColor, fontSize: 12 }} 
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  name="Magnetic Field (nT)" 
                  tick={{ fill: textColor, fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? "#1f2937" : "#fff",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                    color: isDarkMode ? "#e5e7eb" : "#374151"
                  }}
                  formatter={(value) => [`${value} nT`, "Magnetic Field"]}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="magneticField" 
                  name="Magnetic Field (nT)" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  dot={{ r: 4 }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Intensity Chart */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Flare Intensity</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis 
                  dataKey={xAxisKey} 
                  tick={{ fill: textColor, fontSize: 12 }} 
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  name="Intensity Value" 
                  tick={{ fill: textColor, fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? "#1f2937" : "#fff",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                    color: isDarkMode ? "#e5e7eb" : "#374151"
                  }}
                  formatter={(value, name) => {
                    return name === "intensityValue" ? 
                      [`${value}`, "Intensity Value"] : 
                      [`${value * 100}%`, "Probability"];
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="intensityValue" 
                  name="Intensity Value" 
                  stroke="#f59e0b" 
                  strokeWidth={2} 
                  dot={{ r: 4 }} 
                  activeDot={{ r: 6 }} 
                />
                {data[0] && data[0].hasOwnProperty('probability') && (
                  <Line 
                    type="monotone" 
                    dataKey="probability" 
                    name="Probability" 
                    stroke="#10b981" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCharts;