import React from 'react';
import { Trash2 } from 'lucide-react';
import './Nutrition.css';

export interface MealGroup {
  category: string;
  categoryCals: number;
  items: { id: number; name: string; macros: string; calories: number; }[];
}

interface MealNotesProps {
  meals: MealGroup[];
  onDelete?: (category: string, itemId: number) => void;
}

export const MealNotes: React.FC<MealNotesProps> = ({ meals, onDelete }) => {
  return (
    <div className="dashboard-card meal-notes-card">
      <div className="card-header" style={{ marginBottom: '1.5rem' }}>
        <h3 className="card-title">Catatan Makan Hari Ini</h3>
      </div>
      <div className="meal-groups">
        {meals.map((mealGroup) => (
          <div className="meal-group" key={mealGroup.category}>
            <div className="meal-group-header">
              <span className="meal-category-title">{mealGroup.category}</span>
              <span className="meal-category-cals">{mealGroup.categoryCals} kcal</span>
            </div>
            <div className="meal-items">
              {mealGroup.items.map(item => (
                <div className="meal-item-card" key={item.id}>
                  <div className="meal-item-info">
                    <div className="meal-item-name">{item.name}</div>
                    <div className="meal-item-macros">{item.macros}</div>
                  </div>
                  <div className="meal-item-actions">
                    <span className="meal-item-cals">{item.calories} kcal</span>
                    <button className="meal-delete-btn" onClick={() => onDelete && onDelete(mealGroup.category, item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
