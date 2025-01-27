import React from "react"
import CollapsibleSection from "./CollapsibleSection"
import DataGrid from "./DataGrid"
import BetteryGraph from "./BetteryGraph"
import TempGraph from "./TempGraph"

const BatteryPerformance = () => {
  const sensorItems = [
    { label: "Current Charge Level", value: "87%" },
    { label: "Power Consumption (W)", value: "Average Consumption is 100 W" },
    { label: "Battery Health", value: "84%" },
    { label: "Cycles Used", value: "1200" },
  ]

  return (
    <CollapsibleSection title="Battery Performance">
      <DataGrid items={sensorItems} />

<BetteryGraph/>

<TempGraph/>

    </CollapsibleSection>
  )
}

export default BatteryPerformance

