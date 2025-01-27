import React from 'react'
import PreFlightChecklist from './PreFlightChecklist'
import RTHChecklist from './RTHChecklist'
import ComplianceChecklist from './ComplianceChecklist'
import RiskAssessment from './RiskAssessment'
import { useSelector } from 'react-redux'

export default function Checklist() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={`${darkMode ? 'bg-[#111315] text-white' : 'bg-gray-50 text-black'}     `}>
      <div className=" space-y-8">
        <PreFlightChecklist />
        <RTHChecklist />
        <ComplianceChecklist />
        <RiskAssessment />

      </div>
    </div>
  )
}
