import React from 'react';
import './Profile.css';

export interface UserProfile {
  nama: string;
  email: string;
  tinggi: number;
  berat: number;
  usia: number;
  target: string;
}

interface ProfileCardProps {
  user: UserProfile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const initial = user.nama ? user.nama.charAt(0).toUpperCase() : '?';

  return (
    <div className="dashboard-card profile-summary-card">
      <div className="profile-avatar-large">{initial}</div>
      <h2 className="profile-name">{user.nama}</h2>
      <p className="profile-email">{user.email}</p>

      <div className="profile-stats-grid">
        <div className="profile-stat-box">
          <div className="stat-val">{user.tinggi} cm</div>
          <div className="stat-lbl">Tinggi</div>
        </div>
        <div className="profile-stat-box">
          <div className="stat-val">{user.berat} kg</div>
          <div className="stat-lbl">Berat</div>
        </div>
        <div className="profile-stat-box">
          <div className="stat-val">{user.usia} th</div>
          <div className="stat-lbl">Usia</div>
        </div>
      </div>

      <div className="profile-target-badge">
        <div className="target-lbl">Target aktif</div>
        <div className="target-val">{user.target}</div>
      </div>
    </div>
  );
};
