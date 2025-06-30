import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import Dashboard from './Dashboard';
import Timeline from './Timeline';

function MainContent({ sidebarOpen }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Exploring Our Solar System",
      subtitle: "Journey through the cosmos with cutting-edge research.",
    },
    {
      title: "Unraveling Space Mysteries",
      subtitle: "Discover the latest in space science and exploration.",
    },
    {
      title: "Advancing Space Technologies",
      subtitle: "Pushing the boundaries of scientific knowledge.",
    },
  ];

  const timelineEvents = [
    {
      time: "09:30 AM",
      event: "Welcome and Refreshments"
    },
    {
      time: "10:00 AM",
      event: "Inauguration of Space Weather Prediction Center (SWPC)"
    },
    {
      time: "10:15 AM",
      event: "Projects Presentations at the SWPC"
    },
    {
      time: "10:30 AM",
      event: "Auditorium"
    },
    {
      time: "10:45 AM",
      event: "Welcome and Lamp Lighting Ceremony"
    },
    {
      time: "10:50 AM",
      event: "Launch of SWPC Website and Presentation of One-Year Plan",
      speakers: [
        "Shri. Jayantibhai Chhadva, Chairman SAKEC, ISME",
        "Dr. Bhavesh Patel, Principal, SAKEC"
      ]
    },
    {
      time: "11:15 AM",
      event: "Special Address",
      speakers: [
        "M. Srikanth Kodeboyina, Founder and CEO, Blue Sky",
        "Dr. Rajshekhar Meta, Chief Meteorologist, ISRO",
        "Mr. Joe Yang, Principal Commercial Officer, U.S. Consulate Mumbai",
        "Mr. Jayant Patil, Chairman, ISpA; Advisor, Defence & Smart Tech. to CEO & MD, Larsen & Toubro",
        "Prof. Dibyendu Chakrabarty, Space and Atmospheric Sciences Division, PRL",
        "Ms. Nashid Chowdhury, Investment and Trade Commissioner, Government of Western Australia, India-Gulf Region",
        "Mr. Sireesha Pallikonda, Vice President of Business Development, Skyroot Aerospace"
      ]
    },
    {
      time: "12:00 PM",
      event: "Q&A Session"
    },
    {
      time: "12:30 PM",
      event: "Networking Lunch"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { 
      title: 'Weather Forecast', 
      description: 'Stay informed with our latest weather updates and predictions.', 
      icon: 'cloud',
      image: 'assets/weather.png',
      link: '#weather-forecast'
    },
    { 
      title: 'Ocean Research', 
      description: 'Explore groundbreaking discoveries in oceanography and marine science.', 
      icon: 'droplet',
      image: 'assets/ocean.png',
      link: '#ocean-research'
    },
    { 
      title: 'Climate Change', 
      description: 'Analyze the impacts of climate change and our ongoing mitigation efforts.', 
      icon: 'thermometer',
      image: 'assets/climate.png',
      link: '#climate-change'
    },
    { 
      title: 'Marine Life', 
      description: 'Investigate diverse marine ecosystems and species in our oceans.', 
      icon: 'fish',
      image: 'assets/marine.png',
      link: '#marine-life'
    },
  ];

  return (
    <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="hero">
        <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="planetGradient1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#FF8E8E" />
            </radialGradient>
            <radialGradient id="planetGradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4ECDC4" />
              <stop offset="100%" stopColor="#2EAF9F" />
            </radialGradient>
            <radialGradient id="planetGradient3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD93D" />
              <stop offset="100%" stopColor="#FFA940" />
            </radialGradient>
            <radialGradient id="planetGradient4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6A0DAD" />
              <stop offset="100%" stopColor="#9B59B6" />
            </radialGradient>
            <radialGradient id="planetGradient5" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1ABC9C" />
              <stop offset="100%" stopColor="#16A085" />
            </radialGradient>
          </defs>
          
          {/* Background */}
          <rect width="100%" height="100%" fill="url(#space-background)" />
          
          {/* Stars */}
          {[...Array(300)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 400}
              r={Math.random() * 2}
              fill="url(#starGradient)"
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 3}s`}
              />
            </circle>
          ))}
          
          {/* Shooting Stars */}
          {[...Array(1)].map((_, i) => (
            <g key={`shooting-star-${i}`}>
              <line
                x1={Math.random() * 800}
                y1={Math.random() * 200}
                x2={Math.random() * 800 + 200}
                y2={Math.random() * 200 + 200}
                stroke="white"
                strokeWidth="2"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${Math.random() * 15}s`}
                />
              </line>
            </g>
          ))}
          
          {/* Main Planet */}
          <circle cx="500" cy="200" r="50" fill="url(#planetGradient1)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 20,-20; 0,0; -20,20; 0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Planet Rings */}
          <ellipse
            cx="500"
            cy="200"
            rx="70"
            ry="20"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 500 200"
              to="360 500 200"
              dur="20s"
              repeatCount="indefinite"
            />
          </ellipse>
          
          {/* Secondary Planets */}
          <circle cx="300" cy="150" r="30" fill="url(#planetGradient2)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -20,20; 0,0"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle cx="700" cy="250" r="25" fill="url(#planetGradient3)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 15,-15; 0,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Additional Planets */}
          <circle cx="150" cy="300" r="20" fill="url(#planetGradient4)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 10,-10; 0,0"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="850" cy="100" r="15" fill="url(#planetGradient5)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -15,15; 0,0"
              dur="9s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Small Asteroids */}
          {[...Array(8)].map((_, i) => (
            <circle
              key={`asteroid-${i}`}
              cx={450 + i * 15}
              cy={250 + (i % 2) * 10}
              r="2"
              fill="#A9A9A9"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 500 200`}
                to={`${360 + i * 30} 500 200`}
                dur={`${10 + i}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
        <div className="hero-content">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
        </div>
      </div>
      
      <Dashboard />
      
      
    
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card animated-card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <a href={card.link} className="learn-more-link">
                Learn More <ArrowRight size={18} className="learn-more-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .main-content {
          margin-left: -20px;
          padding: 0;
          transition: padding-left 0.3s ease-in-out;
        }
        .main-content.sidebar-open {
          padding-left: 16px;
        }
        .hero {
          position: relative;
          height: 400px;
          overflow: hidden;
          background: linear-gradient(to bottom, rgb(0, 0, 66), rgb(0, 0, 88));
        }
        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 1;
        }
        .hero-title {
          font-size: 42px;
          font-weight: bold;
          margin-bottom: 16px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .hero-subtitle {
          font-size: 20px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .timeline {
          background: linear-gradient(to bottom, rgb(0, 0, 88), rgb(0, 0, 110));
          padding: 40px 20px;
          color: white;
        }
        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .timeline-title {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
          color: white;
        }
        .timeline-event {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 20px;
          margin-bottom: 24px;
          position: relative;
          padding-left: 20px;
          opacity: 0;
          transform: translateX(-20px);
          animation: slideIn 0.5s ease forwards;
        }
        .timeline-event:nth-child(n) {
          animation-delay: calc(n * 0.1s);
        }
        .timeline-time {
          font-weight: bold;
          color: #FFD700;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .timeline-content {
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: -25px;
          top: 50%;
          width: 10px;
          height: 10px;
          background-color: #FFD700;
          border-radius: 50%;
          transform: translateY(-50%);
        }
        .timeline-event-title {
          font-size: 18px;
          margin-bottom: 4px;
        }
        .timeline-speakers {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 8px;
          padding-left: 16px;
          border-left: 2px solid rgba(255, 255, 255, 0.2);
        }
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 32px;
        }
        .card {
          background: linear-gradient(135deg, #ffffff, #f0f0f0);
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-image {
          width: 100%;
          height: auto;
        }
        .card-content {
          padding: 24px;
        }
        .card-title {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 12px;
          color: #333;
        }
        .card-description {
          color: #555;
          margin-bottom: 20px;
          font-size: 16px;
          line-height: 1.5;
        }
        .learn-more-link {
          display: inline-flex;
          align-items: center;
          color: #0073CF;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
          font-size: 16px;
        }
        .learn-more-icon {
          margin-left: 8px;
          transition: transform 0.2s ease;
        }
        .learn-more-link:hover .learn-more-icon {
          transform: translateX(5px);
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (max-width: 768px) {
          .timeline-event {
            grid-template-columns: 100px 1fr;
            gap: 12px;
          }
        }
      `}</style>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="space-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-1)" />
            <stop offset="50%" stopColor="var(--color-2)" />
            <stop offset="100%" stopColor="var(--color-3)" />
          </linearGradient>
        </defs>
      </svg>
    </main>
  );
}

export default MainContent;

