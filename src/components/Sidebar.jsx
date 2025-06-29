import React from "react";
import { Link } from 'react-router-dom';
import {
  Home,
  Cloud,
  Thermometer,
  Waves,
  Fish,
  Satellite,
  FlaskConical,
  Anchor,
  Map,
  Trees,
  GraduationCap,
  Newspaper,
  Wrench,
  Info,
  Menu,
  X,
  SunMedium,
} from "../../node_modules/lucide-react";

function Sidebar({ isOpen, toggleSidebar }) {
  const links = [
    { name: "Home", icon: Home },
    { name: "Solar Flare", icon: SunMedium },
    { name: "Weather", icon: Cloud },
    { name: "Climate", icon: Thermometer },
    { name: "Ocean & Coasts", icon: Waves },
    { name: "Fisheries", icon: Fish },
    { name: "Satellites", icon: Satellite },
    { name: "Research", icon: FlaskConical },
    { name: "Marine & Aviation", icon: Anchor },
    { name: "Charting", icon: Map },
    { name: "Sanctuaries", icon: Trees },
    { name: "Education", icon: GraduationCap },
    { name: "News and features", icon: Newspaper },
    { name: "Tools & resources", icon: Wrench },
    { name: "About our agency", icon: Info },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav>
        <ul>
          {links.map((link, index) => {
            const tab = link.name;
            const path =
              tab === "Home" ? "/" : `/${tab.toLowerCase().replace(/ /g, "-")}`;
            return (
              <li key={index}>
                <Link to={path} className="nav-link">
                  <div className="icon-container">
                    <link.icon size={20} className="sidebar-icon" />
                  </div>
                  <span className="link-text">{tab}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <style jsx>{`
        .sidebar {
          width: 60px;
          height: 100vh;
          background: #0073cf;
          position: fixed;
          left: 0;
          top: 0;
          transition: width 0.3s ease-in-out;
          z-index: 1000;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .sidebar.open {
          width: 250px;
        }

        .toggle-btn {
          position: fixed;
          left: 0;
          top: 0;
          width: 60px;
          height: 60px;
          background: #0073cf;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          z-index: 1001;
        }

        .sidebar.open .toggle-btn {
          left: 188px;
        }

        nav {
          margin-top: 60px;
          padding-bottom: 20px;
        }

        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .nav-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
          transition: background-color 0.3s ease;
          height: 48px;
          padding: 0;
        }

        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .icon-container {
          width: 60px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .link-text {
          padding-left: 8px;
          opacity: ${isOpen ? "1" : "0"};
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }

        .sidebar::-webkit-scrollbar {
          width: 5px;
        }

        .sidebar::-webkit-scrollbar-track {
          background: #0073cf;
        }

        .sidebar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .sidebar-icon {
          transition: transform 0.3s ease;
        }

        .nav-link:hover .sidebar-icon {
          transform: scale(1.2);
        }

        @keyframes swim {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .nav-link:hover .sidebar-icon.lucide-fish {
          animation: swim 1s ease-in-out infinite;
        }

        @keyframes wave {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .nav-link:hover .sidebar-icon.lucide-waves {
          animation: wave 1s ease-in-out infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .nav-link:hover .sidebar-icon.lucide-satellite {
          animation: rotate 2s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Sidebar;