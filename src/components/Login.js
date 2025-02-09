import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", { username, password });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e5f0f7]">
      <div className="w-full max-w-sm p-8 bg-gradient-to-r from-white via-[#e5f0f7] to-[#e5f0f7] rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          <span>Don't have an account? </span>
          <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
