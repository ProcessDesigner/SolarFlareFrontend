import React, { useState } from 'react';
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Sun, Wind, Activity, Zap, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('3-Day Forecast');

  const pieData = [
    { name: 'X-Class', value: 5 },
    { name: 'M-Class', value: 15 },
    { name: 'C-Class', value: 40 },
    { name: 'B-Class', value: 30 },
    { name: 'A-Class', value: 10 },
  ];

  const areaData = [
    { name: 'Day 1', 'Solar Wind Speed': 400, 'Kp Index': 3 },
    { name: 'Day 2', 'Solar Wind Speed': 450, 'Kp Index': 4 },
    { name: 'Day 3', 'Solar Wind Speed': 500, 'Kp Index': 5 },
    { name: 'Day 4', 'Solar Wind Speed': 420, 'Kp Index': 3 },
    { name: 'Day 5', 'Solar Wind Speed': 480, 'Kp Index': 4 },
  ];

  const COLORS = ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFD9BA'];

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    return (
      <g>
        <text x={cx} y={cy} dy={-10} textAnchor="middle" fill={fill} style={{ fontSize: '14px', fontWeight: 'bold' }}>
          {payload.name}
        </text>
        <text x={cx} y={cy} dy={20} textAnchor="middle" fill="#666" style={{ fontSize: '12px' }}>
          {`${value} (${(percent * 100).toFixed(0)}%)`}
        </text>
        <Pie
          data={[{ name: '', value: 100 }]}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="none"
          stroke="#e0e0e0"
        />
      </g>
    );
  };

  const styles = {
    dashboard: {
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      marginLeft:'30px',
      background: '#f8fafc',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '24px',
      textAlign: 'center',
    },
    alertCard: {
      background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      animation: 'slideIn 0.5s ease-out',
    },
    alertIcon: {
      color: '#dc2626',
      animation: 'pulse 2s infinite',
    },
    alertContent: {
      flex: 1,
    },
    alertTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#991b1b',
      marginBottom: '4px',
    },
    alertText: {
      color: '#7f1d1d',
      fontSize: '14px',
      lineHeight: '1.5',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginBottom: '32px',
    },
    card: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'all 0.3s ease',
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '8px',
    },
    cardValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '4px',
    },
    cardSubValue: {
      fontSize: '14px',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginBottom: '24px',
    },
    tab: {
      padding: '12px 24px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      fontWeight: '500',
    },
    forecastContainer: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    forecastTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '16px',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '8px',
    },
    forecastList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    forecastItem: {
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '8px',
      background: '#f8fafc',
      transition: 'all 0.3s ease',
    },
    chartContainer: {
      marginBottom: '24px',
    },
    chartTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '16px',
    },
  };

  // Color configurations for cards
  const cardConfigs = {
    solarWind: {
      bg: '#fff1f2',
      valueColor: '#e11d48',
      subValueColor: '#be123c',
      iconColor: '#fb7185'
    },
    kpIndex: {
      bg: '#f0f9ff',
      valueColor: '#0369a1',
      subValueColor: '#0c4a6e',
      iconColor: '#38bdf8'
    },
    xRayFlux: {
      bg: '#fefce8',
      valueColor: '#ca8a04',
      subValueColor: '#854d0e',
      iconColor: '#facc15'
    },
    cmeProbability: {
      bg: '#faf5ff',
      valueColor: '#9333ea',
      subValueColor: '#6b21a8',
      iconColor: '#c084fc'
    }
  };

  // Tab colors
  const tabColors = {
    active: {
      bg: '#3b82f6',
      text: '#ffffff',
      shadow: '0 4px 6px -1px rgba(59, 130, 246, 0.5)'
    },
    inactive: {
      bg: '#f8fafc',
      text: '#64748b',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.title}>Space Weather Dashboard</h1>

      <div style={styles.alertCard} className="alert-card">
        <AlertTriangle size={32} style={styles.alertIcon} className="alert-icon" />
        <div style={styles.alertContent}>
          <h3 style={styles.alertTitle}>Severe Geomagnetic Storm Approaching</h3>
          <p style={styles.alertText}>
            G3 level storm expected to reach Earth in the next 24 hours. Potential impacts on satellite operations and power grids.
          </p>
        </div>
      </div>

      <div style={styles.cardGrid}>
        <div style={{...styles.card, backgroundColor: cardConfigs.solarWind.bg}} className="dashboard-card">
          <Wind size={36} color={cardConfigs.solarWind.iconColor} className="dashboard-icon" />
          <h3 style={styles.cardTitle}>Solar Wind Speed</h3>
          <p style={{...styles.cardValue, color: cardConfigs.solarWind.valueColor}}>450 km/s</p>
          <p style={{...styles.cardSubValue, color: cardConfigs.solarWind.subValueColor}}>+12% from last hour</p>
        </div>
        <div style={{...styles.card, backgroundColor: cardConfigs.kpIndex.bg}} className="dashboard-card">
          <Activity size={36} color={cardConfigs.kpIndex.iconColor} className="dashboard-icon" />
          <h3 style={styles.cardTitle}>Kp Index</h3>
          <p style={{...styles.cardValue, color: cardConfigs.kpIndex.valueColor}}>4</p>
          <p style={{...styles.cardSubValue, color: cardConfigs.kpIndex.subValueColor}}>Active</p>
        </div>
        <div style={{...styles.card, backgroundColor: cardConfigs.xRayFlux.bg}} className="dashboard-card">
          <Sun size={36} color={cardConfigs.xRayFlux.iconColor} className="dashboard-icon" />
          <h3 style={styles.cardTitle}>X-Ray Flux</h3>
          <p style={{...styles.cardValue, color: cardConfigs.xRayFlux.valueColor}}>C2.3</p>
          <p style={{...styles.cardSubValue, color: cardConfigs.xRayFlux.subValueColor}}>Low solar activity</p>
        </div>
        <div style={{...styles.card, backgroundColor: cardConfigs.cmeProbability.bg}} className="dashboard-card">
          <Zap size={36} color={cardConfigs.cmeProbability.iconColor} className="dashboard-icon" />
          <h3 style={styles.cardTitle}>CME Probability</h3>
          <p style={{...styles.cardValue, color: cardConfigs.cmeProbability.valueColor}}>65%</p>
          <p style={{...styles.cardSubValue, color: cardConfigs.cmeProbability.subValueColor}}>High likelihood in next 24h</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Solar Flare Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                activeShape={renderActiveShape}
                startAngle={180}
                endAngle={0}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>5-Day Forecast</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Solar Wind Speed" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Area type="monotone" dataKey="Kp Index" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={styles.tabContainer}>
        {['3-Day Forecast', 'Current Conditions'].map((tab) => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              backgroundColor: activeTab === tab ? tabColors.active.bg : tabColors.inactive.bg,
              color: activeTab === tab ? tabColors.active.text : tabColors.inactive.text,
              boxShadow: activeTab === tab ? tabColors.active.shadow : tabColors.inactive.shadow,
            }}
            onClick={() => setActiveTab(tab)}
            className="tab-button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={styles.forecastContainer}>
        {activeTab === '3-Day Forecast' && (
          <div>
            <h4 style={styles.forecastTitle}>3-Day Space Weather Forecast</h4>
            <ul style={styles.forecastList}>
              <li style={styles.forecastItem} className="forecast-item">
                <strong>Day 1:</strong> Severe geomagnetic storm conditions (G3)
              </li>
              <li style={styles.forecastItem} className="forecast-item">
                <strong>Day 2:</strong> Moderate solar activity, potential aurora displays
              </li>
              <li style={styles.forecastItem} className="forecast-item">
                <strong>Day 3:</strong> Solar wind speeds normalizing, minor geomagnetic activity
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'Current Conditions' && (
          <div>
            <h4 style={styles.forecastTitle}>Current Space Weather Conditions</h4>
            <ul style={styles.forecastList}>
              <li style={styles.forecastItem} className="forecast-item">
                <strong>Solar Wind Speed:</strong> 450 km/s
              </li>
              <li style={styles.forecastItem} className="forecast-item">
                <strong>Interplanetary Magnetic Field:</strong> 5 nT
              </li>
              <li style={styles.forecastItem} className="forecast-item">
                <strong>X-ray Flux:</strong> C2.3
              </li>
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .alert-card {
          animation: slideIn 0.5s ease-out;
        }

        .alert-icon {
          animation: pulse 2s infinite;
        }

        .forecast-item {
          animation: fadeIn 0.5s ease-out;
          animation-fill-mode: both;
        }

        .forecast-item:nth-child(1) { animation-delay: 0.1s; }
        .forecast-item:nth-child(2) { animation-delay: 0.2s; }
        .forecast-item:nth-child(3) { animation-delay: 0.3s; }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .forecast-item:hover {
          transform: translateX(8px);
          background: #f1f5f9;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .tab-button:hover {
          transform: translateY(-1px);
          filter: brightness(1.05);
        }

        .dashboard-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .dashboard-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .dashboard-icon {
          transition: transform 0.3s ease;
        }

        .dashboard-card:hover .dashboard-icon {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

