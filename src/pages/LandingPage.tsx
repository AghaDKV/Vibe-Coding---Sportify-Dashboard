import React, { useEffect } from 'react';
import { Activity, Moon, Sun } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { LandingHero } from '../features/landing/components/LandingHero';
import { LandingFeatures } from '../features/landing/components/LandingFeatures';
import { LandingSteps } from '../features/landing/components/LandingSteps';
import { LandingPricing } from '../features/landing/components/LandingPricing';
import { LandingTestimonials } from '../features/landing/components/LandingTestimonials';
import { LandingCTA } from '../features/landing/components/LandingCTA';
import '../features/landing/components/Landing.css';

interface LandingPageProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick, onRegisterClick }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <header className="landing-navbar">
          <a href="#" className="landing-logo">
            <Activity size={24} color="var(--text-brand-primary)" />
            <span>Sportify</span>
          </a>
          
          <nav className="landing-nav-links">
            <a href="#fitur" onClick={(e) => { e.preventDefault(); scrollToSection('fitur'); }} className="landing-nav-link">Fitur</a>
            <a href="#cara-kerja" onClick={(e) => { e.preventDefault(); scrollToSection('cara-kerja'); }} className="landing-nav-link">Cara Kerja</a>
            <a href="#harga" onClick={(e) => { e.preventDefault(); scrollToSection('harga'); }} className="landing-nav-link">Harga</a>
            <a href="#testimoni" onClick={(e) => { e.preventDefault(); scrollToSection('testimoni'); }} className="landing-nav-link">Testimoni</a>
          </nav>

          <div className="landing-nav-actions">
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick(); }} className="login-link">
              Masuk
            </a>
            <Button onClick={onRegisterClick}>
              Mulai gratis
            </Button>
          </div>
        </header>
      </div>

      <main>
        <LandingHero onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
        <div id="fitur"><LandingFeatures /></div>
        <div id="cara-kerja"><LandingSteps /></div>
        <div id="harga"><LandingPricing /></div>
        <div id="testimoni"><LandingTestimonials /></div>
        <LandingCTA onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      </main>

      <footer className="landing-footer">
        <div className="landing-container">
          <div className="footer-content">
            <a href="#" className="landing-logo">
              <Activity size={20} color="var(--text-brand-primary)" />
              <span>Sportify</span>
            </a>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Sportify. Hak Cipta Dilindungi.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
