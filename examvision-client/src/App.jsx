import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  return (
    <div className="auth-page">
      <header className="auth-header">
        <div className="brand">
          <div className="brand-logo">ExamVision</div>
          <div className="brand-sub">Онлайн шалгалтын систем</div>
        </div>

        <nav className="auth-nav">
          <Link to="/login" className="nav-link">Нэвтрэх</Link>
          <Link to="/register" className="nav-link">Бүртгүүлэх</Link>
          <Link to="/reset" className="nav-link">Нууц үг сэргээх</Link>
        </nav>
      </header>

      <main className="auth-main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </main>

      <footer className="auth-footer">
        <small>© {new Date().getFullYear()} ExamVision</small>
      </footer>
    </div>
  );
}
