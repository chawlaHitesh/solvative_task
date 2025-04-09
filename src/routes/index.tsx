import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Quiz from "../pages/Quiz";
import MainQuizRoute from "./MainQuizRoute";
import QuizBegin from "./QuizBegin";
import QuizResult from "../components/QuizResult";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<QuizBegin />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<MainQuizRoute />}>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<QuizResult />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
