import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    code: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [images, setImages] = useState({
    front: null,
    up: null,
    down: null,
    right: null,
    left: null,
  });

  const [previews, setPreviews] = useState({
    front: null,
    up: null,
    down: null,
    right: null,
    left: null,
  });

  useEffect(() => {
    // create previews
    const keys = Object.keys(images);
    keys.forEach((k) => {
      const f = images[k];
      if (f) {
        const url = URL.createObjectURL(f);
        setPreviews((p) => ({ ...p, [k]: url }));
      } else {
        setPreviews((p) => ({ ...p, [k]: null }));
      }
    });
    // cleanup not necessary for every change (simple UI), but revoke when unmount:
    return () => {
      Object.values(previews).forEach((u) => u && URL.revokeObjectURL(u));
    };
    // eslint-disable-next-line
  }, [images]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFile = (e, key) => {
    const file = e.target.files[0];
    if (file) setImages((s) => ({ ...s, [key]: file }));
  };

  const validate = () => {
    if (!form.firstName.trim() || !form.lastName.trim()) {
      alert("Овог, нэрийг оруулна уу.");
      return false;
    }
    if (!form.email.trim() || !form.phone.trim() || !form.code.trim()) {
      alert("Email, утас, кодыг заавал оруулна уу.");
      return false;
    }
    if (form.password !== form.confirmPassword) {
      alert("Нууц үг таарахгүй байна.");
      return false;
    }
    for (let k of Object.keys(images)) {
      if (!images[k]) {
        alert(`Та "${k}" төрлийн зургийг оруулна уу.`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Mock: save to localStorage (only UI demo)
    const data = {
      role,
      profile: form,
      uploaded: Object.fromEntries(Object.keys(images).map((k) => [k, images[k].name])),
      createdAt: new Date().toISOString(),
    };
    const users = JSON.parse(localStorage.getItem("ev_users") || "[]");
    users.push(data);
    localStorage.setItem("ev_users", JSON.stringify(users));

    alert("Бүртгэл амжилттай боллоо (mock).");
    navigate("/login");
  };

  return (
    <div className="card form-card register-card">
      <div className="card-left">
        <div className="logo-sm">EV</div>
        <h2 className="title">Бүртгүүлэх</h2>
        <p className="subtitle">Системд бүртгүүлэхийн тулд мэдээллээ бөглөж, 5 төрлийн зургийг оруулна уу</p>

        <div className="role-toggle">
          <button
            className={`role-btn ${role === "student" ? "active" : ""}`}
            onClick={() => setRole("student")}
            type="button"
          >
            Оюутан
          </button>
          <button
            className={`role-btn ${role === "teacher" ? "active" : ""}`}
            onClick={() => setRole("teacher")}
            type="button"
          >
            Багш
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="grid-2">
            <div>
              <label className="input-label">Овог</label>
              <input className="input" name="lastName" value={form.lastName} onChange={handleChange} />
            </div>

            <div>
              <label className="input-label">Нэр</label>
              <input className="input" name="firstName" value={form.firstName} onChange={handleChange} />
            </div>
          </div>

          <label className="input-label">Код (Оюутан/Багш)</label>
          <input className="input" name="code" value={form.code} onChange={handleChange} />

          <label className="input-label">И-мэйл</label>
          <input className="input" name="email" value={form.email} onChange={handleChange} />

          <label className="input-label">Утасны дугаар</label>
          <input className="input" name="phone" value={form.phone} onChange={handleChange} />

          <div className="grid-2">
            <div>
              <label className="input-label">Нууц үг</label>
              <input className="input" type="password" name="password" value={form.password} onChange={handleChange} />
            </div>
            <div>
              <label className="input-label">Нууц үг давтах</label>
              <input className="input" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
            </div>
          </div>

          <div className="file-section">
            <label className="input-label">5 зураг оруулах (front, up, down, right, left)</label>
            <div className="file-grid">
              {["front", "up", "down", "right", "left"].map((k) => (
                <div key={k} className="file-item">
                  <div className="file-thumb">
                    {previews[k] ? <img src={previews[k]} alt={k} /> : <div className="file-placeholder">{k}</div>}
                  </div>
                  <input type="file" accept="image/*" onChange={(e) => handleFile(e, k)} />
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Бүртгүүлэх</button>

          <p className="form-switch">
            Аль хэдийн бүртгэлтэй бол <span className="link-primary" onClick={() => navigate("/login")}>нэвтрэх</span>
          </p>
        </form>
      </div>

      <div className="card-right">
        <h3 className="right-title">Аюулгүй & Шударга</h3>
        <p className="right-text">Таны зургууд шалгалтын үед таныг баталгаажуулахад ашиглагдана. Зургуудыг сервер рүү илгээхэд HTTPS хэрэглэх хэрэгтэй.</p>
      </div>
    </div>
  );
}
