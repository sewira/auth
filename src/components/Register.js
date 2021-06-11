import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirm: confirmPassword,
    };

    axios
      .post('http://localhost:8000/register', data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Passwod"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Passwod"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary btn-block">Sign Up</button>
    </form>
  );
};

export default Register;
