import React, { useState } from "react";

const BuyChips = () => {
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Quintal");
  const [rate, setRate] = useState("");
  const [total, setTotal] = useState(0);
  const [grade, setGrade] = useState("");
  const [variety, setVariety] = useState("");
  const [date, setDate] = useState("");

  const handleCalculation = () => {
    let qty = parseFloat(quantity) || 0;
    let rt = parseFloat(rate) || 0;

    // Convert quantity to KG
    if (unit === "Ton") qty = qty * 1000;
    else if (unit === "Quintal") qty = qty * 100;

    setTotal(qty * rt);
  };

  return (
    <div className="bg-gray-100 px-3 sm:px-4 pt-4 sm:pt-6 pb-4 min-h-[80vh] overflow-x-hidden">
      <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 w-full max-w-full sm:max-w-xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <h2 className="text-xl sm:text-3xl font-bold text-green-600 text-center">
            🧾 Buy Chips Entry Form
          </h2>
        </div>

        {/* Form */}
        <form className="grid gap-4">
          {/* Date Input with Floating Label */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-green-600">
              📅 Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 pt-5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <input
            type="text"
            placeholder="👨‍🌾 Farmer Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <textarea
            placeholder="🏡 Village Address"
            rows="2"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
          ></textarea>
          <input
            type="text"
            placeholder="📱 Mobile No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          {/* Grade and Variety */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            >
              <option value="">🎖️ Select Grade</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>

            <select
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            >
              <option value="">🧪 Select Variety</option>
              <option value="Kufri Jyoti">Kufri Jyoti</option>
              <option value="Kufri Bahar">Kufri Bahar</option>
              <option value="Kufri Chandramukhi">Kufri Chandramukhi</option>
              <option value="Kufri Sindhuri">Kufri Sindhuri</option>
            </select>
          </div>

          {/* Quantity and Unit */}
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="📦 Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              onBlur={handleCalculation}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              onBlur={handleCalculation}
              className="w-1/2 border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            >
              <option value="Quintal">Quintal</option>
              <option value="Ton">Ton</option>
            </select>
          </div>

          <input
            type="number"
            placeholder="💰 Rate (₹/kg)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            onBlur={handleCalculation}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          <input
            type="text"
            placeholder="📄 Invoice No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          <input
            type="text"
            placeholder="🔢 Lot No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="text"
            placeholder="🧊 Cold Store Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          <input
            type="text"
            placeholder="🧾 RST No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="text"
            placeholder="🧾 FPR No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          {/* Total Price */}
          <div className="text-base sm:text-lg font-semibold text-green-700 text-center sm:text-right">
            💵 Total Price: ₹ {total.toFixed(2)}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition duration-300"
            onClick={(e) => e.preventDefault()}
          >
            🚀 Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyChips;
