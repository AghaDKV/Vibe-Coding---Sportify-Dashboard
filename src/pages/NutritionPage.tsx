import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { DashboardHeader } from '../features/dashboard/components/DashboardHeader';
import { NutritionCards } from '../features/nutrition/components/NutritionCards';
import { MacroProgress } from '../features/nutrition/components/MacroProgress';
import { MealNotes } from '../features/nutrition/components/MealNotes';
import { MealModal } from '../features/nutrition/components/MealModal';
import { useState } from 'react';
import '../features/nutrition/components/Nutrition.css';

const initialMeals = [
  {
    category: 'Sarapan',
    categoryCals: 380,
    items: [
      { id: 1, name: 'Oatmeal + Pisang', macros: 'P 12g • K 62g • L 8g', calories: 380 }
    ]
  },
  {
    category: 'Makan Siang',
    categoryCals: 620,
    items: [
      { id: 2, name: 'Ayam Panggang + Nasi Merah', macros: 'P 48g • K 65g • L 14g', calories: 620 }
    ]
  },
  {
    category: 'Makan Malam',
    categoryCals: 540,
    items: [
      { id: 3, name: 'Salmon + Sayur Kukus', macros: 'P 42g • K 22g • L 26g', calories: 540 }
    ]
  },
  {
    category: 'Snack',
    categoryCals: 180,
    items: [
      { id: 4, name: 'Greek Yogurt', macros: 'P 16g • K 14g • L 5g', calories: 180 }
    ]
  }
];

interface NutritionPageProps {
  onLogout?: () => void;
  onNavigate?: (path: string) => void;
}

export const NutritionPage: React.FC<NutritionPageProps> = ({ onLogout, onNavigate }) => {
  const [mealsData, setMealsData] = useState(initialMeals);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMeal = (mealData: any) => {
    setMealsData(prevMeals => {
      const newMeals = [...prevMeals];
      const categoryIndex = newMeals.findIndex(m => m.category === mealData.category);
      
      if (categoryIndex !== -1) {
        newMeals[categoryIndex].items.push({
          id: Date.now(),
          name: mealData.name,
          macros: mealData.macros,
          calories: mealData.calories
        });
        newMeals[categoryIndex].categoryCals += mealData.calories;
      } else {
        newMeals.push({
          category: mealData.category,
          categoryCals: mealData.calories,
          items: [{
            id: Date.now(),
            name: mealData.name,
            macros: mealData.macros,
            calories: mealData.calories
          }]
        });
      }
      return newMeals;
    });
  };

  const handleDeleteMeal = (category: string, itemId: number) => {
    setMealsData(prevMeals => {
      return prevMeals.map(group => {
        if (group.category === category) {
          const itemToDelete = group.items.find(i => i.id === itemId);
          const calsToSubtract = itemToDelete ? itemToDelete.calories : 0;
          return {
            ...group,
            categoryCals: group.categoryCals - calsToSubtract,
            items: group.items.filter(i => i.id !== itemId)
          };
        }
        return group;
      });
    });
  };

  const totalCals = mealsData.reduce((acc, meal) => acc + meal.categoryCals, 0);

  return (
    <DashboardLayout onLogout={onLogout} activePath="nutrisi" onNavigate={onNavigate}>
      <div className="dashboard-page-container">
        <DashboardHeader 
          title="Nutrisi" 
          subtitle={`${totalCals} dari 2200 kcal hari ini`} 
          actionText="Tambah Makanan" 
          onAction={() => setIsModalOpen(true)}
        />
        
        <div className="dashboard-content-grid">
          <div className="dashboard-row full-width">
            <NutritionCards />
          </div>
          
          <div className="dashboard-row split-1-15">
            <MacroProgress />
            <MealNotes meals={mealsData} onDelete={handleDeleteMeal} />
          </div>
        </div>
      </div>
      
      <MealModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleAddMeal} 
      />
    </DashboardLayout>
  );
};
