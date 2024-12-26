import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing
import './Dashboard.scss';  // Import SCSS file
import RegistrationForm from './RegistrationForm';

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      <h1>Welcome to the Dashboard</h1>
      <p>Here is the registration form below. You can access it by clicking the button below.</p>
      <RegistrationForm/>
      <br />
      <br />
      {/* Link to Registration Form */}
      <Link to="/register">
        <button className="btn-register">Go to Registration Form</button>
      </Link>
      
      {/* Optionally, you can also include RegistrationForm directly here if needed */}
      {/* <RegistrationForm /> */}
    </div>
  );
};

export default Dashboard;
