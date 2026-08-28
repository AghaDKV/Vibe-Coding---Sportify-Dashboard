import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './Progress.css';

const data = [
  { name: 'W1', berat: 78.3, target: 77.4 },
  { name: 'W2', berat: 77.8, target: 76.8 },
  { name: 'W3', berat: 76.9, target: 76.2 },
  { name: 'W4', berat: 76.4, target: 75.6 },
  { name: 'W5', berat: 75.6, target: 75.0 },
  { name: 'W6', berat: 74.8, target: 74.4 },
];

export const WeightChart: React.FC = () => {
  return (
    <div className="dashboard-card weight-chart-card">
      <div className="card-header" style={{ marginBottom: '1.5rem' }}>
        <h3 className="card-title">Tren Berat vs Target</h3>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-primary)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} domain={[74, 80]} ticks={[74, 76, 78, 79.4]} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-primary)', borderRadius: '8px' }}
              itemStyle={{ color: 'var(--text-primary)' }}
            />
            <Legend 
              iconType="circle" 
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Line 
              type="monotone" 
              dataKey="berat" 
              name="Berat"
              stroke="#FF8A3D" 
              strokeWidth={2} 
              dot={{ r: 4, fill: '#var(--bg-primary)', stroke: '#FF8A3D', strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              name="Target"
              stroke="#3D6FFF" 
              strokeWidth={2} 
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
