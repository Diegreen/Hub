import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { useState } from "react";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PostProvider } from "../providers/PostContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<PostProvider><DashboardPage /></PostProvider>}></Route>
      </Route>
    </Routes>
  );
};
