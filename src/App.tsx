import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';


const App:React.FC=()=>{
  return (
   <Router>

    <Routes>

      <Route path="/" element={<Dashboard/>}/>
      <Route path="/register" element={<RegistrationForm />} />
    </Routes>

   </Router>
  );
};

export default App;