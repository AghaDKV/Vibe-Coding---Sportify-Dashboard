import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { DashboardHeader } from '../features/dashboard/components/DashboardHeader';
import { WorkoutList } from '../features/workout/components/WorkoutList';
import { WorkoutModal } from '../features/workout/components/WorkoutModal';
import { useState } from 'react';

const initialWorkouts = [
  { id: 1, title: 'Lari Pagi 6K', type: 'Kardio', date: '2026-08-02', duration: '38 mnt', intensity: 'Sedang', calories: 412 },
  { id: 2, title: 'Upper Body Push', type: 'Kekuatan', date: '2026-08-01', duration: '55 mnt', intensity: 'Berat', calories: 380 },
  { id: 3, title: 'HIIT Tabata', type: 'HIIT', date: '2026-07-31', duration: '22 mnt', intensity: 'Berat', calories: 305 },
  { id: 4, title: 'Yoga Flow', type: 'Mobilitas', date: '2026-07-30', duration: '40 mnt', intensity: 'Ringan', calories: 145 },
  { id: 5, title: 'Sepeda Santai', type: 'Kardio', date: '2026-07-29', duration: '65 mnt', intensity: 'Sedang', calories: 470 },
];

interface WorkoutPageProps {
  onLogout?: () => void;
  onNavigate?: (path: string) => void;
}

export const WorkoutPage: React.FC<WorkoutPageProps> = ({ onLogout, onNavigate }) => {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddWorkout = (workoutData: any) => {
    const newWorkout = {
      id: Date.now(),
      ...workoutData
    };
    setWorkouts([newWorkout, ...workouts]);
  };

  const handleDeleteWorkout = (id: number) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  const totalCalories = workouts.reduce((acc, curr) => acc + curr.calories, 0);

  return (
    <DashboardLayout onLogout={onLogout} activePath="workout" onNavigate={onNavigate}>
      <div className="dashboard-page-container">
        <DashboardHeader 
          title="Workout" 
          subtitle={`${workouts.length} sesi · ${totalCalories} kcal`} 
          actionText="Tambah Workout" 
          onAction={() => setIsModalOpen(true)}
        />
        
        <div className="dashboard-content-grid">
          <div className="dashboard-row full-width">
            <WorkoutList workouts={workouts} onDelete={handleDeleteWorkout} />
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
