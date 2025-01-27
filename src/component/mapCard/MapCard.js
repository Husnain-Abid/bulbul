import React from "react"
import StatusIcon from "./StatusIcon"
import MetricsBar from "./MetricsBar"
import mession from "../../asset/Mission.png"
import { Link } from "react-router-dom"

const MapCard = ({ data }) => {
  return (
    <Link to={`${data.link}`}>

      <div className="relative rounded-md overflow-hidden">
        {/* Background Image */}
        <div className="relative h-80">
          <img
            src={
              data.imageUrl ||
              mession
            }
            alt="Drone view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Top Bar */}
        <div className={`absolute top-0 left-0 right-0  p-2 flex 
      ${data.hasAlert ? "justify-between" : "justify-end"} items-center`}>
          {/* Alert Badge */}
          {data.hasAlert && (
            <div className="flex items-center gap-1 bg-[#FFDEDC] backdrop-blur-sm text-customRed px-3 py-1 rounded-full text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <g clip-path="url(#clip0_2610_9719)">
                  <path d="M5.00004 6.66671V5.00004M5.00004 3.33337H5.00421M9.16671 5.00004C9.16671 7.30123 7.30123 9.16671 5.00004 9.16671C2.69885 9.16671 0.833374 7.30123 0.833374 5.00004C0.833374 2.69885 2.69885 0.833374 5.00004 0.833374C7.30123 0.833374 9.16671 2.69885 9.16671 5.00004Z" stroke="#B42318" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2610_9719">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Alert</span>
            </div>
          )}

          {/* Status and Menu */}
          <div className="flex items-center gap-2">
            {!data.hasAlert && (
              <StatusIcon status={data.status} />
            )}

            <button className="w-8 h-8 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-lg text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="absolute bottom-1.5 left-0 right-0 px-2">
          <MetricsBar metrics={data.metrics} />
        </div>
      </div>


    </Link>
  )
}

export default MapCard