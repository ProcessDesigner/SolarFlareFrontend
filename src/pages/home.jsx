import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="home">
      <Header className={sidebarOpen ? 'shrink' : ''} />
      <Navbar sidebarOpen={sidebarOpen} />
      <div className="content-wrapper">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className={`main-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <MainContent sidebarOpen={sidebarOpen} />
          <Footer />
        </div>
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
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
      `}</style>
    </div>
  );
}

export default Home;

