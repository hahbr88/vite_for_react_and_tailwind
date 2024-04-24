import React, { useState } from "react";
import CustomButton from "./custom-buttom";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <div className="text-[24px] font-bold flex justify-center">{count}</div>
      <div className="flex gap-2 mt-2">
        <CustomButton
          onClick={() => {
            setCount((prev) => prev - 1);
          }}>
          {"-"}
        </CustomButton>
        <CustomButton
          onClick={() => {
            setCount((prev) => prev + 1);
          }}>
          {"+"}
        </CustomButton>
      </div>
    </div>
  );
};

export default Counter;
