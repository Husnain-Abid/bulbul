import React, { useState } from "react"
import { useSelector } from "react-redux";

const TabSection = ({ activeTab, setActiveTab }) => {
  const tabs = ["Map View", "Drone Details", "Checklist", "Data"]
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` py-2 px-3 inline-flex items-center font-medium text-sm mb-6 ${
              activeTab === tab
                ? ` ${darkMode ? 'bg-gray-900 text-white border-gray-700 ' : ' bg-customWhite text-gray-900'}  rounded-lg `
                : " text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default TabSection

