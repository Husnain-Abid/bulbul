import { File } from "lucide-react"
import React from "react"
import { useSelector } from "react-redux";

const FileLink = ({ filename }) => {

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <a href="#" className={`inline-flex items-center text-sm ${darkMode ? 'bg-[#111315] text-white' :  'bg-customWhite text-black'}  hover:text-red-600`}>
      <div className={` ${darkMode ? 'bg-[#111315] text-white' :  'bg-customWhite text-black'}   w-8 h-8 rounded-full mr-3 flex justify-center items-center`}>
      <File className="w-4 h-4 text-red-600" />
      </div>
      {filename}
    </a>
  )
}

export default FileLink

