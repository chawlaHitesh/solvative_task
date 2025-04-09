import React from "react";
import { useGetAppContext } from "../context/AppDataContext";

const QuizPass = ({ percentage }: { percentage: number }) => {
  const { result } = useGetAppContext();

  return (
    <div className="bg-[#fefef6] flex flex-col justify-center items-center p-6 text-center text-[#292343]">
      {/* Checkmark Icon */}
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <svg
          width="97"
          height="96"
          viewBox="0 0 97 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            width="96"
            height="96"
            rx="48"
            fill="#06AF52"
            fill-opacity="0.1"
          />
          <path
            d="M28.5 51L41 63.5L68.5 36"
            stroke="#06AF52"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl tracking-[0.3em] font-medium mb-2">
        CONGRATULATION
      </h1>
      <p className="text-sm md:text-base text-[#5a5560] mb-6">
        You successfully completed the Quiz and holds
      </p>

      {/* Score */}
      <p className="text-md md:text-lg text-[#5a5560]">Your Score</p>
      <p className="text-4xl md:text-5xl font-bold text-green-600 mt-1">
        {percentage}%
      </p>
      <p className="text-xl font-semibold text-[#292343] mt-2 mb-6">
        {percentage > 80 ? "Great job!" : "Well done!"}
      </p>

      {/* Stats Box */}
      <div className="bg-white rounded-md shadow-sm border px-6 py-4 text-sm md:text-base mb-6">
        <p className="mb-2 font-semibold">Out of 10 question</p>
        <div className="flex justify-center gap-4">
          <span className="text-green-600 font-medium">
            {result?.correct} Correct
          </span>
          <span className="text-red-600 font-medium">
            {result?.inCorrect} Incorrect
          </span>
          <span className="text-gray-500 font-medium">
            {result?.notAnswer} Not answered
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => window.location.reload()}
        className="border border-red-400 text-red-500 px-6 py-2 rounded-md hover:bg-red-100 transition"
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default QuizPass;
