import React from "react"
import CollapsibleSection from "./CollapsibleSection"
import DataGrid from "./DataGrid"

const WeatherConditions = () => {
  const weatherItems = [
    { label: "Temperature", value: "52°C" },
    { label: "Wind Speed and Direction", value: "12 m/s , 8°" },
    { label: "Humidity Level", value: "12%" },
    { label: "Light Levels", value: "45 lux" },
  ]

  return (
    <CollapsibleSection title="Weather Conditions">
      <DataGrid items={weatherItems} />
    </CollapsibleSection>
  )
}

export default WeatherConditions

