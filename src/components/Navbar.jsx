import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

function Navbar({ sidebarOpen }) {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    'Home',
    'Events',
    'About Space Weather',
    // 'Product and Data',
    'Dashboards',
    // 'Media and Resources',
    // 'Subscribe',
    // 'Annual Meeting',
    'About',
    'Contact Us'
  ];

  return (
    <nav className={`navbar ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="logo"></div>
      <ul className="nav-links">
        {navItems.map((tab) => (
          <li key={tab} className={activeTab === tab ? 'active' : ''}>
            <Link
              to={tab === "Home" ? "/" : `/${tab.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button aria-label="Search"><Search size={20} /></button>
        <button aria-label="Notifications"><Bell size={20} /></button>
        <button aria-label="User Profile"><User size={20} /></button>
      </div>
      <style jsx>{`
        .navbar {
          background: linear-gradient(to right, rgb(0, 0, 66), rgb(34, 34, 120));
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: padding-left 0.3s ease-in-out;
          margin-top: -10px;
          position: relative;
          overflow-x: hidden; /* Remove scrollbar */
        }
        .navbar.sidebar-open {
          padding-left: 270px;
        }
        .logo {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          margin-left: 60px;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow-x: hidden; /* Remove scrollbar */
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .nav-links::-webkit-scrollbar {
          display: none; /* Remove scrollbar */
        }
        .nav-links li {
          margin: 0 1rem;
          white-space: nowrap;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
          font-size: 0.9rem;
        }
        .nav-links li.active a,
        .nav-links a:hover {
          border-bottom-color: white;
        }
        .nav-actions {
          display: flex;
          gap: 1rem;
          margin-left: 1rem;
        }
        .nav-actions button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .nav-actions button:hover {
          transform: scale(1.1);
        }
        @media (max-width: 1024px) {
          .nav-links {
            padding: 0 1rem;
          }
          .nav-actions {
            margin-left: 0.5rem;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;