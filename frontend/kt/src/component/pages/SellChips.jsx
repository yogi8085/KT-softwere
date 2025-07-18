import React, { useState } from "react";

const SellChips = () => {
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [total, setTotal] = useState(0);

  const handleCalculation = () => {
    const qty = parseFloat(quantity) || 0;
    const rt = parseFloat(rate) || 0;
    setTotal(qty * rt);
  };

  return (
    <div className="bg-blue-50 px-3 sm:px-4 pt-4 sm:pt-6 pb-4 min-h-[80vh] overflow-x-hidden">
      <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 w-full max-w-full sm:max-w-xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <h2 className="text-xl sm:text-3xl font-bold text-blue-600 text-center">
            Sell Chips Entry Form
          </h2>
        </div>

        {/* Form */}
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            placeholder="Invoice No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            placeholder="Lot No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            placeholder="Variety / Grade"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="number"
            placeholder="Quantity (kg)"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            onBlur={handleCalculation}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="number"
            placeholder="Rate (₹/kg)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            onBlur={handleCalculation}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Total */}
          <div className="text-base sm:text-lg font-semibold text-blue-700 text-center sm:text-right">
            Total Price: ₹ {total.toFixed(2)}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition duration-300"
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellChips;
