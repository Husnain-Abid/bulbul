import React from "react"
import { useSelector } from "react-redux"

const IconCircle = ({ children }) => (
  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">{children}</div>
)

const Checkbox = ({ label }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);


  return(
  <label className="inline-flex items-center">
    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
    <span className={`ml-2 text-sm   ${darkMode ? "text-gray-100" : " text-gray-900" }`}>{label}</span>
  </label>


  )
}

const ComplianceChecklist = () => {
  const checklistItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_9034_1547)">
            <path d="M7.49984 10.0001L9.1665 11.6667L12.9165 7.91675M6.11131 3.18233C6.78117 3.12887 7.4171 2.86546 7.92856 2.4296C9.12211 1.41246 10.8776 1.41246 12.0711 2.4296C12.5826 2.86546 13.2185 3.12887 13.8884 3.18233C15.4516 3.30707 16.6928 4.54837 16.8176 6.11155C16.871 6.78142 17.1345 7.41734 17.5703 7.92881C18.5875 9.12235 18.5875 10.8778 17.5703 12.0714C17.1345 12.5828 16.871 13.2187 16.8176 13.8886C16.6928 15.4518 15.4516 16.6931 13.8884 16.8178C13.2185 16.8713 12.5826 17.1347 12.0711 17.5706C10.8776 18.5877 9.12211 18.5877 7.92856 17.5706C7.4171 17.1347 6.78117 16.8713 6.11131 16.8178C4.54812 16.6931 3.30683 15.4518 3.18208 13.8886C3.12863 13.2187 2.86522 12.5828 2.42935 12.0714C1.41222 10.8778 1.41222 9.12235 2.42935 7.92881C2.86522 7.41734 3.12863 6.78142 3.18208 6.11155C3.30683 4.54837 4.54812 3.30707 6.11131 3.18233Z" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_9034_1547">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Permissions (Please mention if this mission requires LAANAC Approval)",
      status: "Required",
      comment: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2.5 9.16667L2.5 17.5M12.5 9.16667L12.5 17.5M7.5 2.5L7.5 17.5M17.5 2.5V17.5" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      ),
      title: "Calibration",
      status: "Required",
      comment: "8502 Preston Rd. Inglewood, Maine 98380",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14.1668 8.33333V6.66667C14.1668 4.36548 12.3013 2.5 10.0002 2.5C7.69898 2.5 5.8335 4.36548 5.8335 6.66667V8.33333M10.0002 12.0833V13.75M7.3335 17.5H12.6668C14.067 17.5 14.767 17.5 15.3018 17.2275C15.7722 16.9878 16.1547 16.6054 16.3943 16.135C16.6668 15.6002 16.6668 14.9001 16.6668 13.5V12.3333C16.6668 10.9332 16.6668 10.2331 16.3943 9.69836C16.1547 9.22795 15.7722 8.8455 15.3018 8.60582C14.767 8.33333 14.067 8.33333 12.6668 8.33333H7.3335C5.93336 8.33333 5.2333 8.33333 4.69852 8.60582C4.22811 8.8455 3.84566 9.22795 3.60598 9.69836C3.3335 10.2331 3.3335 10.9332 3.3335 12.3333V13.5C3.3335 14.9001 3.3335 15.6002 3.60598 16.135C3.84566 16.6054 4.22811 16.9878 4.69852 17.2275C5.2333 17.5 5.93336 17.5 7.3335 17.5Z" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ),
      title: "GPS LOCK (Show GPS Lock: No)",
      status: "Yes",
      comment: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.02762 12.5L10.4165 10H7.08317L8.47206 7.5M18.3332 10.8333V9.16667M5.6665 15H11.8332C13.2333 15 13.9334 15 14.4681 14.7275C14.9386 14.4878 15.321 14.1054 15.5607 13.635C15.8332 13.1002 15.8332 12.4001 15.8332 11V9C15.8332 7.59987 15.8332 6.8998 15.5607 6.36502C15.321 5.89462 14.9386 5.51217 14.4681 5.27248C13.9334 5 13.2333 5 11.8332 5H5.6665C4.26637 5 3.56631 5 3.03153 5.27248C2.56112 5.51217 2.17867 5.89462 1.93899 6.36502C1.6665 6.8998 1.6665 7.59987 1.6665 9V11C1.6665 12.4001 1.6665 13.1002 1.93899 13.635C2.17867 14.1054 2.56112 14.4878 3.03153 14.7275C3.56631 15 4.26637 15 5.6665 15Z" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ),
      title: "Battery Show Status 100%",
      status: "Yes",
      comment: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M18.3332 5.83325L11.776 12.3904C11.446 12.7205 11.281 12.8855 11.0907 12.9473C10.9233 13.0017 10.743 13.0017 10.5757 12.9473C10.3854 12.8855 10.2204 12.7205 9.89036 12.3904L7.60931 10.1094C7.2793 9.77938 7.11429 9.61437 6.92402 9.55255C6.75665 9.49817 6.57636 9.49817 6.40899 9.55255C6.21872 9.61437 6.05371 9.77938 5.72369 10.1094L1.6665 14.1666M18.3332 5.83325H12.4998M18.3332 5.83325V11.6666" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ),
      title: "Latency (Current Latency 130 ms)",
      status: "Yes",
      comment: "4140 Parker Rd. Allentown, New Mexico 31134",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99963 7.49995V10.8333M9.99963 14.1666H10.008M8.84573 3.24305L1.99166 15.0819C1.61149 15.7386 1.4214 16.0669 1.4495 16.3364C1.474 16.5714 1.59714 16.785 1.78828 16.924C2.00741 17.0833 2.38679 17.0833 3.14556 17.0833H16.8537C17.6125 17.0833 17.9919 17.0833 18.211 16.924C18.4021 16.785 18.5253 16.5714 18.5498 16.3364C18.5779 16.0669 18.3878 15.7386 18.0076 15.0819L11.1535 3.24305C10.7747 2.58875 10.5853 2.26159 10.3382 2.15172C10.1227 2.05587 9.8766 2.05587 9.66105 2.15172C9.41394 2.26159 9.22454 2.58875 8.84573 3.24305Z" stroke="#E23744" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ),
      title: "Emergency Landing",
      status: "Yes",
      comment: "3517 W. Gray St. Utica, Pennsylvania 57867",
    },
  ]

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${darkMode ? "bg-black border-gray-700 " : "bg-white border-gray-200"  }  rounded-lg border `}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Checklist</h2>
        <p className="mt-1 text-sm text-gray-500">Manage your compliance checklist and their details here.</p>
      </div>

      {/* Table Header */}
      <div className={`grid grid-cols-12 gap-4 px-6 py-3 ${darkMode ? "border-b border-gray-700 bg-gray-800 " : "border-b border-gray-200 bg-gray-50"  } `}>
        <div className="col-span-2 text-sm font-medium ">Icons</div>
        <div className="col-span-4 text-sm font-medium ">Checklists</div>
        <div className="col-span-2 text-sm font-medium ">Status</div>
        <div className="col-span-4 text-sm font-medium ">Comments</div>
      </div>

      {/* Table Body */}
      <div className={`divide-y ${darkMode ? "divide-gray-600" : "divide-gray-200"  } `}>
        {checklistItems.map((item, index) => (
          <div key={index} className={`grid grid-cols-12 gap-4 px-6 py-4 ${darkMode ? "hover:bg-gray-900" : "hover:bg-gray-50" } `}>
            <div className="col-span-2">
              <IconCircle>{item.icon}</IconCircle>
            </div>
            <div className="col-span-4 flex items-center">
              <span className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-900"}`}>{item.title}</span>
            </div>
            <div className="col-span-2 flex items-center ">
              <Checkbox label={item.status} />
            </div>
            <div className="col-span-4 flex items-center">
              <span className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-600"}  `}>{item.comment}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComplianceChecklist

