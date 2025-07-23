// src/pages/Dashboard2.jsx
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard2 = () => {
  const ratePerKg = 50; // ₹ per kg
  const unit = "quintal"; // Change to "ton" if needed

  const summary = {
    purchases: 712500, // ₹
    sales: 618400, // ₹
    lots: 8,
    pending: 3200, // ₹
  };

  // ₹ to kg conversion
  const purchaseKg = summary.purchases / ratePerKg;
  const salesKg = summary.sales / ratePerKg;

  // Unit conversion
  let purchaseWeight = purchaseKg;
  let salesWeight = salesKg;
  let unitLabel = "kg";

  if (unit === "quintal") {
    purchaseWeight = purchaseKg / 100;
    salesWeight = salesKg / 100;
    unitLabel = "Quintal";
  } else if (unit === "ton") {
    purchaseWeight = purchaseKg / 1000;
    salesWeight = salesKg / 1000;
    unitLabel = "Ton";
  }

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales ₹",
        data: [6500, 8000, 7000, 9000, 8500, 10000],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Lot A", "Lot B", "Lot C", "Lot D"],
    datasets: [
      {
        label: "Inventory (kg)",
        data: [2000, 3500, 1800, 2700],
        backgroundColor: "#A855F7",
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold text-indigo-700 mb-6">Admin Panel</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="hover:text-indigo-500 cursor-pointer">📊 Overview</li>
          <li className="hover:text-indigo-500 cursor-pointer">🛒 Purchases</li>
          <li className="hover:text-indigo-500 cursor-pointer">📦 Storage</li>
          <li className="hover:text-indigo-500 cursor-pointer">🏭 Sales</li>
          <li className="hover:text-indigo-500 cursor-pointer">⚙️ Settings</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-600">Monitor your business in one place</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card
            title={`Total Purchase (${unitLabel})`}
            value={`${purchaseWeight.toFixed(2)} ${unitLabel}`}
            color="text-green-600"
          />
          <Card
            title={`Total Sell (${unitLabel})`}
            value={`${salesWeight.toFixed(2)} ${unitLabel}`}
            color="text-blue-600"
          />
          <Card
            title="Stored Lots"
            value={summary.lots}
            color="text-purple-600"
          />
          <Card
            title="Pending Payments"
            value={`₹${summary.pending}`}
            color="text-red-600"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Sales Trend
            </h3>
            <div className="h-[300px]">
              <Line
                data={lineData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Inventory per Lot
            </h3>
            <div className="h-[300px]">
              <Bar
                data={barData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Card Component
function Card({ title, value, color }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className={`text-xl font-bold mt-1 ${color}`}>{value}</p>
    </div>
  );
}

export default Dashboard2;
