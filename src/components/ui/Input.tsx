import React, { useId } from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  required,
  className = '', 
  id,
  ...props 
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`ui-input-wrapper ${className}`}>
      <label htmlFor={inputId} className="ui-input-label">
        {label}
        {required && <span className="ui-input-required">*</span>}
      </label>
      <input
        id={inputId}
        className={`ui-input-field ${error ? 'ui-input-field--error' : ''}`}
        required={required}
        {...props}
      />
      {error && <span className="ui-input-error-msg">{error}</span>}
    </div>
  );
};
