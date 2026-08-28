import React, { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { DashboardHeader } from '../features/dashboard/components/DashboardHeader';
import { ProgressCards } from '../features/progress/components/ProgressCards';
import { WeightChart } from '../features/progress/components/WeightChart';
import { WeightLog } from '../features/progress/components/WeightLog';
import { BalanceChart } from '../features/progress/components/BalanceChart';
import { AchievementsList } from '../features/progress/components/AchievementsList';
import { ActivityProgressChart } from '../features/progress/components/ActivityProgressChart';
import '../features/progress/components/Progress.css';

interface ProgressPageProps {
  onLogout?: () => void;
  onNavigate?: (path: string) => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({ onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'Berat Badan' | 'Aktivitas' | 'Keseimbangan'>('Keseimbangan');

  return (
    <DashboardLayout onLogout={onLogout} activePath="progress" onNavigate={onNavigate}>
      <div className="dashboard-page-container">
        <DashboardHeader 
          title="Progress" 
          subtitle="Tren performa dan berat badan kamu" 
        />
        
        <div className="dashboard-content-grid">
          <div className="dashboard-row full-width">
            <ProgressCards />
          </div>

          <div className="progress-tabs">
            {['Berat Badan', 'Aktivitas', 'Keseimbangan'].map(tab => (
              <button 
                key={tab}
                className={`progress-tab-btn ${activeTab === tab ? 'active' : 'outline'}`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div 
            className={`dashboard-row ${activeTab !== 'Aktivitas' ? 'split-2-1' : 'full-width'}`}
          >
            {activeTab === 'Berat Badan' ? (
              <>
                <WeightChart />
                <WeightLog />
              </>
            ) : activeTab === 'Keseimbangan' ? (
              <>
                <BalanceChart />
                <AchievementsList />
              </>
            ) : activeTab === 'Aktivitas' ? (
              <ActivityProgressChart />
            ) : null}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
