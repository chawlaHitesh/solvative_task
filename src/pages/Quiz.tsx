import { useMemo } from "react";
import QuizQuestion from "../components/QuizQuestion";
import { useGetAppContext } from "../context/AppDataContext";

const Quiz = () => {
  const { filterQuiz, activeQue } = useGetAppContext();
  const data = useMemo(
    () => filterQuiz?.questions?.[activeQue],
    [filterQuiz, activeQue]
  );
  return <QuizQuestion {...data} activeQue={activeQue} key={data?.id} />;
};

export default Quiz;
