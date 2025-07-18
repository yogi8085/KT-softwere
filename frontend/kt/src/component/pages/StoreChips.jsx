import React from "react";

const StoreChips = () => {
  return (
    <div className="bg-purple-50 px-3 sm:px-4 pt-4 sm:pt-6 pb-4 min-h-[80vh] overflow-x-hidden">
      <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 w-full max-w-full sm:max-w-xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <h2 className="text-xl sm:text-3xl font-bold text-purple-600 text-center">
            Store Chips Entry Form
          </h2>
        </div>

        {/* Form */}
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Lot No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="text"
            placeholder="Cold Store Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="text"
            placeholder="Warehouse Location"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="text"
            placeholder="RST No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="text"
            placeholder="FPR No."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="text"
            placeholder="Quality Check Status"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl transition duration-300"
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StoreChips;
