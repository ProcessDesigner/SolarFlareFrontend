import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Header className={sidebarOpen ? 'shrink' : ''} />
      <Navbar sidebarOpen={sidebarOpen} />
      <div className="content-wrapper">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className={`main-container ${sidebarOpen ? "sidebar-open" : ""}`}>
          {/* Outlet renders the current route's element */}
          <Outlet />
          <Footer />
        </div>
      </div>

      <style>
        {`
        .content-wrapper {
          display: flex;
          flex-grow: 1;
        }
        .main-container {
          flex-grow: 1;
          margin-left: 60px;
          transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
          width: calc(100% - 60px);
          padding: 0;
        }
        .main-container.sidebar-open {
          margin-left: 250px;
          width: calc(100% - 250px);
        }
        .header.shrink {
          margin-left: 250px;
          transition: margin-left 0.3s ease-in-out;
        }
        `}
      </style>
    </div>
  );
}

export default Layout;