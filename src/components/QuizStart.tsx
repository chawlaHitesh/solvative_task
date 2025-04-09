import { useState } from "react";
import { topicOptions } from "../constants/topicOptions";
import { QuizInfoType } from "../types/common";
import { TopicEnum } from "../types/TopicTypes";
import { useGetAppContext } from "../context/AppDataContext";
import QuizRulesModal from "./QuizRulesModal";

const QuizStart = () => {
  const [showModal, setShowModal] = useState(false);
  const { setFormData } = useGetAppContext();
  const [quizInfo, setQuizInfo] = useState<QuizInfoType>({
    name: "",
    topic: TopicEnum.JsBasics,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizInfo((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(quizInfo);
  };
  return (
    <>
      <div className="min-h-screen bg-[#fefef6] text-gray-800 px-4 flex justify-center">
        <form className="w-full max-w-2xl text-center" onSubmit={handleSubmit}>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 flex flex-wrap justify-center items-center gap-2 leading-tight">
            <span>Welcome to</span>
            <span className="text-quizPink font-normal">QUIZ</span>
            <span className="text-quizPink">Mania</span>
          </h1>

          {/* Rules box */}
          <div className="bg-gray-100 rounded-lg px-4 sm:px-6 py-4 mb-6 text-left shadow-sm">
            <p className="text-gray-700 text-sm sm:text-base">
              Please read all the rules about this quiz before you start.
            </p>
            <span
              onClick={() => setShowModal(true)}
              className="text-quizPink font-semibold hover:underline block mt-2 text-sm sm:text-base cursor-pointer"
            >
              Quiz rules
            </span>
          </div>

          {/* Full name input */}
          <div className="mb-6 text-left">
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Full name
            </label>
            <input
              onChange={handleChange}
              value={quizInfo?.name}
              required
              type="text"
              name="name"
              placeholder="Full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
            />
          </div>

          {/* Topics */}
          <div className="text-left mb-6">
            <label className="block mb-4 font-medium text-sm sm:text-base">
              Please select topic to continue
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topicOptions.map((topic, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 border border-gray-300 px-4 py-3 rounded-lg cursor-pointer hover:border-pink-400 text-sm sm:text-base"
                >
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="topic"
                    value={topic.value}
                    className="accent-pink-500"
                    defaultChecked={quizInfo?.topic === topic?.value}
                  />
                  <span className="font-medium">{topic?.title}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-md transition-all w-full sm:w-auto text-sm sm:text-base">
            Start Quiz
          </button>
        </form>
      </div>
      {showModal && <QuizRulesModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default QuizStart;
