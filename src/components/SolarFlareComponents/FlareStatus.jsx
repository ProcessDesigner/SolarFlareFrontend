import React from "react";
import { Sun } from "lucide-react";


const FlareStatus = ({ flareIntensity }) => {
  const flareStatusInfo = {
    extreme: {
      icon: <div className="flex items-center justify-center text-red-500 animate-pulse"><Sun size={48} /></div>,
      title: "Extreme Solar Flare Possible",
      description: "X-class flare detected in forecast. Potential for significant space weather impacts, including radio blackouts, radiation storms, and geomagnetic storms.",
      actionRecommendation: "Monitor space weather alerts. Satellite operators and power grid managers should follow contingency protocols."
    },
    high: {
      icon: <div className="flex items-center justify-center text-orange-500 animate-pulse"><Sun size={48} /></div>,
      title: "Strong Solar Flare Expected",
      description: "M-class flare detected in forecast. Moderate space weather conditions likely, with potential for limited radio blackouts and minor impacts to satellites.",
      actionRecommendation: "Be aware of possible GPS and high-frequency radio disruptions in polar regions."
    },
    moderate: {
      icon: <div className="flex items-center justify-center text-yellow-500"><Sun size={48} /></div>,
      title: "Minor Solar Activity",
      description: "C-class flare activity detected. Low impact space weather conditions expected with minimal effects on Earth systems.",
      actionRecommendation: "No special actions required. Normal space weather conditions for most purposes."
    },
    low: {
      icon: <div className="flex items-center justify-center text-green-500"><Sun size={48} /></div>,
      title: "No Significant Flare Expected",
      description: "Background solar activity only (B-class or lower). Quiet space weather conditions expected.",
      actionRecommendation: "Excellent conditions for sensitive operations and observations."
    }
  };

  const status = flareStatusInfo[flareIntensity];
  
  const borderColor = {
    extreme: "border-l-4 border-red-500",
    high: "border-l-4 border-orange-500",
    moderate: "border-l-4 border-yellow-500",
    low: "border-l-4 border-green-500"
  };
  
  const bgColor = {
    extreme: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20",
    high: "bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20",
    moderate: "bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-900/20 dark:to-yellow-800/20",
    low: "bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20"
  };
  
  return (
    <div className={`flex flex-col items-center mb-5 p-5 rounded-xl w-full ${borderColor[flareIntensity]} ${bgColor[flareIntensity]}`}>
      <div className="flex items-center gap-4 mb-4">
        {status.icon}
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{status.title}</div>
      </div>
      <div className="w-full text-left p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
        <div className="mb-2 leading-relaxed">{status.description}</div>
        <div className="font-semibold pt-2 border-t border-gray-200 dark:border-gray-700">{status.actionRecommendation}</div>
      </div>
    </div>
  );
};

export default FlareStatus;