import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

function Events() {
  const [visibleItems, setVisibleItems] = useState(0);

  const events = [
    {
      month: 'JANUARY',
      date: '14',
      time: '10 AM',
      title: 'Space Weather Prediction Center Inauguration',
      schedule: [
        { time: '09:30 AM', event: 'Welcome and Refreshments' },
        { time: '10:00 AM', event: 'Inauguration of Space Weather Prediction Center (SWPC)' },
        { time: '10:15 AM', event: 'Projects Presentations at the SWPC Auditorium' },
        { time: '10:45 AM', event: 'Welcome and Lamp Lighting Ceremony' },
        { time: '11:00 AM', event: 'Launch of SWPC Website and Presentations' },
        { time: '12:00 PM', event: 'Q&A Session' },
        { time: '12:30 PM', event: 'Networking Lunch' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        const maxItems = events[0].schedule.length;
        return prev < maxItems ? prev + 1 : maxItems;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="events-page">
      <div className="events-content">
        <div className="page-title">
          <h1>Upcoming Events</h1>
          <div className="decorative-line"></div>
        </div>
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-header">
              <div className="event-date">
                <div className="date-container">
                  <span className="month">{event.month}</span>
                  <span className="date">{event.date}</span>
                  <span className="time">{event.time}</span>
                </div>
              </div>
              <h2 className="event-title">{event.title}</h2>
            </div>
            {/* <div className="download-section">
              <a href="assets/swap.pdf" download className="download-button">
                <Download size={24} className="download-icon" />
                Download Event PDF
              </a>
            </div> */}
            <div className="event-schedule">
              <h3>Program Schedule</h3>
              <div className="timeline">
                {event.schedule.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`timeline-item ${idx < visibleItems ? 'visible' : ''}`}
                    style={{animationDelay: `${idx * 0.2}s`}}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-time">{item.time}</div>
                      <div className="timeline-event">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
        .events-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #ffffff;
          color: #333333;
        }
        .events-content {
          padding: 2rem;
          position: relative;
        }
        .page-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        .page-title h1 {
          color: #1e90ff;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .decorative-line {
          height: 4px;
          width: 100px;
          background: linear-gradient(90deg, #1e90ff 0%, #00bfff 100%);
          margin: 0 auto;
          border-radius: 2px;
        }
        .event-card {
          background: #ffffff;
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .event-header {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 2rem;
          margin-left: 230px;
          margin-top: -20px;
        }
        .event-date {
          flex-shrink: 0;
        }
        .date-container {
          background: linear-gradient(135deg, #1e90ff 0%, #00bfff 100%);
          padding: 1rem;
          border-radius: 10px;
          color: #ffffff;
          text-align: center;
          width: 120px;
          box-shadow: 0 4px 15px rgba(30, 144, 255, 0.3);
        }
        .month {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .date {
          display: block;
          font-size: 2rem;
          font-weight: bold;
          line-height: 1;
          margin: 0.3rem 0;
        }
        .time {
          display: block;
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .event-title {
          font-size: 1.8rem;
          color: #1e90ff;
          margin: 0;
          padding-top: 0.5rem;
        }
        .download-section {
          display: flex;
          justify-content: center;
          margin-bottom: 5rem;
          margin-top:-70px;
        }
        .download-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background-color: white;
          color: #1e90ff;
          border: 2px solid #1e90ff;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .download-button:hover {
          background-color: #f0f8ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(30, 144, 255, 0.2);
        }
        @keyframes downloadAnimation {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .download-icon {
          transition: all 0.3s ease;
        }
        .download-button:hover .download-icon {
          animation: downloadAnimation 1s infinite;
        }
        .event-schedule {
          background: #f0f8ff;
          padding: 1.5rem;
          margin-top: -18px;
          border-radius: 10px;
        }
        .event-schedule h3 {
          color: #1e90ff;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          text-align: center;
        }
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-top: 20px;
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
          padding-bottom: 20px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          width: 2px;
          background: #1e90ff;
          top: 35px;
          bottom: 60px;
          animation: fadeIn 5s;
          left: 21px;
          margin-top: 40px;
          transition: background 0.5s ease;
          opacity: 0;
          animation: fadeIn 1s ease-out 0.5s forwards;
        }
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 100%;
          box-sizing: border-box;
          opacity: 0;
          animation: fadeIn 5s;
          transform: translateY(20px);
          transition: background-color 0.3s ease, opacity 0.5s ease, transform 0.5s ease;
        }
        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s ease;
        }
        .timeline-item:hover {
          background-color: rgba(30, 144, 255, 0.05);
        }
        .timeline-item.visible ~ .timeline::before {
          background: linear-gradient(to bottom, #1e90ff, #00bfff);
        }
        .timeline-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          left: 10px;
          background: #ffffff;
          border: 2px solid #1e90ff;
          top: 15px;
          border-radius: 50%;
          margin-top: 40px;
          z-index: 1;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        .timeline-item.visible .timeline-dot {
          background: #1e90ff;
        }
        .timeline-content {
          padding: 20px;
          background-color: #ffffff;
          position: relative;
          border-radius: 6px;
          margin-left: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }
        .timeline-content:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 8px 20px rgba(30, 144, 255, 0.2);
        }
        .timeline-time {
          font-weight: bold;
          color: #1e90ff;
          margin-bottom: 8px;
          font-size: 1.1rem;
        }
        .timeline-event {
          color: #333333;
          font-size: 1rem;
          line-height: 1.5;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.7);
          }
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(30, 144, 255, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(30, 144, 255, 0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .timeline-item {
          animation: fadeInUp 0.5s ease forwards;
          animation-play-state: paused;
        }
        .timeline-item.visible {
          animation-play-state: running;
        }
        @media screen and (max-width: 768px) {
          .event-header {
            flex-direction: column;
            align-items: center;
          }
          .event-title {
            text-align: center;
          }
          .timeline::before {
            left: 31px;
          }
          .timeline-item {
            padding-left: 70px;
            padding-right: 25px;
          }
          .timeline-dot {
            left: 22px;
          }
        }
        `}
      </style>
    </div>
  );
}

export default Events;
