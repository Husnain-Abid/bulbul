import React, { useState } from "react"
import CollapsibleSection from "./CollapsibleSection"
import ToggleSwitch from "./ToggleSwitch"

const FlightMode = () => {
  const [autoPilot, setAutoPilot] = useState(true)
  const [hover, setHover] = useState(true)

  return (
    <CollapsibleSection title="Flight Mode">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-500 mb-1">Flight Mode</div>
          <div className="mt-2">
            <ToggleSwitch label="Auto Pilot" enabled={autoPilot} onChange={() => setAutoPilot(!autoPilot)} />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-500 mb-1">Hover</div>
          <div className="mt-2">
            <ToggleSwitch label="Enable" enabled={hover} onChange={() => setHover(!hover)} />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-500 mb-1">Return to Home</div>
          <button className="mt-2 px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">RTH</button>
        </div>
      </div>
    </CollapsibleSection>
  )
}

export default FlightMode

