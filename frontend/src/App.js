import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LoginFrom from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SessionList from "./components/SessionList";
import "./App.css";

const App = () => {
  const token = localStorage.getItem("token");
  const handleLogin = () => {
    console.log("working");
  };

  return (
    <BrowserRouter>
      <Navbar loginUser={token} />
      <Routes>
        <Route path="/" exact element={<HomePage loginUser={token} />} />
        <Route path="/login" element={<LoginFrom onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/sessions" element={<SessionList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
