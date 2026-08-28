import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './Progress.css';

const data = [
  { subject: 'Kardio', A: 80, fullMark: 100 },
  { subject: 'Kekuatan', A: 70, fullMark: 100 },
  { subject: 'Mobilitas', A: 50, fullMark: 100 },
  { subject: 'Konsistensi', A: 85, fullMark: 100 },
  { subject: 'Nutrisi', A: 65, fullMark: 100 },
];

export const BalanceChart: React.FC = () => {
  return (
    <div className="dashboard-card balance-chart-card">
      <div className="card-header" style={{ marginBottom: '1.5rem' }}>
        <h3 className="card-title">Keseimbangan Latihan</h3>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="var(--border-primary)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar name="Keseimbangan" dataKey="A" stroke="#FF8A3D" fill="#FF8A3D" fillOpacity={0.2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
