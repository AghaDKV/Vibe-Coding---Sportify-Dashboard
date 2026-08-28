import React, { useState, useEffect } from 'react';
import './Profile.css';
import { UserProfile } from './ProfileCard';

interface ProfileSettingsProps {
  user: UserProfile;
  onSave: (data: UserProfile) => void;
  onLogout?: () => void;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user, onSave, onLogout }) => {
  const [formData, setFormData] = useState<UserProfile>(user);
  const [toggles, setToggles] = useState({
    pengingat: true,
    ringkasan: true,
    tips: false
  });

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'tinggi' || name === 'berat' || name === 'usia' ? Number(value) : value
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="dashboard-card profile-settings-card">
      <h3 className="settings-section-title">Data Diri</h3>
      
      <div className="settings-form-grid">
        <div className="settings-input-group">
          <label>Nama</label>
          <input type="text" name="nama" value={formData.nama} onChange={handleChange} />
        </div>
        <div className="settings-input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="settings-input-group">
          <label>Tinggi (cm)</label>
          <input type="number" name="tinggi" value={formData.tinggi} onChange={handleChange} />
        </div>
        <div className="settings-input-group">
          <label>Berat (kg)</label>
          <input type="number" step="0.1" name="berat" value={formData.berat} onChange={handleChange} />
        </div>
        <div className="settings-input-group">
          <label>Usia</label>
          <input type="number" name="usia" value={formData.usia} onChange={handleChange} />
        </div>
        <div className="settings-input-group">
          <label>Target</label>
          <input type="text" name="target" value={formData.target} onChange={handleChange} />
        </div>
      </div>

      <button className="settings-save-btn" onClick={handleSave}>Simpan Perubahan</button>

      <div className="settings-divider"></div>

      <h3 className="settings-section-title">Notifikasi</h3>
      
      <div className="settings-toggles">
        <div className="toggle-row">
          <span>Pengingat latihan harian</span>
          <button className={`toggle-btn ${toggles.pengingat ? 'on' : 'off'}`} onClick={() => handleToggle('pengingat')}>
            <div className="toggle-thumb"></div>
          </button>
        </div>
        <div className="toggle-row">
          <span>Ringkasan mingguan via email</span>
          <button className={`toggle-btn ${toggles.ringkasan ? 'on' : 'off'}`} onClick={() => handleToggle('ringkasan')}>
            <div className="toggle-thumb"></div>
          </button>
        </div>
        <div className="toggle-row">
          <span>Tips & promo Sportify</span>
          <button className={`toggle-btn ${toggles.tips ? 'on' : 'off'}`} onClick={() => handleToggle('tips')}>
            <div className="toggle-thumb"></div>
          </button>
        </div>
      </div>

      <button className="settings-logout-btn" onClick={onLogout}>Keluar Akun</button>
    </div>
  );
};
