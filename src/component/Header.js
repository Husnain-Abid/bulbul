import React from "react"
import Avatar from "../asset/Avatar.svg"
import {  useSelector } from "react-redux";
const Header = () => {

  const darkMode = useSelector((state) => state.theme.darkMode);


  return (
    <header className={`   ${darkMode ? 'bg-[#1A1D1F] text-white' :  'bg-customWhite text-[#1A1D1F]'}    p-4 `}>
      <div className="flex justify-between items-center">
        <div className="relative flex items-center w-2/5 ">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search or type a command"
            className={` pl-10 py-3 w-full   ${darkMode ? 'bg-[#272B30] text-white' :  'bg-gray-200 text-[#272B30]'}  rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed `}
          />

          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <div className={`flex px-3 py-1  ${darkMode ? 'bg-black':  'bg-customWhite'}   rounded-lg  justify-center items-center gap-2.5 `}>
              <div className={` ${darkMode ? 'text-white':  'text-[#1a1d1f]'} text-base font-semibold font-inter leading-normal`}>⌘ F</div>
            </div>
          </div>


        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <div className="w-2 h-2 absolute top-2.5 right-2.5 bg-[#ff6955] rounded-xl border-1 border-[#fcfcfc]" />
          </button>
          <div className="w-10 h-10  rounded-full">

            <img src={Avatar} alt="avatar" />

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

