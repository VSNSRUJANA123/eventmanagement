import React, { useState } from "react";
import { registerUser } from "../services/auth";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, password);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
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
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
