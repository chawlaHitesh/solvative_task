import { useMemo, useState } from "react";
import { useGetAppContext } from "../context/AppDataContext";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";

const QuizQuestion = ({
  activeQue,
  correctAnswer,
  options,
  timeLimit,
  question,
}: Partial<{
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  timeLimit: number;
  activeQue: number;
}>) => {
  const [selected, setSelected] = useState("");
  const { setActiveQue, setResult } = useGetAppContext();
  const navigate = useNavigate();
  const handleNext = () => {
    setActiveQue((pre) => {
      if (pre < 9) {
        return pre + 1;
      }
      return pre;
    });
    setResult((pre) => {
      return { ...pre, notAnswer: pre?.notAnswer + 1 };
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res = selected === correctAnswer ? "correct" : "inCorrect";
    setResult((pre) => {
      return { ...pre, [res]: pre?.[res as keyof typeof pre] + 1 };
    });
    setActiveQue((pre) => {
      if (pre < 9) {
        return pre + 1;
      }
      return pre;
    });
    setSelected("");
    if (activeQue === 9) {
      navigate("/result");
    }
  };
  const isCorrect = useMemo(() => {
    return selected === correctAnswer;
  }, [selected, correctAnswer]);
  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-[#fefef6] px-4 py-10 text-gray-900"
    >
      <TopBar activeQue={activeQue!} timeLimit={timeLimit!} />

      {/* Question */}
      <div className="text-lg sm:text-xl font-semibold mb-6">
        {activeQue! + 1}. {question}
      </div>

      {/* Options */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 auto-rows-fr">
        {options?.map((opt, idx) => (
          <label
            key={idx}
            className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-rose-400 text-base bg-white transition-all"
          >
            <input
              onChange={() => {
                setSelected(opt?.substring(0, 1));
              }}
              value={opt?.substring(0, 1)}
              type="radio"
              name="quiz-option"
              className={`accent-rose-500`}
              required
              checked={selected === opt?.substring(0, 1)}
            />
            <span className="font-medium">{opt}</span>
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="bg-rose-300 text-white font-semibold px-6 py-3 rounded-md hover:bg-rose-400 w-full sm:w-auto">
          {activeQue! >= 9 ? "Finish" : "Next"}
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="text-rose-600 font-semibold hover:underline w-full sm:w-auto"
        >
          Skip this question
        </button>
      </div>
    </form>
  );
};
export default QuizQuestion;
