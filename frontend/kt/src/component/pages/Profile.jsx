// src/pages/Profile.jsx
import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 max-w-md w-full text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://i.ibb.co/yBFqzfk/user-icon.png"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-purple-500 shadow"
          />
        </div>

        {/* Name & Role */}
        <h2 className="text-2xl font-bold text-gray-800">Yogi Patidar</h2>
        <p className="text-sm text-gray-500">Software Developer</p>

        {/* Info Section */}
        <div className="mt-6 text-left space-y-2 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">📧 Email:</span>
            <span className="text-right">yogi@example.com</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">📱 Mobile:</span>
            <span className="text-right">+91-9876543210</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">📍 Location:</span>
            <span className="text-right">Indore, MP</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
            🔵
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600 text-xl">
            📸
          </a>
          <a href="#" className="text-gray-800 hover:text-black text-xl">
            🐦
          </a>
        </div>

        {/* Edit Button */}
        <div className="mt-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium shadow">
            ✏️ Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
