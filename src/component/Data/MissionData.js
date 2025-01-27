import React from "react"
import CollapsibleSection from "./CollapsibleSection"
import map from "../../asset/mession_map.png"
import { useSelector } from "react-redux"

const MissionData = () => {
  const waypoints = [
    {
      name: "Waypoint A",
      status: "Completed",
      altitude: "43 meters",
      distance: "24 KM",
    },
    {
      name: "Waypoint B",
      status: "Pending",
      altitude: "43 meters",
      distance: "24 KM",
    },
    {
      name: "Waypoint C",
      status: "Pending",
      altitude: "43 meters",
      distance: "24 KM",
    },
  ]

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <CollapsibleSection title="Mission Data">
      <div className={`space-y-6 `}>
        <div>
          <div className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}  mb-1`}>Mission ID</div>
          <div className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-900"} `}>123456</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-1">Objective</div>
          <div className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-900"} `}>
            The objective od this mission is to provide the food and blankets for the flooded people
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y border rounded-lg  ${darkMode ? "divide-gray-700 border-gray-800" : "divide-gray-200" } `}>
            <thead>
              <tr className={` ${darkMode ? "bg-black text-gray-100" : "bg-gray-50 text-gray-500"} `}>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase">Waypoints</th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase">Altitude</th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase">Distance</th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? "bg-black divide-y divide-gray-700 text-gray-100   " :"bg-white divide-y divide-gray-200 text-gray-900"}`}>
              {waypoints.map((waypoint, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm ">{waypoint.name}</td>
                  <td className="px-6 py-4 text-sm ">{waypoint.status}</td>
                  <td className="px-6 py-4 text-sm ">{waypoint.altitude}</td>
                  <td className="px-6 py-4 text-sm ">{waypoint.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


<img src={map} alt="map_image" className="h-80 w-full object-fill" />

      </div>
    </CollapsibleSection>
  )
}

export default MissionData

