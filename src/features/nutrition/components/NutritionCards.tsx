import React from 'react';
import { Flame, Beef, Wheat, Droplet } from 'lucide-react';
import './Nutrition.css';

export const NutritionCards: React.FC = () => {
  return (
    <div className="nutrition-cards-grid">
      <div className="nutrition-stat-card">
        <div className="nutrition-icon-wrapper orange-bg">
          <Flame size={20} className="text-orange" />
        </div>
        <div className="nutrition-stat-label">Total kalori</div>
        <div className="nutrition-stat-value">
          <span className="value">1720</span> <span className="unit">kcal</span>
        </div>
      </div>

      <div className="nutrition-stat-card">
        <div className="nutrition-icon-wrapper orange-bg">
          <Beef size={20} className="text-orange" />
        </div>
        <div className="nutrition-stat-label">Protein (target 140g)</div>
        <div className="nutrition-stat-value">
          <span className="value">118</span> <span className="unit">g</span>
        </div>
      </div>

      <div className="nutrition-stat-card">
        <div className="nutrition-icon-wrapper blue-bg">
          <Wheat size={20} className="text-blue" />
        </div>
        <div className="nutrition-stat-label">Karbohidrat (target 220g)</div>
        <div className="nutrition-stat-value">
          <span className="value">163</span> <span className="unit">g</span>
        </div>
      </div>

      <div className="nutrition-stat-card">
        <div className="nutrition-icon-wrapper orange-bg">
          <Droplet size={20} className="text-orange" />
        </div>
        <div className="nutrition-stat-label">Lemak (target 70g)</div>
        <div className="nutrition-stat-value">
          <span className="value">53</span> <span className="unit">g</span>
        </div>
      </div>
    </div>
  );
};
