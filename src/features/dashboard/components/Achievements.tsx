import React from 'react';
import './Dashboard.css';

const achievements = [
  { id: 1, title: 'Streak 7 Hari', subtitle: 'Latihan 7 hari berturut-turut', progress: 100 },
  { id: 2, title: '10.000 Langkah', subtitle: 'Capai 10K langkah dalam sehari', progress: 100 },
  { id: 3, title: 'Total 50 Sesi', subtitle: '42 dari 50 sesi latihan', progress: 84 },
  { id: 4, title: 'Marathon Bulan Ini', subtitle: '31 dari 42 km', progress: 74 },
];

export const Achievements: React.FC = () => {
  return (
    <div className="dashboard-card achievements-card">
      <div className="card-header" style={{ marginBottom: '1.5rem' }}>
        <h3 className="card-title">Pencapaian</h3>
      </div>
      <div className="achievement-list">
        {achievements.map((item) => (
          <div className="achievement-item" key={item.id}>
            <div className="achievement-header">
              <div className="achievement-info">
                <div className="achievement-title">{item.title}</div>
                <div className="achievement-subtitle">{item.subtitle}</div>
              </div>
              <div className="achievement-percent">{item.progress}%</div>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${item.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
