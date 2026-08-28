import React from 'react';
import { Button } from '../../../components/ui/Button';

interface LandingCTAProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

export const LandingCTA: React.FC<LandingCTAProps> = ({ onRegisterClick, onLoginClick }) => {
  return (
    <section className="cta-section">
      <div className="landing-container">
        <div className="cta-banner">
          <h2 className="cta-title">Siap mulai hari ini?</h2>
          <p className="cta-subtitle">
            Coba Sportify dengan akun demo – tanpa kartu kredit, langsung masuk dashboard.
          </p>
          <div className="cta-actions">
            <Button 
              onClick={onLoginClick} 
              style={{ backgroundColor: 'white', color: 'var(--text-brand-primary)' }}
            >
              Masuk dengan akun demo
            </Button>
            <Button 
              variant="outline" 
              onClick={onRegisterClick}
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
            >
              Buat akun baru
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
