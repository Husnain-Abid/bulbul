import React from "react"
import CollapsibleSection from "./CollapsibleSection"
import DataGrid from "./DataGrid"

const TelemetryData = () => {
  const telemetryItems = [
    { label: "Altitude", value: "25 meters" },
    { label: "Horizontal Speed", value: "120 m/s" },
    { label: "Vertical Speed", value: "12 m/s" },
    { label: "GPS Coordinates", value: "37.7749° N, 122.4194° W" },
    { label: "Distance form Base", value: "40 KM" },
    { label: "" },
    { label: "Battery Status", value: "12 %", isAlert: true },
    { label: "Voltage", value: "12 (v)" },
    { label: "Temperature", value: "39°C" },
    { label: "Internet Signal Strength", value: "25 dBm" },
    { label: "Latency", value: "9 ms" },
    { label: "Time Elapsed", value: "00:01:12" },
    { label: "Remaining Mission Time", value: "00:12:00" },
    { label: "Remaining Time against Battery", value: "00:13:00" },
  ]

  return (
    <CollapsibleSection title="Telemetry Data">
      <DataGrid items={telemetryItems} />
    </CollapsibleSection>
  )
}

export default TelemetryData

