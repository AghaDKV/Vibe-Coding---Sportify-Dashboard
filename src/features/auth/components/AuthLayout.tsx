import React from 'react';
import { Activity, Flame, Zap, Trophy } from 'lucide-react';
import './AuthLayout.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      {/* Left Panel - Branding */}
      <div className="auth-panel-left">
        <div className="auth-brand">
          <div className="auth-logo-wrapper">
            <Activity size={24} className="auth-logo-icon" />
          </div>
          <span className="auth-brand-name">Sportify</span>
        </div>

        <div className="auth-hero">
          <h1 className="auth-hero-title">
            Setiap keringat punya angka. Kami yang menghitungnya.
          </h1>
          <p className="auth-hero-subtitle">
            Lacak workout, kalori, dan progres berat badan dalam satu dashboard yang enak dilihat.
          </p>
        </div>

        <div className="auth-metrics">
          <div className="auth-metric-card">
            <Flame size={20} className="auth-metric-icon" />
            <div className="auth-metric-value">3.090</div>
            <div className="auth-metric-label">Kalori</div>
          </div>
          <div className="auth-metric-card">
            <Zap size={20} className="auth-metric-icon" />
            <div className="auth-metric-value">42</div>
            <div className="auth-metric-label">Sesi</div>
          </div>
          <div className="auth-metric-card">
            <Trophy size={20} className="auth-metric-icon" />
            <div className="auth-metric-value">7 hari</div>
            <div className="auth-metric-label">Streak</div>
          </div>
        </div>

        <div className="auth-footer">
          © 2026 Sportify
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="auth-panel-right">
        <div className="auth-form-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};
