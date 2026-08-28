import React from 'react';
import { Activity, ArrowRight, Flame } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

interface LandingHeroProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onRegisterClick, onLoginClick }) => {
  return (
    <section className="hero-section">
      <div className="landing-container hero-container">
        <div className="hero-content">
        <div className="hero-badge">
          <Flame size={16} />
          <span>Setiap keringat bernilai</span>
        </div>
        <h1 className="hero-title">
          Setiap keringat<br />punya angka.<br />
          <span className="hero-title-highlight">Kami yang<br />menghitungnya.</span>
        </h1>
        <p className="hero-subtitle">
          Sportify merangkum workout, kalori, dan progres berat badanmu ke dalam satu dashboard yang enak dilihat dan gampang dipakai tiap hari.
        </p>
        <div className="hero-actions">
          <Button onClick={onRegisterClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Mulai gratis
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" onClick={onLoginClick}>
            Coba demo interaktif
          </Button>
        </div>
        
        <div className="hero-stats">
          <div className="hero-stat-item">
            <span className="hero-stat-value">12.500+</span>
            <span className="hero-stat-label">Active users</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-value">3.200+</span>
            <span className="hero-stat-label">Pengguna aktif</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-value">98%</span>
            <span className="hero-stat-label">Tingkat sukses</span>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="mockup-glow"></div>
        <div className="floating-badge top-right">
          <div className="floating-badge-icon">
            <Activity size={16} />
          </div>
          <div className="floating-badge-text">
            <span className="floating-badge-title">Latihan Selesai</span>
            <span className="floating-badge-value">Upper Body</span>
          </div>
        </div>
        
        <div className="floating-badge bottom-left">
          <div className="floating-badge-icon" style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
            <Flame size={16} />
          </div>
          <div className="floating-badge-text">
            <span className="floating-badge-title">Kalori terbakar</span>
            <span className="floating-badge-value">412 kcal</span>
          </div>
        </div>

        <div className="mockup-container">
          <div className="mockup-header">
            <div className="mockup-title">Aktivitas Minggu Ini</div>
            <div className="mockup-value">3.080 <span>kcal</span></div>
          </div>
          
          <div className="mockup-chart">
            <div className="mockup-bar-group">
              <div className="mockup-bar" style={{ height: '40%' }}></div>
              <span className="mockup-label">S</span>
            </div>
            <div className="mockup-bar-group">
              <div className="mockup-bar" style={{ height: '60%' }}></div>
              <span className="mockup-label">S</span>
            </div>
            <div className="mockup-bar-group">
              <div className="mockup-bar" style={{ height: '30%' }}></div>
              <span className="mockup-label">R</span>
            </div>
            <div className="mockup-bar-group">
              <div className="mockup-bar active" style={{ height: '80%' }}></div>
              <span className="mockup-label">K</span>
            </div>
            <div className="mockup-bar-group">
              <div className="mockup-bar" style={{ height: '50%' }}></div>
              <span className="mockup-label">J</span>
            </div>
            <div className="mockup-bar-group">
              <div className="mockup-bar" style={{ height: '90%' }}></div>
              <span className="mockup-label">S</span>
            </div>
            <div className="mockup-bar-group">
              <div className="mockup-bar" style={{ height: '70%' }}></div>
              <span className="mockup-label">M</span>
            </div>
          </div>
          
          <div className="mockup-cards">
            <div className="mockup-card">
              <Flame size={20} className="mockup-card-icon" />
              <div className="mockup-card-value">320</div>
              <div className="mockup-card-label">Kcal</div>
            </div>
            <div className="mockup-card">
              <Activity size={20} className="mockup-card-icon" style={{ color: '#10b981' }} />
              <div className="mockup-card-value">45m</div>
              <div className="mockup-card-label">Durasi</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
