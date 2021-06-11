import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post('http://localhost:8000/login', data)
      .then((response) =>
        console.log(response).catch((err) => console.log(err))
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>

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

        <button className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
};

export default Login;
