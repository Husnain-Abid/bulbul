import { ChevronDown } from "lucide-react"
import { useState } from "react"

const AssignMissionModal = ({ isOpen, onClose, onAssign }) => {
  const [selectedUser, setSelectedUser] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Sample users data - in real app, this would come from props or API
  const users = [
    { email: "abc@example.com", name: "John Doe" },
    { email: "user@example.com", name: "Jane Smith" },
    { email: "test@example.com", name: "Mike Johnson" },
  ]

  if (!isOpen) return null

  const handleAssign = () => {
    if (selectedUser) {
      onAssign(selectedUser)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between rounded p-4 border-b border-gray-200 bg-[#F4F4F4]">
          <h2 className="text-xl font-semibold text-gray-900">Assign Mission</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">User</label>
            <div className="relative">
              <button
                type="button"
                className="relative w-full bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="block truncate text-gray-500">{selectedUser || "abc@example.com"}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              
                <ChevronDown />
              
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg border border-gray-200">
                  <ul className="max-h-60 overflow-auto py-1">
                    {users.map((user) => (
                      <li
                        key={user.email}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-50"
                        onClick={() => {
                          setSelectedUser(user.email)
                          setIsDropdownOpen(false)
                        }}
                      >
                        <div className="flex items-center">
                          <span className="block truncate text-sm">{user.email}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500">Enter user name, email or select it from the users list</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-4 py-3 border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleAssign}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  )
}

export default AssignMissionModal

