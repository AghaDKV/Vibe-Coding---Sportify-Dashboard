import React from 'react';
import './Progress.css';

const history = [
  { week: 'W6', weight: '75.4 kg' },
  { week: 'W5', weight: '76.1 kg' },
  { week: 'W4', weight: '76.8 kg' },
  { week: 'W3', weight: '77.2 kg' },
];

export const WeightLog: React.FC = () => {
  return (
    <div className="dashboard-card weight-log-card">
      <div className="card-header" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title">Catat Berat Badan</h3>
      </div>
      
      <div className="weight-input-group">
        <label className="weight-label">Berat hari ini (kg)</label>
        <input type="text" placeholder="75.0" className="weight-input" />
        <button className="weight-save-btn">Simpan Catatan</button>
      </div>
      
      <div className="weight-history">
        {history.map((entry, index) => (
          <div className="history-item" key={index}>
            <span className="history-week">{entry.week}</span>
            <span className="history-weight">{entry.weight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
