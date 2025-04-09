import React from "react";
import Timer from "./Timer";

const TopBar = ({
  activeQue,
  timeLimit,
}: {
  activeQue: number;
  timeLimit: number;
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg sm:text-xl font-semibold">
          <span className="text-rose-600">{activeQue + 1}</span> /10
        </div>
        {timeLimit && <Timer timeLimit={timeLimit} />}
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
        <div
          className={`bg-rose-600 h-2 rounded-full duration-300`}
          style={{ width: `${(activeQue + 1) * 10}%` }}
        />
      </div>
    </>
  );
};

export default TopBar;
