import { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { WorkoutPage } from './pages/WorkoutPage';
import { NutritionPage } from './pages/NutritionPage';
import { ProgressPage } from './pages/ProgressPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'register' | 'dashboard' | 'workout' | 'nutrisi' | 'progress' | 'profil'>('landing');

  return (
    <>
      {currentView === 'landing' && <LandingPage onLoginClick={() => setCurrentView('login')} onRegisterClick={() => setCurrentView('register')} />}
      {currentView === 'login' && <LoginPage onRegisterClick={() => setCurrentView('register')} onLoginSuccess={() => setCurrentView('dashboard')} />}
      {currentView === 'register' && <RegisterPage onLoginClick={() => setCurrentView('login')} onRegisterSuccess={() => setCurrentView('dashboard')} />}
      {currentView === 'dashboard' && <DashboardPage onLogout={() => setCurrentView('login')} onNavigate={(path) => setCurrentView(path as any)} />}
      {currentView === 'workout' && <WorkoutPage onLogout={() => setCurrentView('login')} onNavigate={(path) => setCurrentView(path as any)} />}
      {currentView === 'nutrisi' && <NutritionPage onLogout={() => setCurrentView('login')} onNavigate={(path) => setCurrentView(path as any)} />}
      {currentView === 'progress' && <ProgressPage onLogout={() => setCurrentView('login')} onNavigate={(path) => setCurrentView(path as any)} />}
      {currentView === 'profil' && <ProfilePage onLogout={() => setCurrentView('login')} onNavigate={(path) => setCurrentView(path as any)} />}
    </>
  )
}

export default App
