import React, { ChangeEvent } from 'react';

interface InputProps {
    id:string;
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={error ? 'error-input' : ''}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
