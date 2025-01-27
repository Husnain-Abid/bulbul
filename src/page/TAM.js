import React, { useState } from 'react'
import SectionHeader from '../component/SectionHeader'
import DroneCarousel from '../component/droneCard/DroneCarousel'
import TabSection from '../component/Tab/TabSection'
import MapView from '../component/map/MapView'
import DroneDetails from '../component/droneDetails/DroneDetails'
import Checklist from '../component/Checklist/Checklist'
import Data from '../component/Data/Data'
import { useSelector } from 'react-redux'

export default function TAM() {

  const darkMode = useSelector((state) => state.theme.darkMode);

  const [activeTab, setActiveTab] = useState("Map View")

  const renderContent = () => {
    switch (activeTab) {
      case "Map View":
        return <MapView />
      case "Drone Details":
        return <DroneDetails />
      case "Checklist":
        return <Checklist/>
      case "Data":
        return <Data/>
      default:
        return null
    }
  }

  return (
    <>
      <main className="p-4">

        <SectionHeader heading={"Drones"} numbers={false} button={true} />
        <DroneCarousel />

        <div className={`border ${darkMode ? 'bg-gray-900 text-white border-gray-700 ' : ' bg-white text-black'}  p-4  rounded-lg `}>
          <div className="">
            <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="mt-4">{renderContent()}</div>
          </div>
        </div>

      </main>



    </>
  )
}
