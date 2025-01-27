import React from "react"
import InfoSection from "./InfoSection"
import InfoGrid from "./InfoGrid"
import SensorsTable from "./SensorsTable"
import FileLink from "./FileLink"

const DroneDetails = () => {
    const basicInfo = [
        { label: "Drone ID", value: "ADF1254" },
        { label: "Drone Serial Number", value: "123456789" },
        { label: "Drone Model", value: "DroneX" },
        { label: "Firmware Version", value: "v21.21.212.000140.0" },
        { label: "Status", value: "Active" },
    ]

    const physicalSpecs = [
        { label: "Weight", value: "500 lbs" },
        { label: "Dimensions", value: "24x45x45" },
        { label: "Battery Capacity", value: "v21.21.212.000140.0" },
    ]

    const performanceParams = [
        { label: "Max Speed", value: "ADF1254" },
        { label: "Max Altitude", value: "43 meters" },
        { label: "Flight Time", value: "v21.21.212.000140.0" },
    ]

    const communication = [
        { label: "Communication Protocol", value: "droneX" },
        { label: "Frequency Bands", value: "12 hz" },
        { label: "Signals & Strength Quality", value: "Good" },
        { label: "Latency", value: "ADF1254" },
        { label: "Bandwidth", value: "Wifi" },
        { label: "Encryption Methods", value: "Biometric" },
        { label: "Range and coverage", value: "250 meters" },
    ]

    const sensors = [
        {
            sensorId: "ADF1254",
            droneId: "ADF1254",
            name: "Sensor 1",
            type: "Lidar",
            resolution: "N/A",
            status: "Attached",
        },
        {
            sensorId: "ADF1254",
            droneId: "ADF1254",
            name: "Sensor 2",
            type: "Camera",
            resolution: "200 Pixels",
            status: "Detached",
        },
        {
            sensorId: "ADF1254",
            droneId: "ADF1254",
            name: "Sensor 3",
            type: "GPS",
            resolution: "N/A",
            status: "Attached",
        },
        {
            sensorId: "ADF1254",
            droneId: "ADF1254",
            name: "Sensor 4",
            type: "Lidar",
            resolution: "N/A",
            status: "Detached",
        },
    ]

    const maintenance = [
        { label: "Maintenance Title", value: "Drone Maintenance" },
        { label: "Maintenance Scheduled", value: "12 Dec 2024" },
        { label: "Component Checklists", value: "Pre-Flight Checklist" },
    ]

    const security = [
        { label: "Authentication Methods", value: "Biometric" },
        { label: "Encryption", value: "Security & Privacy protocols" },
        { label: "Remote Access Settings", value: "Secure Shell (SSH)" },
        { label: "Security Protocols", value: "SSL" },
    ]

    const miscellaneous = [
        { label: "Insurance Information", value: "ADF1254" },
        { label: "Owner/Operator", value: "John Doe" },
        { label: "Firmware log Update", value: <FileLink filename="Logs.pdf" /> },
    ]

    return (
        <div className="font-poppins ">
            <div className="pb-6 pt-10 border-b mb-6">
                <h1 className="text-3xl font-bold font-sui">
                    MarkX <span className="text-gray-500 text-sm font-normal">(ADF1254)</span>
                </h1>
            </div>

            <InfoSection title="Basic Information" >
                <InfoGrid items={basicInfo} />
            </InfoSection>

            <InfoSection title="Physical Specifications">
                <InfoGrid items={physicalSpecs} />
            </InfoSection>

            <InfoSection title="Performance Parameters">
                <InfoGrid items={performanceParams} />
            </InfoSection>

            <InfoSection title="Communication and controls">
                <InfoGrid items={communication} />
            </InfoSection>

            <InfoSection title="Sensors & Capabilities">
                <SensorsTable sensors={sensors} />
            </InfoSection>

            <InfoSection title="Operational Settings">
                <div>
                    <p className="text-sm text-gray-500 mb-1">Home Location</p>
                    <p className="text-sm font-medium">ADF1254</p>
                </div>
            </InfoSection>

            <InfoSection title="Maintenance and Logs">
                <InfoGrid items={maintenance} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-1">Error Reporting</p>
                        <p className="font-medium">Errors File</p>


                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-1">Firmware log Update</p>
                        <FileLink filename="Logs.pdf" />
                    </div>

                </div>
            </InfoSection>

            <InfoSection title="Security Information">
                <InfoGrid items={security} />
            </InfoSection>

            <InfoSection title="Miscellaneous">
                <InfoGrid items={miscellaneous} />
            </InfoSection>
        </div>
    )
}

export default DroneDetails

