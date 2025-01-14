'use client'; // Mark this component as a Client Component

import React, { useState } from "react";
import { FaCalendarAlt, FaRocket } from "react-icons/fa"; // Icons for Date and Theme

interface HackathonCardProps {
  title: string;
  date: string;
  theme: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ title, date, theme }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  // Toggle form visibility
  const handleRegisterClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 border border-gray-200">
      <div className="p-6 flex flex-col justify-between h-full">
        {/* Title */}
        <h3 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h3>
        
        {/* Theme with Icon */}
        <div className="flex items-center text-lg text-gray-600 mb-4">
          <FaRocket className="text-blue-500 mr-2" />
          <p>{theme}</p>
        </div>

        {/* Date with Icon */}
        <div className="flex items-center text-sm text-gray-500">
          <FaCalendarAlt className="mr-2" />
          <p>{date}</p>
        </div>
        
        {/* Register Button */}
        <div className="mt-6">
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 w-full"
            onClick={handleRegisterClick}
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Form Modal or Section */}
      {isFormVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Register for {title}</h3>
            <form>
              {/* User Information */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Close Button */}
            <div className="mt-4 text-center">
              <button
                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-300"
                onClick={handleRegisterClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HackathonCard;
