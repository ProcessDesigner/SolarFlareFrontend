import React from 'react';
import { Clock } from 'lucide-react';

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

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-container">
        <h2 className="timeline-title">Program Schedule</h2>
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-time">
              <Clock size={16} className="clock-icon" />
              {event.time}
            </div>
            <div className="timeline-content">
              <div className="timeline-dot" />
              <div className="timeline-event-title">{event.event}</div>
              {event.speakers && (
                <div className="timeline-speakers">
                  {event.speakers.map((speaker, idx) => (
                    <div key={idx} className="speaker-item">{speaker}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .timeline {
          background: #ffffff;
          padding: 60px 20px;
          color: #333333;
          min-height: 100vh;
        }

        .timeline-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          left: 159px;
          top: 80px;
          bottom: 0;
          width: 3px;
          background: #e0e0e0;
          animation: growLine 1s ease-out forwards;
          transform-origin: top;
        }

        .timeline-title {
          font-size: 36px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 60px;
          color: #333333;
          position: relative;
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .timeline-event {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 50px;
          margin-bottom: 40px;
          position: relative;
          opacity: 0;
          transform: translateX(-20px);
          animation: slideIn 0.5s ease forwards;
        }

        .timeline-event:nth-child(n) {
          animation-delay: calc(n * 0.1s + 0.5s);
        }

        .timeline-time {
          font-weight: 600;
          color: #333333;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          justify-content: flex-end;
          padding-right: 30px;
        }

        .clock-icon {
          color: #555555;
        }

        .timeline-content {
          position: relative;
          background: #ffffff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid #eeeeee;
          transition: all 0.3s ease;
          margin-left: 10px;
        }

        .timeline-content:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        .timeline-dot {
          position: absolute;
          left: -56px;
          top: 50%;
          width: 12px;
          height: 12px;
          background-color: #ffffff;
          border: 2px solid #555555;
          border-radius: 50%;
          transform: translateY(-50%);
          z-index: 1;
          transition: all 0.3s ease;
        }

        .timeline-content:hover .timeline-dot {
          background-color: #555555;
          transform: translateY(-50%) scale(1.2);
        }

        .timeline-event-title {
          font-size: 18px;
          font-weight: 600;
          color: #222222;
          margin-bottom: 8px;
        }

        .timeline-speakers {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #eeeeee;
        }

        .speaker-item {
          color: #555555;
          margin-bottom: 10px;
          padding-left: 16px;
          position: relative;
          font-size: 15px;
          line-height: 1.5;
          transition: all 0.2s ease;
        }

        .speaker-item:hover {
          color: #333333;
          transform: translateX(5px);
        }

        .speaker-item::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #555555;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes growLine {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @media (max-width: 768px) {
          .timeline-container::before {
            left: 119px;
          }

          .timeline-event {
            grid-template-columns: 120px 1fr;
            gap: 30px;
          }

          .timeline-dot {
            left: -36px;
          }

          .timeline-time {
            padding-right: 20px;
            font-size: 14px;
          }

          .timeline-content {
            padding: 20px;
          }

          .timeline-event-title {
            font-size: 16px;
          }

          .speaker-item {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}

export default Timeline;