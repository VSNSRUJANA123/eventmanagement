import React, { useState } from "react";
import { loginUser } from "../services/auth";
import "../styles/login.css";
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(username, password);
      onLogin(token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label>Username :</label>
        <input
          placeholder="Enter username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password :</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
