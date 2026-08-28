import React, { useState } from 'react';
import { Search, Trash2 } from 'lucide-react';
import './Workout.css';

interface Workout {
  id: number;
  title: string;
  type: string;
  date: string;
  duration: string;
  intensity: string;
  calories: number;
}

interface WorkoutListProps {
  workouts: Workout[];
  onDelete?: (id: number) => void;
}

export const WorkoutList: React.FC<WorkoutListProps> = ({ workouts, onDelete }) => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const getIntensityClass = (intensity: string) => {
    switch(intensity.toLowerCase()) {
      case 'ringan': return 'ringan';
      case 'sedang': return 'sedang';
      case 'berat': return 'berat';
      default: return '';
    }
  };

  return (
    <div className="dashboard-card workout-list-card">
      <div className="workout-table-header">
        <div className="workout-search">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Cari Workout..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="workout-filters">
          {['Semua', 'Kardio', 'Kekuatan', 'Mobilitas', 'HIIT'].map(filter => (
            <button 
              key={filter}
              className={`workout-filter-btn ${activeFilter === filter ? 'active' : 'outline'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="workout-table-wrapper">
        <table className="workout-table">
          <thead>
            <tr>
              <th>Latihan</th>
              <th>Tipe</th>
              <th>Tanggal</th>
              <th>Durasi</th>
              <th>Intensitas</th>
              <th>Kalori</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {workouts
              .filter(workout => {
                const matchesFilter = activeFilter === 'Semua' || workout.type === activeFilter;
                const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesFilter && matchesSearch;
              })
              .map((workout) => (
              <tr key={workout.id}>
                <td data-label="Latihan" className="font-medium text-primary">{workout.title}</td>
                <td data-label="Tipe" className="text-secondary">{workout.type}</td>
                <td data-label="Tanggal" className="text-secondary">{workout.date}</td>
                <td data-label="Durasi" className="text-secondary">{workout.duration}</td>
                <td data-label="Intensitas">
                  <span className={`intensity-badge ${getIntensityClass(workout.intensity)}`}>
                    {workout.intensity}
                  </span>
                </td>
                <td data-label="Kalori" className="font-semibold text-primary">{workout.calories}</td>
                <td data-label="Aksi" className="action-col">
                  <button className="delete-btn" onClick={() => onDelete && onDelete(workout.id)}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
