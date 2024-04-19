// import React from "react";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ children, onClick }) => {
  return (
    <button
      className="w-[80px] h-[45px] bg-fuchsia-400 hover:bg-fuchsia-200 rounded-lg"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
