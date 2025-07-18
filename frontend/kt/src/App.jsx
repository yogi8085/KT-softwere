// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🟩 COMPONENTS
import Login from "./component/LogIn";
import BuyChips from "./component/pages/BuyChips";
import SellChips from "./component/pages/SellChips";
import StoreChips from "./component/pages/StoreChips";
import Deshboard2 from "./component/pages/Deshboard2";

// 🟦 PAGES
import Dashboard from "./component/pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard page that shows all 3 buttons/forms */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional: If you ever want to open forms as separate pages */}
        <Route path="/buy" element={<BuyChips />} />
        <Route path="/sell" element={<SellChips />} />
        <Route path="/store" element={<StoreChips />} />
        <Route path="/deshboard2" element={<Deshboard2 />} />
      </Routes>
    </Router>
  );
}

export default App;
