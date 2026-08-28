import React from 'react';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import './RegisterForm.css';

interface RegisterFormProps {
  onLoginClick?: () => void;
  onRegisterSuccess?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onLoginClick, onRegisterSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle registration
    console.log('Register submitted');
    if (onRegisterSuccess) {
      onRegisterSuccess();
    }
  };

  return (
    <div className="register-form-container">
      <div className="register-form-header">
        <h1 className="register-form-title">Buat akun baru</h1>
        <p className="register-form-subtitle">Mulai perjalanan kebugaranmu bersama Sportify.</p>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <Input 
          label="Nama Lengkap" 
          type="text" 
          placeholder="Alif Ba Ta" 
        />
        <Input 
          label="Email" 
          type="email" 
          placeholder="jayamakmurtbk@gmail.com" 
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="********" 
        />
        <Input 
          label="Konfirmasi Password" 
          type="password" 
          placeholder="********" 
        />
        <div className="register-form-actions">
          <Button type="submit" fullWidth>Daftar</Button>
        </div>
      </form>

      <div className="register-form-footer">
        Sudah punya akun? <span className="register-link" onClick={onLoginClick}>Masuk di sini</span>
      </div>
    </div>
  );
};
