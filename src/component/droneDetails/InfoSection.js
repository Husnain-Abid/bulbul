import React from "react"
import { useSelector } from "react-redux";

const InfoSection = ({ title, children }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="mb-6">
      <h2 className={`text-xl font-medium p-2.5 ${darkMode ? 'bg-[#272B30] ' :  'bg-[#F5F5F5] '}  rounded-t-lg mb-6`}>{title}</h2>
      <div className="px-2">{children}</div>
    </div>
  )
}

export default InfoSection

