import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    emailOrPhone: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.emailOrPhone.trim() || !form.password.trim()) {
      alert("И-мэйл/Утас болон нууц үгийг оруулна уу.");
      return;
    }
    // Mock success
    alert("Амжилттай нэвтэрлээ (mock).");
    // navigate("/"); // дараа dashboard руу
  };

  return (
    <div className="card form-card">
      <div className="card-left">
        <div className="logo-sm">EV</div>
        <h2 className="title">Нэвтрэх</h2>
        <p className="subtitle">И-мэйл эсвэл утасны дугаар ашиглан нэвтэрнэ үү</p>

        <form onSubmit={handleSubmit} className="form">
          <label className="input-label">И-мэйл эсвэл утас</label>
          <input
            className="input"
            name="emailOrPhone"
            value={form.emailOrPhone}
            onChange={handleChange}
            placeholder="example@mail.com эсвэл 88001234"
          />

          <label className="input-label">Нууц үг</label>
          <input
            className="input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          <div className="form-row">
            <label className="checkbox">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />
              <span>Намайг сана</span>
            </label>

            <Link to="/reset" className="link-small">Нууц үг сэргээх</Link>
          </div>

          <button type="submit" className="btn btn-primary">Нэвтрэх</button>

          <div className="divider">эсвэл</div>

          <div className="social-row">
            <button type="button" className="btn btn-outline">Google-р нэвтрэх</button>
            <button type="button" className="btn btn-outline">Microsoft-р нэвтрэх</button>
          </div>

          <p className="form-switch">
            Бүртгэлгүй бол&nbsp;
            <Link to="/register" className="link-primary">энд дарж бүртгүүлнэ үү</Link>
          </p>
        </form>
      </div>

      <div className="card-right">
        <h3 className="right-title">Шалгалтанд бэлдэх</h3>
        <p className="right-text">ExamVision нь шалгалтын шууд хяналт, шударга байдлыг хангахад тусална.</p>
      </div>
    </div>
  );
}
