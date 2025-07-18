// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Login from "./component/LogIn";

// PAGES
import Dashboard from "./component/pages/Dashboard";
import Dashboard2 from "./component/pages/Deshboard2";
import About from "./component/pages/About";
import Profile from "./component/pages/Profile";
import BuyChips from "./component/pages/BuyChips";
import SellChips from "./component/pages/SellChips";
import StoreChips from "./component/pages/StoreChips";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Login */}
        <Route path="/" element={<Login />} />

        {/* 📊 Dashboards */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deshboard2" element={<Dashboard2 />} />

        {/* 🛒 Buy / Sell / Store Pages */}
        <Route path="/buy" element={<BuyChips />} />
        <Route path="/sell" element={<SellChips />} />
        <Route path="/store" element={<StoreChips />} />

        {/* 📎 Footer Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
