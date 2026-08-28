import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  LayoutDashboard, 
  Dumbbell, 
  Apple, 
  TrendingUp, 
  User, 
  Moon, 
  Sun,
  LogOut,
  Menu
} from 'lucide-react';
import './DashboardLayout.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePath?: string;
  onNavigate?: (path: string) => void;
  onLogout?: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  activePath = 'dashboard',
  onNavigate,
  onLogout 
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    onNavigate && onNavigate(path);
  };

  return (
    <div className="dashboard-layout">
      {/* Mobile Header */}
      <div className="mobile-header">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', padding: '0.5rem', cursor: 'pointer', color: 'var(--text-primary)' }}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo-wrapper">
            <Activity size={24} className="sidebar-logo-icon" />
          </div>
          <span className="sidebar-brand-name">Sportify</span>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className={`sidebar-nav-item ${activePath === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigate('dashboard'); }}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className={`sidebar-nav-item ${activePath === 'workout' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigate('workout'); }}>
            <Dumbbell size={20} />
            <span>Workout</span>
          </a>
          <a href="#" className={`sidebar-nav-item ${activePath === 'nutrisi' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigate('nutrisi'); }}>
            <Apple size={20} />
            <span>Nutrisi</span>
          </a>
          <a href="#" className={`sidebar-nav-item ${activePath === 'progress' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigate('progress'); }}>
            <TrendingUp size={20} />
            <span>Progress</span>
          </a>
          <a href="#" className={`sidebar-nav-item ${activePath === 'profil' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigate('profil'); }}>
            <User size={20} />
            <span>Profil</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-footer-btn" onClick={toggleTheme}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? 'Mode Terang' : 'Mode Gelap'}</span>
          </button>
          <button className="sidebar-footer-btn logout-btn" onClick={onLogout}>
            <LogOut size={20} />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main-content">
        <div className="dashboard-main-inner">
          {children}
        </div>
      </main>
    </div>
  );
};
