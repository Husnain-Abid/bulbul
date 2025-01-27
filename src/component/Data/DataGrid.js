import React from "react"
import { useSelector } from "react-redux";

const DataItem = ({ label, value, isAlert }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="mb-6">
      <div className={`text-sm mb-1 ${isAlert ? "text-red-500" : "text-gray-500"}`}>{label}</div>
      <div className={`text-sm  ${darkMode ? "text-gray-100" :  "text-gray-900"  } `}>{value}</div>
    </div>
  )
}


const DataGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
    {items.map((item, index) => (
      <DataItem key={index} label={item.label} value={item.value} isAlert={item.isAlert} />
    ))}
  </div>
)

export default DataGrid

