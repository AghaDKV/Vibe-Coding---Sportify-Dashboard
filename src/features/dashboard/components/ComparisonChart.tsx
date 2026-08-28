import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const data = [
  { name: 'Sen', current: 500, previous: 50 },
  { name: 'Sel', current: 330, previous: 40 },
  { name: 'Rab', current: 600, previous: 70 },
  { name: 'Kam', current: 280, previous: 30 },
  { name: 'Jum', current: 700, previous: 80 },
  { name: 'Sab', current: 450, previous: 50 },
  { name: 'Min', current: 200, previous: 20 },
];

export const ComparisonChart: React.FC = () => {
  return (
    <div className="dashboard-card comparison-chart-card">
      <div className="card-header">
        <h3 className="card-title">Perbandingan Harian</h3>
      </div>
      <div className="chart-container" style={{ height: '240px', marginTop: '1rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-primary)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} />
            <Bar dataKey="current" fill="var(--bg-brand-solid)" radius={[4, 4, 0, 0]} barSize={24} />
            <Bar dataKey="previous" fill="var(--bg-secondary-color-solid)" radius={[4, 4, 0, 0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
