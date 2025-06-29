import React from 'react';

function Header({ className }) {
  return (
    <header className={`header ${className}`}>
      <img src="assets/logoR.png" width={70} height={70} alt="Left Logo" className="left-logo" />
      <div className="header-content">
        <p>India's First</p>
        <h2>Space Weather Prediction Center</h2>
        <p>Industry * Academia * National Labs</p>
      </div>
      <img src="assets/logoL.png" width={70} height={70} alt="Right Logo" className="right-logo" />
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-size: cover;
          background-position: center;
          padding: 1.5rem 2rem;
          color: black;
          text-align: center;
          margin-top: -12px;
          transition: margin-left 0.3s ease-in-out;
          color: white;
          background: linear-gradient(to right, rgb(0, 0, 66), rgb(34, 34, 120));
          
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .left-logo {
          flex-shrink: 0;
          margin-left: 40px; 
        }
        .right-logo {
          flex-shrink: 0;
        }
        h1 {
          font-family: 'Times New Roman', serif;
          font-size: 1.5rem;
          font-weight: normal;
          margin: 0 0 0.5rem 0;
          opacity: 0.9;
        }
        h2 {
          font-size: 2rem;
          font-weight: bold;
          margin: 0 0 0.5rem 0;
          letter-spacing: 1px;
        }
        p {
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.8;
        }
      `}</style>
    </header>
  );
}

export default Header;


