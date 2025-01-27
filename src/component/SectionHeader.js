import React from 'react'
import { useSelector } from 'react-redux';

export default function SectionHeader({ heading, numbers, button }) {
    const darkMode = useSelector((state) => state.theme.darkMode);
    return (
        <>
            <div className="flex items-center justify-between py-4 ">
                {/* Left Side - Title and Count */}
                <div className="flex items-center space-x-2">
                    <h1 className={`text-3xl font-normal text-gray-900 font-sui 
                    
                    ${darkMode ? 'bg-[#111315] text-white' :  'bg-customWhite text-black'}  `}
                    >{heading}</h1>
                    {numbers && (
                        <span className="text-gray-500">(12345)</span>)
                    }
                </div>

                {/* Right Side - View Toggle and Add Button */}
                <div className="flex items-center space-x-3">
                    {/* View Toggle Buttons */}
                    
                    {button && (
                    <div className="flex items-center gap-3.5 rounded-lg p-1">
                        {/* List View Button */}
                        <button
                            className={`p-2 rounded-lg transition-colors ${darkMode ? ' bg-[#272B30]' :  'bg-white'}     shadow-sm  text-gray-500 hover:text-gray-700"}`}
                            aria-label="List view"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 2.40015C6.69767 2.40015 2.3996 6.69821 2.3996 12.0001C2.3996 17.3021 6.69766 21.6001 11.9996 21.6001C17.3015 21.6001 21.5996 17.3021 21.5996 12.0001C21.5996 6.69822 17.3015 2.40015 11.9996 2.40015ZM10.971 17.2002C10.971 17.7683 11.4315 18.2288 11.9996 18.2288C12.5677 18.2288 13.0282 17.7683 13.0282 17.2002C13.0282 16.6322 12.5677 16.1717 11.9996 16.1717C11.4315 16.1717 10.971 16.6322 10.971 17.2002ZM10.4567 10.2001C10.4567 9.34805 11.1475 8.65729 11.9996 8.65729C12.8517 8.65729 13.5425 9.34805 13.5425 10.2001C13.5425 11.0522 12.8517 11.743 11.9996 11.743C11.4315 11.743 10.971 12.2035 10.971 12.7716V14.1145C10.971 14.6826 11.4315 15.1431 11.9996 15.1431C12.5677 15.1431 13.0282 14.6826 13.0282 14.1145V13.6511C14.5152 13.2085 15.5996 11.831 15.5996 10.2002C15.5996 8.21192 13.9878 6.60015 11.9996 6.60015C10.0114 6.60015 8.3996 8.21192 8.3996 10.2001C8.3996 10.7682 8.8601 11.2287 9.42817 11.2287C9.99623 11.2287 10.4567 10.7682 10.4567 10.2001Z" fill="#676767" />
                            </svg>
                        </button>

                        {/* Grid View Button */}
                        <button
                            className={`p-2 rounded-lg transition-colors ${darkMode ? ' bg-[#272B30]' :  'bg-white'} shadow-sm text-gray-500 hover:text-gray-700`}
                            aria-label="Grid view"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M2.40002 4.53336C2.40002 3.35515 3.35515 2.40002 4.53336 2.40002H8.80002C9.97823 2.40002 10.9334 3.35515 10.9334 4.53336V8.80002C10.9334 9.97823 9.97823 10.9334 8.80002 10.9334H4.53336C3.35515 10.9334 2.40002 9.97823 2.40002 8.80002V4.53336Z" fill="#676767" />
                                <path d="M2.40002 15.2C2.40002 14.0218 3.35515 13.0667 4.53336 13.0667H8.80002C9.97823 13.0667 10.9334 14.0218 10.9334 15.2V19.4667C10.9334 20.6449 9.97823 21.6 8.80002 21.6H4.53336C3.35515 21.6 2.40002 20.6449 2.40002 19.4667V15.2Z" fill="#676767" />
                                <path d="M13.0667 4.53336C13.0667 3.35515 14.0218 2.40002 15.2 2.40002H19.4667C20.6449 2.40002 21.6 3.35515 21.6 4.53336V8.80002C21.6 9.97823 20.6449 10.9334 19.4667 10.9334H15.2C14.0218 10.9334 13.0667 9.97823 13.0667 8.80002V4.53336Z" fill="#676767" />
                                <path d="M13.0667 15.2C13.0667 14.0218 14.0218 13.0667 15.2 13.0667H19.4667C20.6449 13.0667 21.6 14.0218 21.6 15.2V19.4667C21.6 20.6449 20.6449 21.6 19.4667 21.6H15.2C14.0218 21.6 13.0667 20.6449 13.0667 19.4667V15.2Z" fill="#676767" />
                            </svg>
                        </button>
                    </div>


                    )}

                    {/* Add Drone Button */}
                    <button className="flex items-center text-sm space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Add Drone</span>
                    </button>
                </div>
            </div>


        </>
    )
}
