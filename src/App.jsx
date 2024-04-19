import { useState } from "react";
import "./App.css";
import CustomButton from "./components/custom-buttom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex justify-center w-[200px] h-fit p-4 border border-solid border-cyan-600 rounded-md">
        <div className="">
          <div className="text-[24px] font-bold flex justify-center">
            {count}
          </div>
          <div className="flex gap-2 mt-2">
            <button
              className="w-[80px] h-[60px] bg-cyan-950 text-white rounded-md hover:bg-cyan-600"
              onClick={() => {
                setCount((prev) => prev - 1);
              }}>
              -
            </button>
            <button
              className="w-[80px] h-[60px] bg-cyan-950 text-white rounded-md hover:bg-cyan-600"
              onClick={() => {
                setCount((prev) => prev + 1);
              }}>
              +
            </button>
          </div>
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
      </div>
    </div>
  );
}

export default App;
