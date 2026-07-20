"use client";

import { useState, useCallback } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-[100px]">
      <p className="text-5xl font-bold">{count}</p>
      <button
        className="bg-blue-500 rounded text-white px-4 py-2 mt-4"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
