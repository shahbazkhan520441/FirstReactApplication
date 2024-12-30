import React, { ChangeEvent, FormEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegistrationForm.scss';

interface InputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ id, label, type, name, value, onChange, error }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      id={id}
      type={type}
      name={name}
      className={`form-control ${error ? 'is-invalid' : ''}`}
      value={value}
      onChange={onChange}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  [key: string]: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = (): boolean => {
    const formErrors: FormErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Invalid email';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = 'Passwords must match';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="registration-form container mt-5 bg-danger">
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          id="name"
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
        />
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={errors.confirmPassword}
        />
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;