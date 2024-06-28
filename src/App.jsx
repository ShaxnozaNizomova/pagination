import React from "react";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
