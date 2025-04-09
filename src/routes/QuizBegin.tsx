import { useGetAppContext } from "../context/AppDataContext";
import { Navigate, Outlet } from "react-router-dom";

const QuizBegin = () => {
  const { formData } = useGetAppContext();

  return !formData ? <Outlet /> : <Navigate to="/quiz" />;
};

export default QuizBegin;
