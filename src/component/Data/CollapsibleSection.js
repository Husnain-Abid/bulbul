import React, { useState } from "react"
import { useSelector } from "react-redux";

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${darkMode ? "bg-black border-gray-700" : "bg-white border-gray-200"  } rounded-lg  mb-4`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 flex items-center justify-between text-left ${darkMode ? "bg-black border-gray-700 rounded-lg" : "bg-white border-gray-200 rounded-lg" }`}
      >
        <h2 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900" }`}>{title}</h2>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="px-6 pb-6">{children}</div>}
    </div>
  )
}

export default CollapsibleSection

