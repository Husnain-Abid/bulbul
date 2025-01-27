import React from "react"
import CollapsibleSection from "./CollapsibleSection"
import DataGrid from "./DataGrid"

const SensorData = () => {
  const sensorItems = [
    { label: "Current Temperature", value: "52°C" },
    { label: "barometric Pressure", value: "5000 hPa" },
    { label: "Obstacle Distance", value: "4 meters" },
    { label: "Obstacle Distance", value: "4 meters" },
  ]

  return (
    <CollapsibleSection title="Sensor Data">
      <DataGrid items={sensorItems} />
    </CollapsibleSection>
  )
}

export default SensorData

