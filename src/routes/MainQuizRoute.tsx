import { useGetAppContext } from "../context/AppDataContext";
import { Navigate, Outlet } from "react-router-dom";

const MainQuizRoute = () => {
  const { formData } = useGetAppContext();
  return formData ? <Outlet /> : <Navigate to="/" />;
};

export default MainQuizRoute;
