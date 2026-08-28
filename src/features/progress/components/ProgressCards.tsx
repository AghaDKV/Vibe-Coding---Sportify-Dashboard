import React from 'react';
import { Scale, TrendingDown, Target, Trophy } from 'lucide-react';
import './Progress.css';

export const ProgressCards: React.FC = () => {
  return (
    <div className="progress-cards-grid">
      <div className="progress-stat-card">
        <div className="progress-icon-wrapper orange-bg">
          <Scale size={20} className="text-orange" />
        </div>
        <div className="progress-stat-label">Berat saat ini</div>
        <div className="progress-stat-value">
          <span className="value">75.4</span> <span className="unit">kg</span>
        </div>
      </div>

      <div className="progress-stat-card">
        <div className="progress-icon-header">
          <div className="progress-icon-wrapper green-bg">
            <TrendingDown size={20} className="text-green" />
          </div>
          <span className="progress-badge success-badge">-3.0 kg</span>
        </div>
        <div className="progress-stat-label">Total turun</div>
        <div className="progress-stat-value">
          <span className="value">3.0</span> <span className="unit">kg</span>
        </div>
      </div>

      <div className="progress-stat-card">
        <div className="progress-icon-wrapper blue-bg">
          <Target size={20} className="text-blue" />
        </div>
        <div className="progress-stat-label">Target berikutnya</div>
        <div className="progress-stat-value">
          <span className="value">75</span> <span className="unit">kg</span>
        </div>
      </div>

      <div className="progress-stat-card">
        <div className="progress-icon-wrapper orange-bg">
          <Trophy size={20} className="text-orange" />
        </div>
        <div className="progress-stat-label">Pencapaian</div>
        <div className="progress-stat-value">
          <span className="value">2/4</span>
        </div>
      </div>
    </div>
  );
};
