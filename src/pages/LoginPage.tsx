import React from 'react';
import { AuthLayout } from '../features/auth/components/AuthLayout';
import { LoginForm } from '../features/auth/components/LoginForm';

interface LoginPageProps {
  onRegisterClick?: () => void;
  onLoginSuccess?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onRegisterClick, onLoginSuccess }) => {
  return (
    <AuthLayout>
      <LoginForm onRegisterClick={onRegisterClick} onLoginSuccess={onLoginSuccess} />
    </AuthLayout>
  );
};
