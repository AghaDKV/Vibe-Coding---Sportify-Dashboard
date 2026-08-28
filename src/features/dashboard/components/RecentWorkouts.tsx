import React from 'react';
import './Dashboard.css';

export interface RecentWorkout {
  id: number;
  title: string;
  subtitle: string;
  calories: number;
}

interface RecentWorkoutsProps {
  workouts: RecentWorkout[];
}

export const RecentWorkouts: React.FC<RecentWorkoutsProps> = ({ workouts }) => {
  return (
    <div className="dashboard-card recent-workouts-card">
      <div className="card-header" style={{ marginBottom: '1.5rem' }}>
        <h3 className="card-title">Workout Terakhir</h3>
        <a href="#" className="card-link">Lihat semua</a>
      </div>
      <div className="workout-list">
        {workouts.map((workout) => (
          <div className="workout-item" key={workout.id}>
            <div className="workout-info">
              <div className="workout-title">{workout.title}</div>
              <div className="workout-subtitle">{workout.subtitle}</div>
            </div>
            <div className="workout-calories-badge">
              {workout.calories} kcal
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
