import React from "react"
import { useSelector } from "react-redux"

const CheckboxStatus = ({ checked }) => {

    const darkMode = useSelector((state) => state.theme.darkMode);



    return (
        <>
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="absolute w-full h-full opacity-0 cursor-pointer"
                        checked={checked}
                    />
                    <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition ${checked ? "border-green-500 bg-white" : "border-gray-300 bg-transparent"
                            }`}
                    >
                        {checked && (
                            <svg className="w-2.5 h-2.5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

const ChecklistRow = ({ category, items }) => {

    const darkMode = useSelector((state) => state.theme.darkMode);


    return (
        <div className={`grid grid-cols-4 p-4 text-sm ${darkMode ? "border-b border-gray-100 text-gray-100 " : " text-gray-900border-b border-gray-600"}  `}>
            <div className=" font-semibold">{category}</div>
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                    <CheckboxStatus checked={item.checked} />
                    <span className={`${darkMode ? "text-gray-100" : "text-gray-700"} `}>{item.label}</span>
                </div>
            ))}
        </div>
    )
}

const PreFlightChecklist = () => {
    const checklistData = [
        {
            category: "Visual Inspection",
            items: [
                { label: "Drone Body", checked: true },
                { label: "Propellers", checked: true },
                { label: "Landing Gear", checked: true },
            ],
        },
        {
            category: "Battery and Power Systems",
            items: [
                { label: "Battery Charge", checked: true },
                { label: "Battery Condition", checked: true },
                { label: "Battery Connectivity", checked: true },
            ],
        },
        {
            category: "Sensor and Camera Systems",
            items: [
                { label: "Camera", checked: false },
                { label: "Sensors", checked: false },
            ],
        },
        {
            category: "Firmware and Software Checks",
            items: [
                { label: "Firmware Updates", checked: false },
                { label: "Software Check", checked: true },
            ],
        },
        {
            category: "Communication Systems",
            items: [
                { label: "Remote Controller", checked: false },
                { label: "Telemetry Link", checked: true },
                { label: "GPS Link", checked: true },
            ],
        },
        {
            category: "Operational Readiness",
            items: [
                { label: "Flight Plan", checked: false },
                { label: "No-Fly Zone", checked: false },
                { label: "Weather Conditions", checked: false },
            ],
        },
        {
            category: "Safety Check",
            items: [
                { label: "Propeller Guards", checked: true },
                { label: "Emergency Procedure", checked: true },
                { label: "Obstacle Avoidance", checked: true },
            ],
        },
        {
            category: "Payload & Winch System",
            items: [
                { label: "Payload Secure", checked: false },
                { label: "Winch System", checked: false },
                { label: "Weather Conditions", checked: false },
            ],
        },
        {
            category: "Logistics & Documentation",
            items: [
                { label: "Flight Log", checked: true },
                { label: "Approval Documentation", checked: true },
                { label: "Weather Conditions", checked: true },
            ],
        },
    ]
    
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <div className={`${darkMode ? 'bg-[#111315] text-white' :  'bg-white text-black'}    rounded-lg `}>
            {/* Header */}
            <div className={`p-6 border-b ${darkMode ? "border-gray-600" : "border-gray-200"} `}>
                <h2 className={`text-xl font-semibold ${darkMode ? "text-gray-100" : "text-gray-900"} `}>Pre Flight Checklist</h2>
                <p className={`mt-1 text-sm ${darkMode ? "text-gray-100" : "text-gray-500"} `}>Manage your preflight checklist for ground staff here</p>
            </div>

            {/* Checklist Content */}
            <div className="">
                {/* Column Headers */}
                <div className={`grid grid-cols-4 p-4  ${darkMode ? " border-b  border-gray-600 text-gray-100" : " border-b  border-gray-200 text-gray-500"} `}>
                    <div className="text-xs font-medium ">Checklists</div>
                    <div className="text-xs font-medium ">Status</div>
                    <div className="text-xs font-medium ">Status</div>
                    <div className="text-xs font-medium ">Status</div>
                </div>

                {/* Checklist Rows */}
                <div className={`divide-y ${darkMode ? "divide-gray-500" : "divide-gray-200"}  `}>
                    {checklistData.map((item, index) => (
                        <ChecklistRow key={index} category={item.category} items={item.items} />
                    ))}
                </div>

                {/* Reason Section */}
                {/* <div className="mt-6">
                    <h3 className="text-sm text-gray-500 mb-2">Reason</h3>
                    <p className="text-gray-900">Lorem ipsum dolor sit amet consectetur.</p>
                </div> */}
            </div>
        </div>
    )
}

export default PreFlightChecklist

