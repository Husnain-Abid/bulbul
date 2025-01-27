import React from 'react'
import TelemetryData from './TelemetryData'
import SensorData from './SensorData'
import WeatherConditions from './WeatherConditions'
import FlightMode from './FlightMode'
import MissionData from './MissionData'
import AlertsNotifications from './AlertsNotifications'
import TempGraph from './TempGraph'
import BetteryGraph from './BetteryGraph'
import BatteryPerformance from './BatteryPerformance'

export default function Data() {



    return (
        <div className='py-6 space-y-4'>
            <TelemetryData />
            <SensorData />
            <BatteryPerformance />
            <WeatherConditions />
            <FlightMode />
            <AlertsNotifications />
            <MissionData />

        </div>
    )
}
