// src/pages/Dashboard.jsx
import React, { useState } from "react";
import BuyChips from "./BuyChips";
import SellChips from "./SellChips";
import StoreChips from "./StoreChips";
import Dashboard2 from "./Deshboard2";

const Dashboard = () => {
  const [activeForm, setActiveForm] = useState("");
  const [showDashboard2, setShowDashboard2] = useState(false);
  const [passwordPromptVisible, setPasswordPromptVisible] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = "1234";

  const toggleForm = (form) => {
    setActiveForm(activeForm === form ? "" : form);
  };

  const handleAdminPanelAccess = () => {
    setPasswordPromptVisible(true);
  };

  const handlePasswordSubmit = () => {
    if (password.trim() === correctPassword) {
      setShowDashboard2(true);
      setPasswordPromptVisible(false);
    } else {
      alert("❌ Wrong password. Please try again.");
      setPassword("");
    }
  };

  // Show admin dashboard when password is correct
  if (showDashboard2) {
    return <Dashboard2 />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4 sm:p-6 overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">
          KT Software
        </h1>
        <p className="text-gray-600 text-base mt-1">Select an action below</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-6 items-center">
        <button
          onClick={() => toggleForm("buy")}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl shadow-lg w-11/12 sm:w-auto max-w-xs transition-all duration-300 text-lg font-semibold"
        >
          🛒 Buy Chips
        </button>
        <button
          onClick={() => toggleForm("store")}
          className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-2xl shadow-lg w-11/12 sm:w-auto max-w-xs transition-all duration-300 text-lg font-semibold"
        >
          📦 Store Chips
        </button>
        <button
          onClick={() => toggleForm("sell")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-2xl shadow-lg w-11/12 sm:w-auto max-w-xs transition-all duration-300 text-lg font-semibold"
        >
          🏭 Sell Chips
        </button>
      </div>

      {/* ✅ Stylish Admin Panel Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleAdminPanelAccess}
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300 text-lg font-bold tracking-wide"
        >
          📁 Admin Panel
        </button>
      </div>

      {/* Password Prompt */}
      {passwordPromptVisible && (
        <div className="flex flex-col items-center mt-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="p-2 rounded border w-11/12 sm:w-1/3 mb-3"
          />
          <button
            onClick={handlePasswordSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      )}

      {/* Forms */}
      {activeForm && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-full sm:max-w-2xl mx-auto mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 capitalize text-center text-gray-700">
            {activeForm} Form
          </h2>
          {activeForm === "buy" && <BuyChips />}
          {activeForm === "sell" && <SellChips />}
          {activeForm === "store" && <StoreChips />}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
