import React, { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { DashboardHeader } from '../features/dashboard/components/DashboardHeader';
import { ProfileCard, UserProfile } from '../features/profile/components/ProfileCard';
import { ProfileSettings } from '../features/profile/components/ProfileSettings';

interface ProfilePageProps {
  onLogout?: () => void;
  onNavigate?: (path: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onLogout, onNavigate }) => {
  const [user, setUser] = useState<UserProfile>({
    nama: 'Rangga Pratama',
    email: 'demo@sportify.app',
    tinggi: 175,
    berat: 77.5,
    usia: 23,
    target: '-5kg dalam 1 bulan'
  });

  const handleSaveProfile = (newData: UserProfile) => {
    setUser(newData);
  };

  return (
    <DashboardLayout onLogout={onLogout} activePath="profil" onNavigate={onNavigate}>
      <div className="dashboard-page-container">
        <DashboardHeader 
          title="Profil" 
          subtitle="Kelola akun dan preferensi kamu" 
        />
        
        <div className="dashboard-content-grid">
          <div className="dashboard-row split-1-2">
            <ProfileCard user={user} />
            <ProfileSettings user={user} onSave={handleSaveProfile} onLogout={onLogout} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
