import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        <Link to="/login" style={{ margin: "0 10px" }}>Нэвтрэх</Link>
        <Link to="/register" style={{ margin: "0 10px" }}>Бүртгүүлэх</Link>
        <Link to="/reset" style={{ margin: "0 10px" }}>Нууц үг мартсан</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
