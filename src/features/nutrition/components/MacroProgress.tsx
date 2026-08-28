import React from 'react';
import './Nutrition.css';

const macros = [
  { id: 'kalori', label: 'Kalori', current: 1720, target: 2200, unit: '' },
  { id: 'protein', label: 'Protein', current: 118, target: 140, unit: 'g' },
  { id: 'karbohidrat', label: 'Karbohidrat', current: 163, target: 220, unit: 'g' },
  { id: 'lemak', label: 'Lemak', current: 53, target: 70, unit: 'g' },
];

export const MacroProgress: React.FC = () => {
  return (
    <div className="dashboard-card macro-progress-card">
      <div className="card-header" style={{ marginBottom: '2rem' }}>
        <h3 className="card-title">Progres Makro</h3>
      </div>
      <div className="macro-list">
        {macros.map((macro) => {
          const progressPercent = Math.min(100, (macro.current / macro.target) * 100);
          return (
            <div className="macro-item" key={macro.id}>
              <div className="macro-header">
                <div className="macro-label">{macro.label}</div>
                <div className="macro-values">
                  {macro.current}/{macro.target}{macro.unit}
                </div>
              </div>
              <div className="macro-progress-bg">
                <div className="macro-progress-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
