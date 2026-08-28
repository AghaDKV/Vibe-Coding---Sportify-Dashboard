import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { DashboardHeader } from '../features/dashboard/components/DashboardHeader';
import { StatCards } from '../features/dashboard/components/StatCards';
import { ActivityChart } from '../features/dashboard/components/ActivityChart';
import { CaloriesChart } from '../features/dashboard/components/CaloriesChart';
import { RecentWorkouts } from '../features/dashboard/components/RecentWorkouts';
import { Achievements } from '../features/dashboard/components/Achievements';
import { ComparisonChart } from '../features/dashboard/components/ComparisonChart';
import { WorkoutModal } from '../features/workout/components/WorkoutModal';
import { useState } from 'react';
import '../features/dashboard/components/Dashboard.css';

const initialRecentWorkouts = [
  { id: 1, title: 'Lari Pagi 6K', subtitle: 'Kardio • 38 menit • 2026-08-02', calories: 412 },
  { id: 2, title: 'Upper Body Push', subtitle: 'Kekuatan • 55 menit • 2026-08-01', calories: 380 },
  { id: 3, title: 'HIIT Tabata', subtitle: 'HIIT • 22 menit • 2026-07-31', calories: 305 },
  { id: 4, title: 'Yoga Flow', subtitle: 'Mobilitas • 40 menit • 2026-07-30', calories: 145 },
];

interface DashboardPageProps {
  onLogout?: () => void;
  onNavigate?: (path: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout, onNavigate }) => {
  const [recentWorkouts, setRecentWorkouts] = useState(initialRecentWorkouts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddWorkout = (data: any) => {
    const newWorkout = {
      id: Date.now(),
      title: data.title,
      subtitle: `${data.type} • ${data.duration} • ${data.date}`,
      calories: data.calories
    };
    setRecentWorkouts([newWorkout, ...recentWorkouts]);
  };

  return (
    <DashboardLayout onLogout={onLogout} activePath="dashboard" onNavigate={onNavigate}>
      <div className="dashboard-page-container">
        <DashboardHeader onAction={() => setIsModalOpen(true)} />
        
        <div className="dashboard-content-grid">
          <div className="dashboard-row full-width">
            <StatCards />
          </div>
          
          <div className="dashboard-row split-2-1">
            <ActivityChart />
            <CaloriesChart />
          </div>
          
          <div className="dashboard-row split-2-1">
            <RecentWorkouts workouts={recentWorkouts} />
            <Achievements />
          </div>

          <div className="dashboard-row full-width">
            <ComparisonChart />
          </div>
        </div>
      </div>
      
      <WorkoutModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddWorkout}
      />
    </DashboardLayout>
  );
};
