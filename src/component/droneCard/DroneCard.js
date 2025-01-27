import React from "react"
import { useSelector } from "react-redux";

const DroneCard = ({ drone }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={` border ${darkMode ? 'bg-[#272B30] border-[#1A1D1F]' : 'bg-white '} rounded-lg   p-4 w-[400px] shadow-sm`}>
      {/* Card Header */}
      <div className="flex justify-between items-center mb-5">
        <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} `}>Drone Name</h3>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* Metrics Grid */}
      <div className={`grid grid-cols-5 gap-4 mb-6 ${darkMode ? 'text-white' : 'text-black'} `}>
        <div>
          <p className="text-xs mb-1">Altitude</p>
          <p className="text-xs text-gray-400 font-medium">48 meter</p>
        </div>
        <div>
          <p className="text-xs mb-1">GPS</p>
          <p className="text-xs text-gray-400 font-medium">Satellite</p>
        </div>
        <div>
          <p className="text-xs mb-1">Speed</p>
          <p className="text-xs text-gray-400 font-medium">12 m/s</p>
        </div>
        <div>
          <p className="text-xs mb-1">From CS</p>
          <p className="text-xs text-gray-400 font-medium">4000 m</p>
        </div>
        <div>
          <p className="text-xs mb-1">Battery</p>
          <p className="text-xs text-gray-400 font-medium">98 %</p>
        </div>
      </div>

      {/* Status Section */}
      <div className={`grid grid-cols-2 gap-4  border-t-2 ${darkMode ? 'text-white border-gray-600 ' : 'text-black'}  pt-4 `}>
        <div>
          <p className="text-xs  mb-1">Active Mission</p>
          <a href="#" className="text-sm text-blue-600 underline hover:text-blue-700">
            View
          </a>
        </div>
        <div >
          <p className="text-xs mb-1">Active Alerts</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">0 Active Alerts</span>
            <a href="#" className="text-sm text-blue-300 underline hover:text-blue-700">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DroneCard

