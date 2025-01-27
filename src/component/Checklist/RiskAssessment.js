import React, { useState } from "react"
import RiskAssessmentModal from "./RiskAssessmentModal"
import { useSelector } from "react-redux"

const RatingDot = ({ rating }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full bg-red-500"></div>
    <span className="text-xs font-semibold ">{rating}</span>
  </div>
)


const RiskAssessment = () => {

  const risks = [
    {
      mainCategory: "Weather Condition",
      subCategory: "Rain",
      description: "Potential flooding in the production facili...",
      severityRating: "High",
      likelihoodRating: "High",
    },
    {
      mainCategory: "Visibility",
      subCategory: "Low",
      description: "Sudden increase in raw material costs a...",
      severityRating: "High",
      likelihoodRating: "High",
    },
  ]

  const [selectedRisk, setSelectedRisk] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleView = (risk) => {
    setSelectedRisk(risk)
    setIsModalOpen(true)
  }

  const handleDelete = () => {
    // Handle delete logic here
    setIsModalOpen(false)
  }

  const handleEdit = () => {
    // Handle edit logic here
    setIsModalOpen(false)
  }

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div>

          <h1 className="mb-3 font-bold text-sm">Risk Assessment</h1>


        <div className={`border ${darkMode ? "bg-black border-gray-700" : "  border-gray-200 bg-white"  }  rounded-lg `}>

          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className={`${darkMode ? "bg-black border-b border-gray-700 text-gray-100" : "bg-gray-50 border-b border-gray-200 text-gray-500"}`}>
                  <th className="px-4 py-2.5 text-left text-sm font-medium ">Risk Main Category</th>
                  <th className="px-4 py-2.5 text-left text-sm font-medium ">Risk Sub Category</th>
                  <th className="px-4 py-2.5 text-left text-sm font-medium ">Description</th>
                  <th className="px-4 py-2.5 text-left text-sm font-medium ">Severity Rating</th>
                  <th className="px-4 py-2.5 text-left text-sm font-medium ">Likelihood Ratings</th>
                  <th className="px-4 py-2.5 text-left text-sm font-medium ">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className={`divide-y ${darkMode ?" divide-gray-200" : " divide-gray-200"} `}>
                {risks.map((risk, index) => (
                  <tr key={index} className={` ${darkMode ? "text-gray-100 hover:bg-gray-900" : "text-gray-900 hover:bg-gray-50" }  `}>
                    <td className="px-4 py-2.5 text-sm ">{risk.mainCategory}</td>
                    <td className="px-4 py-2.5 text-sm" >{risk.subCategory}</td>
                    <td className="px-4 py-2.5 text-sm ">{risk.description}</td>
                    <td className="px-4 py-2.5">
                      <RatingDot rating={risk.severityRating} />
                    </td>
                    <td className="px-4 py-2.5">
                      <RatingDot rating={risk.likelihoodRating} />
                    </td>
                    <td className="px-3 py-2.5">
                      <button
                      onClick={() => handleView(risk)}
                      className="text-sm text-red-500 hover:text-red-600">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <RiskAssessmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        risk={selectedRisk}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>

  )
}

export default RiskAssessment

