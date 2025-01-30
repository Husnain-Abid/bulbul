import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSelector } from "react-redux";

const Layout = () => {

  const darkMode = useSelector((state) => state.theme.darkMode);



  return (
    <div className="flex h-screen bg-gray-100 font-poppins">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className={`flex-1 overflow-y-auto ${darkMode ? 'bg-[#111315] text-white' : 'bg-customWhite text-black'}  `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;