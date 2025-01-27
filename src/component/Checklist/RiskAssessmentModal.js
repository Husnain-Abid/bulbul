import React from "react"

const InfoRow = ({ label, value }) => (
  <div className="mb-6 ">
    <div className="text-sm text-gray-500 mb-1">{label}</div>
    <div className="text-sm text-gray-900">{value}</div>
  </div>
)

const RiskAssessmentModal = ({ isOpen, onClose, risk, onDelete, onEdit }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Risk Assessment</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex gap-8   ">
            <InfoRow label="Risk Main Category" value={risk.mainCategory} />
            <InfoRow label="Risk Sub Category"   value={risk.subCategory} />
            <InfoRow label="Description"  value={risk.description} />
          </div>

          <div className="flex gap-8 mt-6">
            <InfoRow label="Severity Rating"
              value={ <div className="flex items-center gap-2">
                  <span>{risk.severityRating}</span>
                </div>
              }
            />
            <InfoRow
              label="Likelihood Rating"
              value={
                <div className="flex items-center gap-2">
                  <span>{risk.likelihoodRating}</span>
                </div>
              }
            />
            <InfoRow
              label="Mitigation Strategy"
              value={
                <div className="flex items-center gap-2">
                  <span>Install advanced drainage <br />
                  systems</span>
                </div>
              }
            />
            <InfoRow
              label="Contingency Plan"
              value={
                <div className="flex items-center gap-2">
                  <span>Temporarily relocate critical operations to another facility.</span>
                </div>
              }
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 p-6 border-t border-gray-200">
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete
          </button>
          <button
            onClick={onEdit}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default RiskAssessmentModal

