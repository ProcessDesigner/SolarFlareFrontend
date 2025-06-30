import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-address">
          <p>Shah and Anchor Kutchhi Engineering College</p>
          <p>Mahavir Education Trust Chowk,</p>
          <p>Chembur, Mumbai - 400088,</p>
          <p>Maharashtra, India.</p>
        </div>
        <div className="footer-section">
          <p>Connect with Us</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/@shahanchor/"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://x.com/sakectweets/"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/sakec_chembur/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@SAKECYouTubeChannel"
              target="_blank"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 SWPC. All rights reserved.</p>
      </div>
      <style jsx>{`
        .footer {
          background: linear-gradient(to right, #003366, #004080);
          color: white;
          padding: 3rem 2rem 1rem;
          margin-left: -10px;
          margin-bottom: -10px;
        }
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-section {
          flex: 1;
          min-width: 200px;
          margin-bottom: 2rem;
          text-align: right;
        }
        .footer-section p {
          margin-right: 12px;
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .footer-section h3 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
          position: relative;
        }
        .footer-section h3::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 30px;
          height: 2px;
          background-color: #ffffff;
        }
        .footer-section ul {
          list-style-type: none;
          padding: 0;
        }
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: #e0e0e0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-section a:hover {
          color: #ffffff;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          justify-content: right;
        }
        .social-icons a {
          color: #ffffff;
          transition: transform 0.3s ease;
        }
        .social-icons a:hover {
          transform: scale(1.1);
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
