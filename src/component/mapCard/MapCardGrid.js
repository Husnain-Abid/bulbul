import React from "react"
import MapCard from "./MapCard"

const MapCardGrid = () => {
  // Sample data for demonstration
  const cards = [
    {
      id: 1,
      status: "calibration",
      hasAlert: true,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
    {
      id: 2,
      status: "calibration",
      hasAlert: false,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
    {
      id: 3,
      status: "approaching-delivery",
      hasAlert: true,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
    {
      id: 4,
      status: "approaching-base",
      hasAlert: false,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
    {
      id: 5,
      status: "approaching-base",
      hasAlert: false,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
    {
      id: 6,
      status: "taking-off",
      hasAlert: false,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
    {
      id: 7,
      status: "hover",
      hasAlert: false,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
    {
      id: 8,
      status: "landing",
      hasAlert: false,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
    {
      id: 9,
      status: "hover",
      hasAlert: false,
      metrics: {
        altitude: "48",
        gps: "Satellite",
        speed: "12",
        fromCS: "4000",
        battery: "98",
      },
      link:"/tam"
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {cards.map((card) => (
        <MapCard key={card.id} data={card} />
      ))}
    </div>
  )
}

export default MapCardGrid

