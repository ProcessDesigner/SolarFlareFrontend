import React from "react";

const DataTable = ({ data, timeRange, getIntensityColor, hasApiResponse }) => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-700 rounded-xl shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Time
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Magnetic Field (nT)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Intensity Group
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Intensity Value
            </th>
            {hasApiResponse && (
              <>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Probability
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Intensity Score
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
          {data.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                {timeRange === "48" ? item.displayTime : item.time}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                {item.magneticField}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                  style={{
                    backgroundColor: `${getIntensityColor(item.intensityGroup)}20`,
                    color: getIntensityColor(item.intensityGroup)
                  }}
                >
                  {item.intensityGroup}-Class
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                {item.intensityValue}
              </td>
              {hasApiResponse && (
                <>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {item.probability ? (item.probability * 100).toFixed(2) + '%' : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {item.intensityScore ? item.intensityScore.toFixed(2) : 'N/A'}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;