import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import './Progress.css';

const data = [
  { name: 'Sen', menit: 510, target: 50 },
  { name: 'Sel', menit: 350, target: 40 },
  { name: 'Rab', menit: 600, target: 80 },
  { name: 'Kam', menit: 280, target: 30 },
  { name: 'Jum', menit: 700, target: 90 },
  { name: 'Sab', menit: 450, target: 50 },
  { name: 'Min', menit: 200, target: 20 },
];

export const ActivityProgressChart: React.FC = () => {
  return (
    <div className="dashboard-card activity-progress-card" style={{ width: '100%' }}>
      <div className="card-header" style={{ marginBottom: '1.5rem' }}>
        <h3 className="card-title">Menit Latihan per Hari</h3>
      </div>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-primary)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} domain={[0, 800]} ticks={[0, 200, 400, 600, 800]} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-primary)', borderRadius: '8px' }}
              itemStyle={{ color: 'var(--text-primary)' }}
            />
            <Line 
              type="monotone" 
              dataKey="menit" 
              name="Menit"
              stroke="#3D6FFF" 
              strokeWidth={2} 
              dot={{ r: 4, fill: 'var(--bg-primary)', stroke: '#3D6FFF', strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              name="Target"
              stroke="#FF8A3D" 
              strokeWidth={2} 
              dot={{ r: 4, fill: 'var(--bg-primary)', stroke: '#FF8A3D', strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
