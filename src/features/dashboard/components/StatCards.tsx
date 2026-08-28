import React from 'react';
import { Flame, Clock, Footprints, Target } from 'lucide-react';
import './Dashboard.css';

export const StatCards: React.FC = () => {
  return (
    <div className="stat-cards-grid">
      <div className="stat-card">
        <div className="stat-card-header">
          <div className="stat-icon-wrapper" style={{ color: 'var(--text-brand-primary)', backgroundColor: 'rgba(255,138,61,0.1)' }}>
            <Flame size={20} />
          </div>
          <span className="stat-badge success">+12%</span>
        </div>
        <div className="stat-card-label">Kalori terbakar</div>
        <div className="stat-card-value">
          <span className="value">3.090</span> <span className="unit">kcal</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card-header">
          <div className="stat-icon-wrapper" style={{ color: 'var(--text-secondary-brand)', backgroundColor: 'rgba(61,111,255,0.1)' }}>
            <Clock size={20} />
          </div>
          <span className="stat-badge success">+18%</span>
        </div>
        <div className="stat-card-label">Durasi latihan</div>
        <div className="stat-card-value">
          <span className="value">335</span> <span className="unit">menit</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card-header">
          <div className="stat-icon-wrapper" style={{ color: 'var(--text-success)', backgroundColor: 'rgba(25,178,107,0.1)' }}>
            <Footprints size={20} />
          </div>
          <span className="stat-badge success">+5%</span>
        </div>
        <div className="stat-card-label">Total langkah</div>
        <div className="stat-card-value">
          <span className="value">57.400</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card-header">
          <div className="stat-icon-wrapper" style={{ color: 'var(--text-warning)', backgroundColor: 'rgba(247,144,8,0.1)' }}>
            <Target size={20} />
          </div>
          {/* No badge for the last one */}
        </div>
        <div className="stat-card-label">Sesi selesai</div>
        <div className="stat-card-value">
          <span className="value">5</span> <span className="unit">sesi</span>
        </div>
      </div>
    </div>
  );
};
