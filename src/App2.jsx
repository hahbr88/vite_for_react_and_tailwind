import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App2() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center w-[200px] h-fit p-4 border border-solid border-cyan-600 rounded-md">
        <div className="">
          <div className="text-[24px] font-bold flex justify-center">
            {count}
          </div>
          <div className="flex gap-2 mt-2">
            <Button onClick={() => setCount((prev) => prev - 1)}>{"-"}</Button>
            <Button onClick={() => setCount((prev) => prev + 1)}>{"+"}</Button>
            {/*
              {Button(setCount((prev) => prev - 1), "-")}
              {Button(setCount((prev) => prev + 1), "+")}
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
