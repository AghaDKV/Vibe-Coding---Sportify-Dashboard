import React from 'react';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import './LoginForm.css';

interface LoginFormProps {
  onRegisterClick?: () => void;
  onLoginSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onRegisterClick, onLoginSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle authentication
    console.log('Login submitted');
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-header">
        <h1 className="login-form-title">Masuk ke akunmu</h1>
        <p className="login-form-subtitle">Lanjutkan progres latihanmu hari ini.</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <Input 
          label="Email" 
          type="email" 
          placeholder="jayamakmurtbk@gmail.com" 
          required 
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="********" 
          required 
        />
        <div className="login-form-actions">
          <Button type="submit" fullWidth>Masuk</Button>
        </div>
      </form>

      <div className="login-form-footer">
        Belum punya akun? <span className="login-link" style={{cursor: 'pointer'}} onClick={onRegisterClick}>Daftar sekarang</span>
      </div>
    </div>
  );
};
