import React from 'react';
import { AuthLayout } from '../features/auth/components/AuthLayout';
import { RegisterForm } from '../features/auth/components/RegisterForm';

interface RegisterPageProps {
  onLoginClick?: () => void;
  onRegisterSuccess?: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onLoginClick, onRegisterSuccess }) => {
  return (
    <AuthLayout>
      <RegisterForm onLoginClick={onLoginClick} onRegisterSuccess={onRegisterSuccess} />
    </AuthLayout>
  );
};
