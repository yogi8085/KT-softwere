// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/kt2.jpeg";

const Login = () => {
  const [step, setStep] = useState(1); // Step 1: Mobile, Step 2: PIN
  const [mobile, setMobile] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setStep(2);
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    // You can add PIN validation here if needed
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-300 p-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white shadow-2xl rounded-xl p-6 sm:p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="KT Logo"
            className="w-16 h-16 mb-2 rounded-full object-cover"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 text-center">
            KT Software
          </h1>
          <p className="text-gray-500 text-sm text-center mt-1">
            {step === 1
              ? "Enter your mobile number to continue"
              : "Welcome! Please enter your PIN"}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleMobileSubmit}>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              maxLength={10}
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Continue
            </button>
          </form>
        ) : (
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
