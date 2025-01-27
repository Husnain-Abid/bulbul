import React from "react";
import { useSelector } from "react-redux";

const ControlButton = ({ icon, label, onClick, variant = "default" }) => {
  const baseClasses =
    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors";

  const variants = {
    default: "hover:bg-gray-50 text-gray-900 dark:hover:bg-gray-800",
    toggle:
      "hover:bg-gray-50 text-gray-900 dark:hover:bg-gray-800 flex justify-between min-w-[160px]",
  };

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} bg-white dark:bg-black text-gray-900 dark:text-white`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {label}
    </button>
  );
};

export default ControlButton;
