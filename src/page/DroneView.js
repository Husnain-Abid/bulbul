import React from 'react'
import SectionHeader from '../component/SectionHeader'
import MapCardGrid from '../component/mapCard/MapCardGrid'

export default function DroneView() {
  return (
    <>
      <main className="p-4">

        <SectionHeader heading={"All Active Missions"} numbers={false} button={false} />

        <MapCardGrid />


      </main>



    </>
  )
}
