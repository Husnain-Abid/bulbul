import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../asset/Header.svg";
import logo2 from "../asset/Header2.svg";
import drone from "../asset/navbar/drone.svg";
import location from "../asset/navbar/location.svg";
import packages from "../asset/navbar/package.svg";
import predictive from "../asset/navbar/predictive.svg";
import settings from "../asset/navbar/settings.svg";
import { ChevronDown } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/themeSlice';

export default function Sidebar() {
  // Map icons to their corresponding names
  const icons = {
    drone,
    location,
    package: packages,
    predictive,
    settings,
  };

  const navbar = [
    {
      id: 1,
      name: "Drone View",
      icon: "drone",
    },
    {
      id: 2,
      name: "Roadmap",
      icon: "location",
    },
    {
      id: 3,
      name: "Package Handling",
      icon: "package",
    },
    {
      id: 4,
      name: "Predictive Platform",
      icon: "predictive",
    },
    {
      id: 5,
      name: "Setting",
      icon: "settings",
    },
  ];

  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <>
      <aside className={`relative ${darkMode ? 'bg-[#1A1D1F] text-white' :  'bg-customWhite text-black'} w-72 min-h-screen p-4`}>
        <div className="flex items-center mb-8">
<Link to="/">
          <img src={`${darkMode ? logo2 :  logo}`} alt='logo' />

</Link>


        </div>
        <nav>
          <ul className="space-y-2">
            {navbar.map((item, index) => (
              <li key={index} >
                <Link href="#" className="group block p-3 flex justify-between items-center  font-medium rounded-md hover:bg-customRed  transition duration-200">
                  <div className='flex gap-3'>
                    <img
                      src={icons[item.icon]}
                      alt={item.name} />
                    <span className='group-hover:text-white'> {item.name}</span>
                  </div>
                  <span > <ChevronDown className='w-4 text-gray-500  group-hover:text-white ' /> </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* dark mode button  */}

        <div className={`w-full absolute bottom-40 left-0 flex justify-center gap-2 px-4 transition-all duration-500 `}>

          <button className={`flex rounded-[32px] justify-center items-center gap-2 py-1 flex-1  ${darkMode ? ' bg-black text-gray-500' :  'bg-gray-700 text-white'} `}
            onClick={handleToggle} >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 18C15.8137 18 18.5 15.3137 18.5 12C18.5 8.68629 15.8137 6 12.5 6C9.18629 6 6.5 8.68629 6.5 12C6.5 15.3137 9.18629 18 12.5 18Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4952 1.5C13.0475 1.5 13.4952 1.94772 13.4952 2.5V3.5C13.4952 4.05228 13.0475 4.5 12.4952 4.5C11.9429 4.5 11.4952 4.05228 11.4952 3.5V2.5C11.4952 1.94772 11.9429 1.5 12.4952 1.5Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4952 19.5C13.0475 19.5 13.4952 19.9477 13.4952 20.5V21.4968C13.4952 22.0491 13.0475 22.4968 12.4952 22.4968C11.9429 22.4968 11.4952 22.0491 11.4952 21.4968V20.5C11.4952 19.9477 11.9429 19.5 12.4952 19.5Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99683 11.9984C1.99683 11.4461 2.44454 10.9984 2.99683 10.9984H3.99683C4.54911 10.9984 4.99683 11.4461 4.99683 11.9984C4.99683 12.5507 4.54911 12.9984 3.99683 12.9984H2.99683C2.44454 12.9984 1.99683 12.5507 1.99683 11.9984Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9968 11.9984C19.9968 11.4461 20.4445 10.9984 20.9968 10.9984H21.9936C22.5459 10.9984 22.9936 11.4461 22.9936 11.9984C22.9936 12.5507 22.5459 12.9984 21.9936 12.9984H20.9968C20.4445 12.9984 19.9968 12.5507 19.9968 11.9984Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07183 19.4219C4.68131 19.0313 4.68131 18.3982 5.07183 18.0077L5.77894 17.3005C6.16946 16.91 6.80263 16.91 7.19315 17.3005C7.58367 17.6911 7.58367 18.3242 7.19315 18.7148L6.48604 19.4219C6.09552 19.8124 5.46235 19.8124 5.07183 19.4219Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7998 6.69394C17.4092 6.30342 17.4092 5.67025 17.7998 5.27973L18.5046 4.5749C18.8951 4.18438 19.5283 4.18438 19.9188 4.5749C20.3093 4.96543 20.3093 5.59859 19.9188 5.98911L19.214 6.69394C18.8234 7.08447 18.1903 7.08447 17.7998 6.69394Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07183 4.5749C5.46235 4.18438 6.09552 4.18438 6.48604 4.5749L7.19315 5.28201C7.58367 5.67253 7.58367 6.3057 7.19315 6.69622C6.80263 7.08675 6.16946 7.08675 5.77894 6.69622L5.07183 5.98911C4.68131 5.59859 4.68131 4.96543 5.07183 4.5749Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7998 17.3028C18.1903 16.9123 18.8234 16.9123 19.214 17.3028L19.9188 18.0077C20.3093 18.3982 20.3093 19.0313 19.9188 19.4219C19.5283 19.8124 18.8951 19.8124 18.5046 19.4219L17.7998 18.717C17.4092 18.3265 17.4092 17.6933 17.7998 17.3028Z" fill="white" />
            </svg>
            <span className="text-[15px] font-medium font-['Poppins'] leading-normal">Light</span>
          </button>

          <button className={`flex  rounded-[32px] justify-center items-center gap-2 flex-1 text-gray-700 transition-all duration-500 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
            }`} onClick={handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56567 6.0256C6.71318 7.28671 5.5 9.41159 5.5 11.8167C5.5 15.6827 8.63401 18.8167 12.5 18.8167C14.9051 18.8167 17.0299 17.6035 18.2911 15.751C13.1817 15.1925 9.12421 11.1349 8.56567 6.0256ZM19.5 13.8167C20.366 13.8167 21.1118 14.5799 20.7691 15.3753C19.3898 18.576 16.2066 20.8167 12.5 20.8167C7.52944 20.8167 3.5 16.7872 3.5 11.8167C3.5 8.11009 5.74067 4.92685 8.9414 3.54758C9.73674 3.20485 10.5 3.95063 10.5 4.81667C10.5 9.78724 14.5294 13.8167 19.5 13.8167Z" fill="#6F767E" />
            </svg>
            <span className="text-[15px] font-medium font-['Poppins'] leading-normal">Dark</span>
          </button>





        </div>

      </aside>

    </>
  )
}
