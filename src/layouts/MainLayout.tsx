import React from "react";
import logo from "../assets/QUIZMania.png";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#fefdf6] flex flex-col items-center px-4">
      <header className="w-full py-4 border-b border-gray-200 bg-[#fefef6] px-6">
        <div className="w-full mx-5">
          <img src={logo} alt="QuizMania Logo" className="h-8 w-auto" />
        </div>
      </header>

      <main className="w-full max-w-md mt-10 text-center">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
