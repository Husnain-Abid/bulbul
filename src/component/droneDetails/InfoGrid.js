import React from "react";

const InfoGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index}>
          <p className="text-sm text-gray-500 mb-2">{item.label}</p>
          {item.label === "Status" ? (
            <p
              className={`font-medium inline-block text-xs rounded-full px-2 py-1 ${
                item.value === "Active"
                  ? "bg-[#ECFDF3] text-[#027A48]"
                  : "bg-red-500 text-white"
              }`}
            >
                {item.value}  
                          </p>
          ) : (
            <p className="font-medium">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoGrid;
