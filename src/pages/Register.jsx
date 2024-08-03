import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';

const Register = () => {
  return (
    <div className='login-cont'>
      <h1>Register Page</h1>
      <p>Registration form will go here</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Register;