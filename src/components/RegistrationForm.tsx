import React, { ChangeEvent, FormEvent, useState } from 'react';
import './RegistrationForm.scss';
import Input from '../SharedComponents/input-text/Input-Text';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const formErrors: FormErrors = {};
    if (!formData.name) formErrors.name = '* Name is required';
    if (!formData.email) formErrors.email = '* Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = 'Email is invalid';
    if (!formData.password) formErrors.password = '* Password is required';
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = '* Passwords must match';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully', formData);
    }
  };

  return (
    <form className="RegistrationForm" onSubmit={handleSubmit}>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
