import React from "react"

const MetricItem = ({ label, value }) => (
  <div className="text-white">
    <div className="text-xs font-bold mb-1">{label}</div>
    <div className="text-xs text-white/60 ">{value}</div>
  </div>
)

const MetricsBar = ({ metrics }) => {
  return (
    <div className="grid grid-cols-5 gap-2 px-2 py-3 bg-black/30 backdrop-blur-sm rounded-lg">
      <MetricItem label="Altitude" value={`${metrics.altitude} m`} />
      <MetricItem label="GPS" value={metrics.gps} />
      <MetricItem label="Speed" value={`${metrics.speed} m/s`} />
      <MetricItem label="From CS" value={`${metrics.fromCS} m`} />
      <MetricItem label="Battery" value={`${metrics.battery}%`} />
    </div>
  )
}

export default MetricsBar

