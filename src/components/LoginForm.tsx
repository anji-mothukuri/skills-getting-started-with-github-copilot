import React, { useState } from 'react';
import { isEmail, isRequired, isMinLength } from '../utils/validation';
import { ERROR_MESSAGES } from '../constants';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!isRequired(email)) {
      newErrors.email = ERROR_MESSAGES.required;
    } else if (!isEmail(email)) {
      newErrors.email = ERROR_MESSAGES.invalidEmail;
    }
    if (!isRequired(password)) {
      newErrors.password = ERROR_MESSAGES.required;
    } else if (!isMinLength(password, 6)) {
      newErrors.password = ERROR_MESSAGES.shortPassword;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic here
      alert('Login successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
