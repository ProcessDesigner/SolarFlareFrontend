import React, { useState } from "react";
import {
  Sun,
  Info,
  AlertTriangle,
  RadioTower,
  Satellite,
  Clock,
} from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", name: "Overview", icon: <Sun size={18} /> },
    { id: "classification", name: "Classification", icon: <Info size={18} /> },
    { id: "effects", name: "Effects", icon: <AlertTriangle size={18} /> },
    { id: "prediction", name: "Prediction", icon: <Clock size={18} /> },
  ];

  // Sample data for the solar flare animation
  const recentFlares = [
    {
      date: "Apr 21, 2025",
      class: "M5.2",
      location: "S12W34",
      duration: "42 min",
    },
    {
      date: "Apr 19, 2025",
      class: "C8.7",
      location: "N08E12",
      duration: "27 min",
    },
    {
      date: "Apr 18, 2025",
      class: "X1.3",
      location: "S20W60",
      duration: "93 min",
    },
    {
      date: "Apr 16, 2025",
      class: "M2.1",
      location: "N15E30",
      duration: "35 min",
    },
  ];

  return (
    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <h3 className="flex items-center justify-center gap-2 text-2xl mb-6 text-gray-700 dark:text-gray-200">
        <Sun size={24} className="text-yellow-500" /> About Solar Flares
      </h3>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto mb-6 bg-white dark:bg-gray-700 rounded-lg p-1 shadow-sm justify-center mx-auto gap-2 p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="transition-all duration-300">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                What are Solar Flares?
              </h4>
              <p className="mb-4 leading-relaxed">
                Solar flares are intense bursts of radiation coming from the
                release of magnetic energy associated with sunspots. They
                represent one of the most powerful explosive events in our solar
                system, releasing energy equivalent to millions of 100-megaton
                hydrogen bombs.
              </p>
              <p className="leading-relaxed">
                Flares occur when accelerated charged particles, mainly
                electrons, interact with the plasma medium. Solar flares extend
                outward from the Sun's surface and heat plasma to tens of
                millions of degrees.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                Solar Activity Cycle
              </h4>
              <p className="mb-4 leading-relaxed">
                Solar flares follow the Sun's 11-year activity cycle. During
                solar maximum, flares occur daily. During solar minimum, flares
                might only occur once a week or less.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-800 dark:text-blue-300">
                  Current Cycle Status:
                </p>
                <p className="text-sm mt-1">
                  We are currently in Solar Cycle 25, which began in December
                  2019. Peak activity is expected in 2025.
                </p>
              </div>
            </div>

            {/* Recent Solar Flare Activity Table */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm md:col-span-2">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                Recent Solar Flare Activity
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-600 text-left">
                      <th className="px-4 py-2 text-gray-600 dark:text-gray-200">
                        Date
                      </th>
                      <th className="px-4 py-2 text-gray-600 dark:text-gray-200">
                        Class
                      </th>
                      <th className="px-4 py-2 text-gray-600 dark:text-gray-200">
                        Location
                      </th>
                      <th className="px-4 py-2 text-gray-600 dark:text-gray-200">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentFlares.map((flare, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-600"
                      >
                        <td className="px-4 py-3">{flare.date}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block py-1 px-2 rounded text-xs font-medium ${
                              flare.class.startsWith("X")
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                : flare.class.startsWith("M")
                                ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                            }`}
                          >
                            {flare.class}
                          </span>
                        </td>
                        <td className="px-4 py-3">{flare.location}</td>
                        <td className="px-4 py-3">{flare.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Classification Tab */}
        {activeTab === "classification" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm md:col-span-2">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                Solar Flare Classification System
              </h4>
              <p className="mb-5 leading-relaxed">
                Solar flares are classified according to their X-ray brightness
                in the wavelength range 1-8 Angstroms. Each class has a peak
                flux ten times greater than the preceding one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg transition-all duration-200 hover:shadow-md">
                    <div className="flex-shrink-0 mt-1">
                      <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-green-500 text-white font-bold text-lg shadow-sm">
                        B
                      </span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-800 dark:text-green-300">
                        B-Class Flares
                      </h5>
                      <p className="text-sm mt-1 text-green-700 dark:text-green-200">
                        Background level flares with minimal activity. Flux
                        between 10⁻⁷ and 10⁻⁶ W/m². No noticeable effects on
                        Earth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg transition-all duration-200 hover:shadow-md">
                    <div className="flex-shrink-0 mt-1">
                      <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-lg shadow-sm">
                        C
                      </span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-800 dark:text-yellow-300">
                        C-Class Flares
                      </h5>
                      <p className="text-sm mt-1 text-yellow-700 dark:text-yellow-200">
                        Small flares with flux between 10⁻⁶ and 10⁻⁵ W/m². Few
                        noticeable consequences on Earth beyond minor radio
                        disturbances.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg transition-all duration-200 hover:shadow-md">
                    <div className="flex-shrink-0 mt-1">
                      <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg shadow-sm">
                        M
                      </span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-800 dark:text-orange-300">
                        M-Class Flares
                      </h5>
                      <p className="text-sm mt-1 text-orange-700 dark:text-orange-200">
                        Medium-sized flares with flux between 10⁻⁵ and 10⁻⁴
                        W/m². Can cause brief radio blackouts at the poles and
                        minor radiation storms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg transition-all duration-200 hover:shadow-md">
                    <div className="flex-shrink-0 mt-1">
                      <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-red-500 text-white font-bold text-lg shadow-sm">
                        X
                      </span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-800 dark:text-red-300">
                        X-Class Flares
                      </h5>
                      <p className="text-sm mt-1 text-red-700 dark:text-red-200">
                        Major events with flux exceeding 10⁻⁴ W/m². Can trigger
                        planet-wide radio blackouts and long-lasting radiation
                        storms. The X-class has no upper limit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-300">
                  Subcategories
                </h5>
                <p className="text-sm mt-1">
                  Each class is also assigned a number from 1-9 indicating its
                  strength within that class (e.g., M3.5, X2.1). For X-class
                  flares, the number can exceed 9 (e.g., X17.2 during the 2003
                  Halloween solar storms).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Effects Tab */}
        {activeTab === "effects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm">
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                <RadioTower size={20} /> Communications Impact
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-medium text-gray-700 dark:text-gray-200">
                    Radio Blackouts
                  </h5>
                  <p className="text-sm mt-1">
                    X-ray and EUV radiation can ionize the D-layer of the
                    ionosphere, causing HF radio waves to be absorbed rather
                    than reflected, leading to communications blackouts.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-medium text-gray-700 dark:text-gray-200">
                    GPS Disruption
                  </h5>
                  <p className="text-sm mt-1">
                    Navigation systems can experience timing errors and position
                    inaccuracies during strong solar events, affecting both
                    civilian and military operations.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-medium text-gray-700 dark:text-gray-200">
                    Aviation Communications
                  </h5>
                  <p className="text-sm mt-1">
                    Polar routes are particularly vulnerable, and flights may
                    need to be rerouted during major events to maintain reliable
                    communications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm">
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                <Satellite size={20} /> Infrastructure Effects
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-medium text-gray-700 dark:text-gray-200">
                    Power Grids
                  </h5>
                  <p className="text-sm mt-1">
                    Geomagnetically induced currents can damage transformers and
                    cause widespread power outages. The 1989 Quebec blackout was
                    caused by a solar event.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-medium text-gray-700 dark:text-gray-200">
                    Satellite Operations
                  </h5>
                  <p className="text-sm mt-1">
                    Radiation can damage electronics, degrade solar panels, and
                    increase orbital drag on satellites, shortening their
                    operational lifespan.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <h5 className="font-medium text-gray-700 dark:text-gray-200">
                    Pipeline Corrosion
                  </h5>
                  <p className="text-sm mt-1">
                    Geomagnetic storms can accelerate corrosion in oil and gas
                    pipelines by inducing electrical currents that interfere
                    with cathodic protection systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm md:col-span-2">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                Impact Severity Scale
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-600 text-left">
                      <th className="px-4 py-2 text-gray-600 dark:text-gray-200">
                        Scale
                      </th>
                      <th className="px-4 py-2 text-gray-600 dark:text-gray-200">
                        Description
                      </th>
                      <th className="px-4 py-2 text-gray-600 dark:text-gray-200">
                        Effects
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-600">
                      <td className="px-4 py-3">
                        <span className="inline-block py-1 px-2 rounded bg-green-100 text-green-800 text-xs font-medium dark:bg-green-900/30 dark:text-green-300">
                          G1
                        </span>
                      </td>
                      <td className="px-4 py-3">Minor</td>
                      <td className="px-4 py-3">
                        Weak power grid fluctuations, minor impact on satellite
                        operations
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-600">
                      <td className="px-4 py-3">
                        <span className="inline-block py-1 px-2 rounded bg-yellow-100 text-yellow-800 text-xs font-medium dark:bg-yellow-900/30 dark:text-yellow-300">
                          G2
                        </span>
                      </td>
                      <td className="px-4 py-3">Moderate</td>
                      <td className="px-4 py-3">
                        High-latitude power systems may experience voltage
                        alarms
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-600">
                      <td className="px-4 py-3">
                        <span className="inline-block py-1 px-2 rounded bg-orange-100 text-orange-800 text-xs font-medium dark:bg-orange-900/30 dark:text-orange-300">
                          G3
                        </span>
                      </td>
                      <td className="px-4 py-3">Strong</td>
                      <td className="px-4 py-3">
                        Correction problems for satellite navigation,
                        intermittent radio navigation issues
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-600">
                      <td className="px-4 py-3">
                        <span className="inline-block py-1 px-2 rounded bg-red-100 text-red-800 text-xs font-medium dark:bg-red-900/30 dark:text-red-300">
                          G4
                        </span>
                      </td>
                      <td className="px-4 py-3">Severe</td>
                      <td className="px-4 py-3">
                        Widespread voltage control problems, some grid systems
                        may experience protective system trips
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <span className="inline-block py-1 px-2 rounded bg-purple-100 text-purple-800 text-xs font-medium dark:bg-purple-900/30 dark:text-purple-300">
                          G5
                        </span>
                      </td>
                      <td className="px-4 py-3">Extreme</td>
                      <td className="px-4 py-3">
                        Complete HF radio blackouts, GPS navigation degraded for
                        days, widespread power grid issues
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Prediction Tab */}
        {activeTab === "prediction" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                Prediction Methods
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 dark:text-gray-200">
                      Magnetic Field Analysis
                    </h5>
                    <p className="text-sm mt-1">
                      Monitoring complex magnetic configurations in sunspot
                      regions to identify potential eruption sites.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 dark:text-gray-200">
                      Historical Pattern Recognition
                    </h5>
                    <p className="text-sm mt-1">
                      Using databases of past flare behaviors to identify
                      patterns that precede major events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 dark:text-gray-200">
                      Machine Learning
                    </h5>
                    <p className="text-sm mt-1">
                      AI algorithms trained on solar data to identify subtle
                      pre-flare conditions invisible to human observers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 dark:text-gray-200">
                      Helioseismology
                    </h5>
                    <p className="text-sm mt-1">
                      Studying acoustic waves in the Sun to detect subsurface
                      changes that might trigger eruptions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                Prediction Accuracy
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200">
                    Short-term (24-48 hours)
                  </h5>
                  <div className="mt-2 relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                          Accuracy: 70-85%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-700">
                      <div
                        style={{ width: "80%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      Most reliable timeframe for predictions, can usually
                      identify active regions likely to produce flares.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200">
                    Medium-term (3-7 days)
                  </h5>
                  <div className="mt-2 relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                          Accuracy: 50-65%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-700">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      Can predict general activity levels but specific timing
                      becomes less certain.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200">
                    Long-term (weeks to months)
                  </h5>
                  <div className="mt-2 relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                          Accuracy: 30-40%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-700">
                      <div
                        style={{ width: "35%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      Limited to general solar cycle predictions rather than
                      specific flare events.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                  Current Forecast Limitations
                </h4>
              </div>
              <p className="mb-4">
                Despite advances in prediction methods, several challenges
                remain:
              </p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>
                  Unpredictable magnetic reconnection events that can trigger
                  spontaneous flares
                </li>
                <li>
                  Limited understanding of subsurface dynamics that affect
                  eruption timing
                </li>
                <li>
                  Difficulty in precisely predicting the magnitude of an
                  upcoming flare
                </li>
                <li>
                  Challenges in forecasting whether a flare will produce an
                  Earth-directed coronal mass ejection
                </li>
              </ul>
              <p className="mt-4 text-sm italic">
                Space weather forecasting is an evolving science, and all
                predictions should be treated as probabilities rather than
                certainties.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
