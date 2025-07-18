import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 shadow-lg rounded-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 mb-6">
          About KT Software
        </h1>

        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          <strong>KT Software</strong> is a digital solution designed to manage
          the full process of <strong>Chips Aloo</strong> — from procurement to
          cold storage and final sales. The system helps maintain accuracy,
          accountability, and transparency in daily operations.
        </p>

        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          📦 Chips Aloo Process Flow
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-800 mb-6">
          <li>Receive a purchase request from KT Traders</li>
          <li>Buy Chips Aloo from the farmer</li>
          <li>Generate the purchase invoice and record it</li>
          <li>Record sale if selling directly (no cold storage)</li>
          <li>Transfer to cold storage and assign a lot number</li>
          <li>Perform quality check after aging</li>
          <li>Receive the sale order from the company</li>
          <li>Verify requested lot and stock quantity</li>
          <li>Create a sales invoice and update records</li>
          <li>Dispatch the Chips Aloo to the company</li>
          <li>Receive payment in bank account</li>
          <li>Mark invoice as paid and reconcile transaction</li>
        </ol>

        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          📊 Sample Transactions
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-purple-100 text-purple-900">
              <tr>
                <th className="px-3 py-2 border">Date</th>
                <th className="px-3 py-2 border">Type</th>
                <th className="px-3 py-2 border">Counterparty</th>
                <th className="px-3 py-2 border">Qty (kg)</th>
                <th className="px-3 py-2 border">Rate (₹/kg)</th>
                <th className="px-3 py-2 border">Total (₹)</th>
                <th className="px-3 py-2 border">Variety</th>
                <th className="px-3 py-2 border">Invoice No.</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="px-3 py-2 border">2025-07-01</td>
                <td className="px-3 py-2 border">Purchase</td>
                <td className="px-3 py-2 border">ABC Potato Traders</td>
                <td className="px-3 py-2 border">1,000</td>
                <td className="px-3 py-2 border">12.50</td>
                <td className="px-3 py-2 border">12,500</td>
                <td className="px-3 py-2 border">Kufri Jyoti</td>
                <td className="px-3 py-2 border">P-20250701</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border">2025-07-02</td>
                <td className="px-3 py-2 border">Sale</td>
                <td className="px-3 py-2 border">XYZ Snacks Factory</td>
                <td className="px-3 py-2 border">800</td>
                <td className="px-3 py-2 border">15.00</td>
                <td className="px-3 py-2 border">12,000</td>
                <td className="px-3 py-2 border">Kufri Jyoti</td>
                <td className="px-3 py-2 border">S-20250702</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          © 2025 KT Software | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default About;
