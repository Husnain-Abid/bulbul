import { SquareCheck } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const StatusCheckmark = () => (
  <div className="flex items-center justify-center">
   <SquareCheck className="text-[#E23744]" />
  </div>
)

const IconCircle = ({ children }) => (

  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">{children}</div>
)



export default function RTHChecklist() {
  const [selectAll, setSelectAll] = useState(false)

  const checklistItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
        <path d="M5.4165 4.33333V7.66667M18.3332 6.83333V5.16667M5.6665 11H11.8332C13.2333 11 13.9334 11 14.4681 10.7275C14.9386 10.4878 15.321 10.1054 15.5607 9.63498C15.8332 9.1002 15.8332 8.40013 15.8332 7V5C15.8332 3.59987 15.8332 2.8998 15.5607 2.36502C15.321 1.89462 14.9386 1.51217 14.4681 1.27248C13.9334 1 13.2333 1 11.8332 1H5.6665C4.26637 1 3.56631 1 3.03153 1.27248C2.56112 1.51217 2.17867 1.89462 1.93899 2.36502C1.6665 2.8998 1.6665 3.59987 1.6665 5V7C1.6665 8.40013 1.6665 9.1002 1.93899 9.63498C2.17867 10.1054 2.56112 10.4878 3.03153 10.7275C3.56631 11 4.26637 11 5.6665 11Z" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ),
      title: "Low Battery Failsafe (if Battery <= 30%)",
      comment: "Battery level below 30% RTH condition applied",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99963 7.49995V10.8333M9.99963 14.1666H10.008M8.84573 3.24305L1.99166 15.0819C1.61149 15.7386 1.4214 16.0669 1.4495 16.3364C1.474 16.5714 1.59714 16.785 1.78828 16.924C2.00741 17.0833 2.38679 17.0833 3.14556 17.0833H16.8537C17.6125 17.0833 17.9919 17.0833 18.211 16.924C18.4021 16.785 18.5253 16.5714 18.5498 16.3364C18.5779 16.0669 18.3878 15.7386 18.0076 15.0819L11.1535 3.24305C10.7747 2.58875 10.5853 2.26159 10.3382 2.15172C10.1227 2.05587 9.8766 2.05587 9.66105 2.15172C9.41394 2.26159 9.22454 2.58875 8.84573 3.24305Z" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      ),
      title: "Critical Battery Failsafe (Land When Battery <= 10%)",
      comment: "Critical battery health RTH condition applied",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clip-path="url(#clip0_9034_356)">
          <path d="M7.49984 3.33341V1.66675M12.4998 16.6667V18.3334M3.33317 7.50008H1.6665M16.6665 12.5001H18.3332M4.09502 4.09526L2.9165 2.91675M15.9047 15.9049L17.0832 17.0834M9.99984 14.7141L8.23207 16.4819C6.93032 17.7836 4.81977 17.7836 3.51802 16.4819C2.21628 15.1801 2.21628 13.0696 3.51802 11.7678L5.28579 10.0001M14.7139 10.0001L16.4817 8.23231C17.7834 6.93057 17.7834 4.82002 16.4817 3.51827C15.1799 2.21652 13.0694 2.21652 11.7676 3.51827L9.99984 5.28604" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_9034_356">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      ),
      title: "Drone LTE Link Loss",
      comment: "LTE Link loss, return to home",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.49984 7.50008H7.50817M12.4998 12.5001H12.5082M13.3332 6.66675L6.6665 13.3334M7.9165 7.50008C7.9165 7.7302 7.72996 7.91675 7.49984 7.91675C7.26972 7.91675 7.08317 7.7302 7.08317 7.50008C7.08317 7.26996 7.26972 7.08341 7.49984 7.08341C7.72996 7.08341 7.9165 7.26996 7.9165 7.50008ZM12.9165 12.5001C12.9165 12.7302 12.73 12.9167 12.4998 12.9167C12.2697 12.9167 12.0832 12.7302 12.0832 12.5001C12.0832 12.27 12.2697 12.0834 12.4998 12.0834C12.73 12.0834 12.9165 12.27 12.9165 12.5001ZM18.3332 10.0001C18.3332 14.6025 14.6022 18.3334 9.99984 18.3334C5.39746 18.3334 1.6665 14.6025 1.6665 10.0001C1.6665 5.39771 5.39746 1.66675 9.99984 1.66675C14.6022 1.66675 18.3332 5.39771 18.3332 10.0001Z" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      ),
      title: "RTH when LTE loss for >= 30 Sec",
      comment: "LTE Link loss for more than 30 sec r mission aborted",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2.5 8.33333L2.5 11.6667M6.25 9.16667V10.8333M10 5V15M13.75 2.5V17.5M17.5 8.33333V11.6667" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ),
      title: "RC Link Loss RTH",
      comment: "RC Link losses mission aborted",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99963 7.49995V10.8333M9.99963 14.1666H10.008M8.84573 3.24305L1.99166 15.0819C1.61149 15.7386 1.4214 16.0669 1.4495 16.3364C1.474 16.5714 1.59714 16.785 1.78828 16.924C2.00741 17.0833 2.38679 17.0833 3.14556 17.0833H16.8537C17.6125 17.0833 17.9919 17.0833 18.211 16.924C18.4021 16.785 18.5253 16.5714 18.5498 16.3364C18.5779 16.0669 18.3878 15.7386 18.0076 15.0819L11.1535 3.24305C10.7747 2.58875 10.5853 2.26159 10.3382 2.15172C10.1227 2.05587 9.8766 2.05587 9.66105 2.15172C9.41394 2.26159 9.22454 2.58875 8.84573 3.24305Z" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ),
      title: "ADFP Connection lost RTH after >= 30 Sec",
      comment: "ADFP Connection lost for more then 30 sec RTH",
    },
  ]

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={` ${darkMode ? "bg-black border-gray-700" : "bg-white border-gray-200"  }  rounded-lg border `}>
      {/* Header */}
      <div className="pt-6 px-6 ">
        <h2 className={`text-xl font-semibold  ${darkMode ? "text-white" : "text-gray-900" }`}>Checklist (RTH)</h2>
        <p className="mt-1 text-sm text-gray-500">Manage your Checklist (RTH) and their details here.</p>
      </div>

      {/* Select All */}
      <div className={`p-6  ${darkMode ? "border-b border-gray-600" : " border-b border-gray-200"} `}>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={(e) => setSelectAll(e.target.checked)}
            className={`w-4 h-4 rounded ${darkMode ? " border-gray-600 text-blue-600" : " border-gray-300 text-blue-600"}  focus:ring-blue-500`}
          />
          <span className="text-sm text-gray-700">Select All</span>
        </label>
      </div>

      {/* Table Header */}
      <div className={`grid grid-cols-12 gap-4 px-6 py-3  ${darkMode ? "border-b border-gray-800 bg-gray-900" : "border-b border-gray-200 bg-gray-50" } `}>
        <div className="col-span-2 text-sm font-medium ">Icons</div>
        <div className="col-span-5 text-sm font-medium ">Checklists</div>
        <div className="col-span-1  text-sm font-medium ">Status</div>
        <div className="col-span-4 text-sm font-medium ">Comments</div>
      </div>

      {/* Table Body */}
      <div className={`divide-y ${darkMode ? "divide-gray-600" :  "divide-gray-200"  }`}>
        {checklistItems.map((item, index) => (
          <div key={index} className={`grid grid-cols-12 gap-4 px-6 py-4 ${darkMode ? "hover:bg-gray-900" : "hover:bg-gray-50" }  `}>
            <div className="col-span-2">
              <IconCircle>{item.icon}</IconCircle>
            </div>
            <div className="col-span-5 flex items-center">
              <span className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-900"} `}>{item.title}</span>
            </div>
            <div className="col-span-1 flex items-center">
              <StatusCheckmark />
            </div>
            <div className="col-span-4 flex items-center">
              <span className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-600"}   `}>{item.comment}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
