import React from "react"

const ToggleSwitch = ({ label, enabled, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={enabled} onChange={onChange} />
        <div className={`w-10 h-6 rounded-full transition-colors ${enabled ? "bg-red-500" : "bg-gray-200"}`}>
          <div
            className={`absolute w-4 h-4 rounded-full bg-white transform transition-transform top-1 ${
              enabled ? "translate-x-5" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <span className="ml-3 text-sm text-gray-900">{label}</span>
    </label>
  )
}

export default ToggleSwitch

