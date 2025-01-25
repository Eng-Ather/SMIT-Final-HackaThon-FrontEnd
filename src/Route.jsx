// import React from "react";
// import { Routes } from "react-router";
// import App from "./App";
// import { Route } from "react-router";
// import Auth from "./pages/Auth/Auth";
// import AdminScreens from "./pages/AdminPages/AdminScreens";
// import MainScreen from "./pages/AdminPages/Pages/MainScreen";
// import MainPage from "./pages/MainPage";
// import MainLayout from "./components/MainLayout";

// function AppRouter() {
//   return (
//     <>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route index element={<App />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/site" element={<MainPage />} />
//         </Route>
//         <Route element={<AdminScreens />}>
//           <Route index path="/admin" element={<MainScreen />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default AppRouter;
// -------------------------------

// src/Route.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App"; // Main App component
import Auth from "./pages/Auth/Auth"; // Authentication Page
import AdminScreens from "./pages/AdminPages/AdminScreens"; // Admin Dashboard
import MainScreen from "./pages/AdminPages/Pages/MainScreen"; // Admin Main Screen
import MainPage from "./pages/MainPage"; // Main Page
import MainLayout from "./components/MainLayout"; // Layout for Main Pages

function AppRouter() {
  return (
    <Routes>
      {/* Routes for Public Pages */}
      <Route element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/site" element={<MainPage />} />
      </Route>

      {/* Routes for Admin Pages */}
      <Route element={<AdminScreens />}>
        <Route path="/admin" element={<MainScreen />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
