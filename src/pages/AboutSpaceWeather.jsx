import React from 'react';
import { Sun, Zap, Wind, Radio, CloudLightning, Radiation } from 'lucide-react';

function AboutSpaceWeather() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* <h1 className="text-3xl font-bold mb-6">About Space Weather</h1> */}
      
      <div className="prose max-w-none">
        {/* <p className="text-lg mb-6">
          Space weather refers to the environmental conditions in space as influenced by the Sun and the solar wind. 
          It can affect space-borne and ground-based technological systems and can endanger human life or health.
        </p> */}
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Sun className="mr-2 text-yellow-500" />
            What Causes Space Weather?
          </h2>
          <p className="mb-4">
            Space weather is primarily driven by the Sun's activity. The Sun continually emits a stream of charged 
            particles known as the solar wind, along with electromagnetic radiation across the spectrum. 
            Periodically, the Sun releases bursts of energy and matter in the form of:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium flex items-center text-lg">
                <Zap className="mr-2 text-yellow-500" size={20} />
                Solar Flares
              </h3>
              <p className="text-sm mt-2">
                Sudden releases of energy from the Sun's surface that emit radiation across the electromagnetic spectrum, 
                from radio waves to gamma rays. X-class flares are the largest and can trigger radio blackouts on Earth.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium flex items-center text-lg">
                <CloudLightning className="mr-2 text-red-500" size={20} />
                Coronal Mass Ejections (CMEs)
              </h3>
              <p className="text-sm mt-2">
                Huge bubbles of gas and magnetic field ejected from the Sun. When directed at Earth, CMEs can cause 
                geomagnetic storms. These typically take 1-3 days to reach Earth after they're first observed.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium flex items-center text-lg">
                <Wind className="mr-2 text-blue-500" size={20} />
                Solar Wind Streams
              </h3>
              <p className="text-sm mt-2">
                Continuous flows of charged particles from the Sun that vary in density, temperature, and speed. 
                High-speed streams can disturb Earth's magnetosphere and cause minor geomagnetic storms.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium flex items-center text-lg">
                <Radiation className="mr-2 text-purple-500" size={20} />
                Solar Energetic Particles (SEPs)
              </h3>
              <p className="text-sm mt-2">
                High-energy charged particles accelerated by solar flares or CME shockwaves. These particles can 
                penetrate spacecraft and present radiation hazards to astronauts and satellite electronics.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Impacts of Space Weather</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-3">Technological Systems</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium">Power Grids:</span> Geomagnetic storms can induce currents in power lines, 
              potentially damaging transformers and causing widespread blackouts.
            </li>
            <li>
              <span className="font-medium">Satellites:</span> Solar energetic particles can damage satellite electronics, 
              while increased atmospheric drag during geomagnetic storms can alter satellite orbits.
            </li>
            <li>
              <span className="font-medium">Communications:</span> Solar flares can disrupt high-frequency radio communications, 
              affecting aviation, maritime, and emergency services.
            </li>
            <li>
              <span className="font-medium">GPS Systems:</span> Solar radio bursts and ionospheric disturbances can degrade 
              GPS accuracy and reliability.
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-3">Human Activities</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium">Space Exploration:</span> Radiation hazards from solar storms can endanger 
              astronauts outside Earth's protective magnetosphere.
            </li>
            <li>
              <span className="font-medium">Aviation:</span> Flights over polar routes may be rerouted during solar storms to 
              avoid communication blackouts and increased radiation exposure.
            </li>
            <li>
              <span className="font-medium">Oil and Gas Industry:</span> Geomagnetic variations can interfere with directional 
              drilling operations that rely on magnetic sensors.
            </li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Monitoring and Prediction</h2>
        <p className="mb-4">
          Space weather is monitored by a network of ground-based and space-based observatories. Key instruments include:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <ul className="list-disc pl-5 space-y-2">
            <li>Solar telescopes that observe the Sun in various wavelengths</li>
            <li>Satellites like SOHO (Solar and Heliospheric Observatory) and DSCOVR that monitor solar activity</li>
            <li>Magnetometers that measure changes in Earth's magnetic field</li>
            <li>Ionosondes that monitor the state of the ionosphere</li>
          </ul>
        </div>
        
        <p>
          Forecasters use this data to predict space weather events, typically providing 1-3 day advance warning of 
          significant disturbances. Our dashboard aggregates data from various sources to provide up-to-date information 
          on current space weather conditions and forecasts.
        </p>
        
        <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-medium mb-2">The Kp Index Explained</h3>
          <p>
            The Kp index is a scale from 0-9 that measures the disturbance of Earth's magnetic field. It's updated every 
            3 hours based on measurements from magnetometers around the world:
          </p>
          <ul className="mt-2 space-y-1">
            <li><span className="font-medium text-green-600">Kp 0-3:</span> Quiet to unsettled conditions</li>
            <li><span className="font-medium text-yellow-600">Kp 4-5:</span> Minor to moderate geomagnetic storm</li>
            <li><span className="font-medium text-orange-600">Kp 6-7:</span> Strong geomagnetic storm</li>
            <li><span className="font-medium text-red-600">Kp 8-9:</span> Severe to extreme geomagnetic storm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSpaceWeather;