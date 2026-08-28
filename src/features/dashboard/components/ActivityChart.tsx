import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const dataKalori = [
  { name: 'Sen', value: 500 },
  { name: 'Sel', value: 350 },
  { name: 'Rab', value: 600 },
  { name: 'Kam', value: 280 },
  { name: 'Jum', value: 700 },
  { name: 'Sab', value: 450 },
  { name: 'Min', value: 200 },
];

const dataMenit = [
  { name: 'Sen', value: 45 },
  { name: 'Sel', value: 30 },
  { name: 'Rab', value: 60 },
  { name: 'Kam', value: 20 },
  { name: 'Jum', value: 90 },
  { name: 'Sab', value: 120 },
  { name: 'Min', value: 15 },
];

const dataLangkah = [
  { name: 'Sen', value: 8000 },
  { name: 'Sel', value: 6500 },
  { name: 'Rab', value: 10500 },
  { name: 'Kam', value: 4000 },
  { name: 'Jum', value: 12000 },
  { name: 'Sab', value: 15000 },
  { name: 'Min', value: 3000 },
];

export const ActivityChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Kalori' | 'Menit' | 'Langkah'>('Kalori');

  const getActiveData = () => {
    switch (activeTab) {
      case 'Menit': return dataMenit;
      case 'Langkah': return dataLangkah;
      default: return dataKalori;
    }
  };
  return (
    <div className="dashboard-card activity-chart-card">
      <div className="card-header">
        <div>
          <h3 className="card-title">Aktivitas Mingguan</h3>
          <p className="card-subtitle">7 hari terakhir</p>
        </div>
        <div className="chart-filters">
          <button 
            className={`filter-btn ${activeTab === 'Kalori' ? 'active' : ''}`}
            onClick={() => setActiveTab('Kalori')}
          >
            Kalori
          </button>
          <button 
            className={`filter-btn ${activeTab === 'Menit' ? 'active' : ''}`}
            onClick={() => setActiveTab('Menit')}
          >
            Menit
          </button>
          <button 
            className={`filter-btn ${activeTab === 'Langkah' ? 'active' : ''}`}
            onClick={() => setActiveTab('Langkah')}
          >
            Langkah
          </button>
        </div>
      </div>
      <div className="chart-container" style={{ height: '240px', marginTop: '1rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={getActiveData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--bg-brand-solid)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--bg-brand-solid)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-primary)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }} />
            <Area type="monotone" dataKey="value" stroke="var(--bg-brand-solid)" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
