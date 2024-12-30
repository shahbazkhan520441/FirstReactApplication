import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import Bootstrap from './components/Bootstrap';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/book/bootstrap" element={<Bootstrap />} />
      </Routes>
    </Router>
  );
};

export default App;
