import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const data = [
  { name: 'Protein', value: 118, color: '#FF8A3D' },
  { name: 'Karbo', value: 163, color: '#3D6FFF' },
  { name: 'Lemak', value: 53, color: '#19B26B' },
];

export const CaloriesChart: React.FC = () => {
  return (
    <div className="dashboard-card calories-chart-card">
      <div className="card-header">
        <div>
          <h3 className="card-title">Kalori Harian</h3>
          <p className="card-subtitle">Target 2200 kcal</p>
        </div>
      </div>
      <div className="chart-container donut-container" style={{ height: '200px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-center-text">
          <div className="donut-value">1720</div>
          <div className="donut-label">/ 2200 kcal</div>
        </div>
      </div>
      <div className="chart-legend">
        {data.map((item) => (
          <div className="legend-item" key={item.name}>
            <span className="legend-color" style={{ backgroundColor: item.color }}></span>
            <span className="legend-text">{item.name} {item.value}g</span>
          </div>
        ))}
      </div>
    </div>
  );
};
