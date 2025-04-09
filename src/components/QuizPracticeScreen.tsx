import React from "react";
import { useGetAppContext } from "../context/AppDataContext";

const QuizPracticeScreen: React.FC<{ percentage: number }> = ({
  percentage,
}) => {
  const { result } = useGetAppContext();
  return (
    <div className="bg-[#fefef6] flex flex-col justify-center items-center p-6 text-center text-[#292343]">
      {/* Icon */}
      <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <svg
          width="87"
          height="87"
          viewBox="0 0 87 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.6064 6.11149C23.1719 6.11149 6.60645 22.6911 6.60645 43.143C6.60645 63.5948 23.1719 80.1745 43.6064 80.1745C64.0408 80.1745 80.6064 63.5948 80.6064 43.143C80.6064 22.6911 64.0408 6.11149 43.6064 6.11149ZM0.606445 43.143C0.606445 19.3745 19.8582 0.106384 43.6064 0.106384C67.3548 0.106384 86.6064 19.3745 86.6064 43.143C86.6064 66.9116 67.3548 86.1796 43.6064 86.1796C19.8582 86.1796 0.606445 66.9116 0.606445 43.143Z"
            fill="#B92B5D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.6069 31.1327C23.6069 28.9217 25.3978 27.1293 27.6069 27.1293H27.6428C29.852 27.1293 31.6428 28.9217 31.6428 31.1327C31.6428 33.3438 29.852 35.1361 27.6428 35.1361H27.6069C25.3978 35.1361 23.6069 33.3438 23.6069 31.1327ZM55.5709 31.1327C55.5709 28.9217 57.3617 27.1293 59.5709 27.1293H59.6069C61.8161 27.1293 63.6069 28.9217 63.6069 31.1327C63.6069 33.3438 61.8161 35.1361 59.6069 35.1361H59.5709C57.3617 35.1361 55.5709 33.3438 55.5709 31.1327Z"
            fill="#B92B5D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.3914 50.0347C59.0066 51.5741 58.2582 53.3215 56.7198 53.9377L36.7198 61.9445C35.1816 62.5602 33.4357 61.8112 32.8203 60.2714C32.205 58.7321 32.9533 56.9847 34.4916 56.3685L54.4918 48.3617C56.0298 47.746 57.7758 48.495 58.3914 50.0347Z"
            fill="#B92B5D"
          />
        </svg>
      </div>

      {/* Message */}
      <p className="text-sm md:text-base text-[#5a5560] mb-2">
        You successfully completed the Quiz but you need to
      </p>

      <h1 className="text-2xl md:text-3xl tracking-[0.3em] font-medium mb-4">
        KEEP <br />
        PRACTICING!
      </h1>

      {/* Score Block */}
      <div className="rounded-full border-2 border-yellow-400 px-8 py-4 mt-2 mb-6">
        <p className="text-[#5a5560] text-md">Your Score</p>
        <p className="text-3xl md:text-4xl font-bold text-yellow-600">
          {percentage}%
        </p>
      </div>

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

export default QuizPracticeScreen;
