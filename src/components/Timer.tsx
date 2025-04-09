import React, { useEffect, useState } from "react";
import { useGetAppContext } from "../context/AppDataContext";

const Timer = ({ timeLimit }: { timeLimit: number }) => {
  const [count, setCount] = useState(timeLimit);
  const { setActiveQue, activeQue, setResult } = useGetAppContext();
  useEffect(() => {
    if (count <= 0) return;
    let time = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [count]);
  useEffect(() => {
    if (count <= 0 && activeQue < 9) {
      setActiveQue((pre) => pre + 1);
      setResult((pre) => {
        return { ...pre, notAnswer: pre?.notAnswer + 1 };
      });
    }
  }, [count]);

  console.log({ timeLimit });
  return (
    <div className="bg-gray-100 rounded px-3 py-1 text-rose-600 font-semibold text-sm">
      0:{count < 10 ? `0${count}` : count}
    </div>
  );
};

export default Timer;
