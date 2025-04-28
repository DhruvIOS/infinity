import React from "react";
import LoginForm from "../components/LoginForm";

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
