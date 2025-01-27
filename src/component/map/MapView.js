import React, { useState } from "react"
import ControlButton from "../Tab/ControlButton"
import Map from "../../asset/map/map.png"
import { Expand } from "lucide-react"
import { useSelector } from "react-redux"


const MapView = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [manualControl, setManualControl] = useState(false)
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`relative w-full h-[600px] ${darkMode ? 'bg-gray-900 text-white ' : ' bg-white text-black'}  rounded-lg overflow-hidden`}>
      {/* Background Image */}
      <img
        src={Map}
        alt="Drone view"
        className="w-full h-full object-cover"
      />

      {/* Overlay Controls */}
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top Bar */}
        <div className="flex justify-between items-start">
          <button onClick={() => setIsFullscreen(!isFullscreen)} className={`p-2  ${darkMode ? 'bg-[#111315]' :  'bg-white'}  rounded-lg `}>
            <Expand className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className={`${darkMode ? 'bg-[#111315]' :  'bg-white'}  px-4 py-2 rounded-lg `}>
              <span className="text-sm font-medium">Estimated Delivery Time: 12 min</span>
            </div>
            <button className={`px-4 py-2 ${darkMode ? 'bg-[#111315]' :  'bg-white'}   rounded-lg `}>
              <span className="text-sm font-medium">Map View</span>
            </button>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <ControlButton
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              }
              label="Hover"
            />
            <ControlButton
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              }
              label="RTH"
            />
            <ControlButton
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8m-4-4h8" />
                </svg>
              }
              label="Precise Delivery"
            />
          </div>

          <ControlButton
            variant="toggle"
            label="Manual Control"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 5l4 4m0 0l-4 4m4-4H8m-5 4v4a2 2 0 002 2h12" />
              </svg>
            }
            onClick={() => setManualControl(!manualControl)}
          >
            <span className={`ml-2 ${manualControl ? "text-green-500" : "text-red-500"}`}>
              {manualControl ? "ON" : "OFF"}
            </span>
          </ControlButton>
        </div>
      </div>
    </div>
  )
}

export default MapView

