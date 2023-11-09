import React from "react";

const Tooltip = ({ content, children }) => {
  return (
    <div className="relative inline-block">
      {children}
      <div className="bg-gray-800 text-white text-center p-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 invisible transition duration-300 pointer-events-none group-hover:opacity-100 group-hover:visible">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
