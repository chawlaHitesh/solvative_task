import React, { createContext, useContext, useEffect, useState } from "react";
import { TopicEnum } from "../types/TopicTypes";
import QUIZDATA from "../data/sampleData.json";
type FormData = {
  name: string;
  topic: TopicEnum;
};
type Result = {
  correct: number;
  inCorrect: number;
  notAnswer: number;
};
type AppDataContextType = {
  formData: FormData | null;
  setFormData: (data: FormData) => void;
  quizData: typeof QUIZDATA;
  filterQuiz: (typeof QUIZDATA.categories)[0] | undefined;
  activeQue: number;
  setActiveQue: React.Dispatch<React.SetStateAction<number>>;
  result: Result;
  setResult: React.Dispatch<React.SetStateAction<Result>>;
};
const AppDataContext = createContext<AppDataContextType>(null!);

const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [result, setResult] = useState<Result>({
    correct: 0,
    inCorrect: 0,
    notAnswer: 0,
  });
  const [filterQuiz, setFilterQuiz] = useState<
    (typeof QUIZDATA.categories)[0] | undefined
  >(undefined);
  useEffect(() => {
    setFilterQuiz(
      QUIZDATA?.categories?.find((quiz) => quiz.id === formData?.topic) ||
        QUIZDATA?.categories[0]
    );
  }, [formData?.topic]);
  const [activeQue, setActiveQue] = useState(0);
  return (
    <AppDataContext
      value={{
        formData,
        setFormData,
        quizData: QUIZDATA,
        filterQuiz,
        activeQue,
        setActiveQue,
        result,
        setResult,
      }}
    >
      {children}
    </AppDataContext>
  );
};
export const useGetAppContext = () => useContext(AppDataContext);
export default AppDataProvider;
