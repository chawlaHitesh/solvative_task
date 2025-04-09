import { useGetAppContext } from "../context/AppDataContext";
import QuizPass from "./QuizPass";
import QuizPracticeScreen from "./QuizPracticeScreen";

const QuizResult = () => {
  const { result } = useGetAppContext();
  const percentage = (result?.correct / 10) * 100;
  return (
    <>
      {percentage >= 60 ? (
        <QuizPass percentage={percentage} />
      ) : (
        <QuizPracticeScreen percentage={percentage} />
      )}
    </>
  );
};

export default QuizResult;
