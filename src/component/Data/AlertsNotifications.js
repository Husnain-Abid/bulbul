import React from "react"
import CollapsibleSection from "./CollapsibleSection"
import { useSelector } from "react-redux";

const AlertsNotifications = () => {
  const alerts = [
    {
      id: "1234",
      type: "Maintenance",
      dateTime: "17 Dec 2024 9:17 AM",
      notification: "Camera calibration required",
    },
    {
      id: "1234",
      type: "Obstacle",
      dateTime: "17 Dec 2024 9:17 AM",
      notification: "Drone stopped, obstacle distance 1 meter",
    },
    {
      id: "1234",
      type: "Battery",
      dateTime: "17 Dec 2024 9:17 AM",
      notification: "Low battery: 30%",
    },
  ]
  
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <CollapsibleSection title="Alerts and Notifications">
      <div className="overflow-x-auto">
        <table className={`min-w-full divide-y  ${darkMode ?  "divide-gray-700 " : "divide-gray-200" } `}>
          <thead>
            <tr className={` ${darkMode ? "text-gray-100 bg-black-50" : "text-gray-500 bg-gray-50"}  `}>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase">Alert ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase">Alert Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase">Date and Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase">Notifications</th>
            </tr>
          </thead>
          <tbody className={` ${darkMode ? "bg-black divide-y divide-gray-700 text-gray-100" : "bg-white divide-y divide-gray-200 text-gray-700" }  `}>
            {alerts.map((alert, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm ">{alert.id}</td>
                <td className="px-6 py-4 text-sm ">{alert.type}</td>
                <td className="px-6 py-4 text-sm ">{alert.dateTime}</td>
                <td className="px-6 py-4 text-sm ">{alert.notification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CollapsibleSection>
  )
}

export default AlertsNotifications

