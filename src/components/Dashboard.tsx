import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing
import './Dashboard.scss'; // Import SCSS file
import RegistrationForm from './RegistrationForm';

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard container mt-5">
      <div className="text-center">
        <h1>Welcome to the Dashboard</h1>
        <p>
          Access the registration form below to manage user registrations and
          explore other features of the application.
        </p>
      </div>

      <div className="form-container">
        <RegistrationForm />
      </div>

      <div className="text-center mt-4">
        {/* Link to navigate to the Registration Form */}
        <Link to="/register">
          <button className="btn btn-register">Go to Registration Form</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
