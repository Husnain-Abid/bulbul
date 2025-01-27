import React from "react"
import FileLink from "./FileLink"
import { useSelector } from "react-redux";

const SensorsTable = ({ sensors }) => {

  const darkMode = useSelector((state) => state.theme.darkMode);


  return (
    <>
      <h3 className="text-sm text-gray-500 mb-2.5">Sensors</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200  ">
          <thead >
            <tr className={` ${darkMode ? 'bg-[#111315] text-white border-gray-700 ' : ' bg-gray-50'}   `}>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                Sensor ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                Drone ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                Sensor Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                Camera Resolution
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                Calibration
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">
                Status
              </th>
            </tr>
          </thead>
          <tbody className={` ${darkMode ? 'bg-[#111315] text-white border-gray-700 ' : ' bg-gray-50'}   divide-y divide-gray-200`}>
            {sensors.map((sensor, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="px-4 py-3 text-sm border border-gray-200">{sensor.sensorId}</td>
                <td className="px-4 py-3 text-sm border border-gray-200">{sensor.droneId}</td>
                <td className="px-4 py-3 text-sm border border-gray-200">{sensor.name}</td>
                <td className="px-4 py-3 text-sm border border-gray-200">{sensor.type}</td>
                <td className="px-4 py-3 text-sm border border-gray-200">{sensor.resolution}</td>
                <td className="px-4 py-3 text-sm border border-gray-200">
                  <FileLink filename="File.pdf" />
                </td>
                <td className="px-4 py-3 text-sm border border-gray-200">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${sensor.status === "Attached"
                        ? " text-[#22C55E]"
                        : " text-[#F03A3A]"
                      }`}
                  >
                    {sensor.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>




    </>
  )
}

export default SensorsTable

